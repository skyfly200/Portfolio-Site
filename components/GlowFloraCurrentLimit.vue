<template>
  <div class="glf-calc">
    <div class="glf-formula">I<sub>lim</sub> (mA) = 6800 / R<sub>set</sub> (Ω)</div>

    <!-- ── MAIN CALCULATOR ── -->
    <div class="glf-section-title">Find Jumper Settings</div>
    <div class="glf-card">
      <div class="glf-input-row">
        <div class="glf-field">
          <label>LED count</label>
          <input
            type="number" v-model.number="queryLeds"
            placeholder="e.g. 12" min="1"
            @input="queryMa = null"
            @keydown.enter="calc"
          />
        </div>
        <div class="glf-field">
          <label>or target current (mA)</label>
          <input
            type="number" v-model.number="queryMa"
            placeholder="e.g. 840" min="1"
            @input="queryLeds = null"
            @keydown.enter="calc"
          />
        </div>
        <button class="glf-btn" @click="calc">FIND</button>
      </div>

      <div v-if="mainResult" class="glf-result">
        <div class="glf-result-main">{{ Math.round(mainResult.combo.I) }} mA</div>
        <div class="glf-result-sub">
          R<sub>set</sub> = {{ Math.round(mainResult.combo.rset) }} Ω
          <span v-if="mainResult.queryLabel"> · <strong>{{ mainResult.queryLabel }}</strong></span>
          <span v-if="mainResult.err != null"> · {{ mainResult.err >= 0 ? '+' : '' }}{{ mainResult.err.toFixed(0) }}% over target</span>
          <span v-if="mainResult.fallback" class="glf-dim"> · no exact match, showing nearest above</span>
        </div>
        <div class="glf-jumpers">
          <span
            v-for="(jl, i) in mainResult.combo.j" :key="i"
            :class="['glf-jp', jl === 'bypass' ? 'glf-jp-bypass' : 'glf-jp-active']"
          >
            <span class="glf-jp-tier">{{ tiers[i].name }}</span>{{ jl }}
          </span>
        </div>
      </div>
    </div>

    <!-- ── TIER VALUES ── -->
    <div class="glf-section-title">Tier Values</div>
    <table class="glf-tier-table">
      <thead>
        <tr><th>Tier</th><th>A</th><th>B</th><th>A ∥ B</th></tr>
      </thead>
      <tbody>
        <tr v-for="t in tiers" :key="t.name">
          <td class="glf-tier-name">{{ t.name }}</td>
          <td>{{ fR(t.a) }}</td>
          <td>{{ fR(t.b) }}</td>
          <td class="glf-dim">{{ fR(Math.round(par(t.a, t.b))) }}</td>
        </tr>
      </tbody>
    </table>

    <!-- ── REFERENCE TABLE ── -->
    <div class="glf-section-title">All Settings</div>
    <div class="glf-table-wrap">
      <table class="glf-ref-table">
        <thead>
          <tr>
            <th>LEDs</th>
            <th>Target</th>
            <th>T1</th>
            <th>T2</th>
            <th>T3</th>
            <th>Actual</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in table" :key="row.n"
            :class="{ 'glf-row-active': row.n === activeN }"
            @click="selectRow(row)"
            style="cursor:pointer"
          >
            <td :class="{ 'glf-hi': row.n === activeN }">
              {{ row.n }}{{ row.capped ? ' ⚡' : '' }}
            </td>
            <td class="glf-dim">{{ Math.round(row.target) }} mA</td>
            <td
              v-for="(jl, i) in row.j" :key="i"
              :class="jl === 'bypass' ? 'glf-dim' : 'glf-hi'"
            >{{ jl }}</td>
            <td :class="row.n === activeN ? 'glf-hi' : 'glf-dim'">
              {{ Math.round(row.actual) }} mA
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ── CUSTOM PAD ── -->
    <div class="glf-section-title">Custom Pad</div>
    <div class="glf-card">
      <p class="glf-hint">
        For an exact limit — solder one resistor to the custom pad and leave all tier jumpers open.<br>
        <code>R = 6800 / I<sub>target</sub> &nbsp;·&nbsp; I<sub>target</sub> = N × 60 mA × 1.20</code>
      </p>
      <div class="glf-input-row">
        <div class="glf-field">
          <label>LED count</label>
          <input
            type="number" v-model.number="cpLeds"
            placeholder="e.g. 11" min="1"
            @input="cpMa = null"
            @keydown.enter="calcCustom"
          />
        </div>
        <div class="glf-field">
          <label>or exact current (mA)</label>
          <input
            type="number" v-model.number="cpMa"
            placeholder="e.g. 750" min="1"
            @input="cpLeds = null"
            @keydown.enter="calcCustom"
          />
        </div>
        <button class="glf-btn" @click="calcCustom">CALC</button>
      </div>

      <div v-if="cpResult" class="glf-result">
        <div class="glf-result-main">{{ fR(cpResult.nearest) }}</div>
        <div class="glf-result-sub">
          Ideal: {{ Math.round(cpResult.rIdeal) }} Ω ·
          Nearest E24: <strong>{{ fR(cpResult.nearest) }}</strong> →
          {{ Math.round(cpResult.actualI) }} mA
          ({{ cpResult.err >= 0 ? '+' : '' }}{{ cpResult.err.toFixed(1) }}%)<br>
          <span class="glf-dim">Leave all tier jumpers </span><strong>open</strong>
          <span class="glf-dim">. Solder {{ fR(cpResult.nearest) }} to the custom pad.</span>
        </div>
      </div>
    </div>

    <!-- ── NOTES ── -->
    <div class="glf-notes">
      <strong>One state per tier.</strong> Bypass shorts the tier — 0 Ω. A+B closes two jumpers but counts as one tier selection.<br>
      <strong>ISET must always have a path to GND</strong> — at least one non-bypass tier, or a custom pad resistor.<br>
      <strong>2.5 A board limit</strong> — PCB traces and connector are rated to 2.5 A.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ── CONSTANTS ──────────────────────────────────────────────────────────────
const K = 6800
const BUFFER = 0.20
const MAX_CAP = 2500

const tiers = [
  { name: 'T1', a: 24000, b: 47000 },
  { name: 'T2', a: 4700, b: 10000 },
  { name: 'T3', a: 3900, b: 8200 },
]

const E24_VALS = [10,11,12,13,15,16,18,20,22,24,27,30,33,36,39,43,47,51,56,62,68,75,82,91]
  .flatMap(v => [100, 1000, 10000, 100000].map(m => v * m))

// ── HELPERS ────────────────────────────────────────────────────────────────
const par = (a, b) => (a * b) / (a + b)

function fR(v) {
  if (!v) return '0'
  if (v >= 1000) return (v / 1000).toFixed(v % 1000 ? 1 : 0).replace(/\.0$/, '') + 'K'
  return v + 'Ω'
}

function rawI(n) { return n === 2 ? 120 : n * 60 }

// ── BUILD ALL 63 COMBOS ───────────────────────────────────────────────────
const tierOpts = tiers.map(t => [
  { label: 'bypass', v: 0 },
  { label: 'A', v: t.a },
  { label: 'B', v: t.b },
  { label: 'A+B', v: par(t.a, t.b) },
])

const combos = (() => {
  const seen = new Set()
  const out = []
  for (const o1 of tierOpts[0])
    for (const o2 of tierOpts[1])
      for (const o3 of tierOpts[2]) {
        const rset = o1.v + o2.v + o3.v
        const key = Math.round(rset * 100)
        if (!rset || seen.has(key)) continue
        seen.add(key)
        out.push({ I: K / rset * 1000, rset, j: [o1.label, o2.label, o3.label] })
      }
  return out.sort((a, b) => a.I - b.I)
})()

// ── LOOKUP TABLE (2–40 LEDs, step 2) ─────────────────────────────────────
const table = (() => {
  const rows = []
  for (let n = 2; n <= 40; n += 2) {
    const target = Math.min(rawI(n) * (1 + BUFFER), MAX_CAP)
    const lo = target, hi = target * (1 + BUFFER)
    const hits = combos.filter(c => c.I >= lo && c.I <= hi)
    if (!hits.length) continue
    const best = hits.reduce((a, b) =>
      Math.abs(a.I - lo) < Math.abs(b.I - lo) ? a : b)
    rows.push({ n, target, actual: best.I, j: best.j, capped: lo >= MAX_CAP })
  }
  return rows
})()

// ── STATE ──────────────────────────────────────────────────────────────────
const queryLeds = ref(null)
const queryMa = ref(null)
const mainResult = ref(null)
const activeN = ref(null)

const cpLeds = ref(null)
const cpMa = ref(null)
const cpResult = ref(null)

// ── MAIN CALC ──────────────────────────────────────────────────────────────
function findBestCombo(targetI) {
  const lo = targetI, hi = targetI * (1 + BUFFER)
  const inWindow = combos.filter(c => c.I >= lo && c.I <= hi)
  if (inWindow.length) {
    return { combo: inWindow.reduce((a, b) =>
      Math.abs(a.I - lo) < Math.abs(b.I - lo) ? a : b), fallback: false }
  }
  const above = combos.filter(c => c.I >= lo)
  return { combo: above.length ? above[0] : combos[combos.length - 1], fallback: true }
}

function calc() {
  if (!queryLeds.value && !queryMa.value) return

  let targetI, queryLabel = null, err = null

  if (queryLeds.value) {
    const n = queryLeds.value
    targetI = Math.min(rawI(n) * (1 + BUFFER), MAX_CAP)
    queryLabel = `${n} LEDs`
  } else {
    targetI = queryMa.value
    queryLabel = `${Math.round(targetI)} mA`
  }

  const { combo, fallback } = findBestCombo(targetI)
  err = (combo.I - targetI) / targetI * 100

  const matchRow = table.find(r => Math.abs(r.actual - combo.I) < 1)
  activeN.value = matchRow ? matchRow.n : null

  mainResult.value = { combo, queryLabel, err, fallback }
}

function selectRow(row) {
  activeN.value = row.n
  queryLeds.value = row.n
  queryMa.value = null
  const targetI = Math.min(rawI(row.n) * (1 + BUFFER), MAX_CAP)
  const { combo, fallback } = findBestCombo(targetI)
  mainResult.value = {
    combo,
    queryLabel: `${row.n} LEDs`,
    err: (combo.I - targetI) / targetI * 100,
    fallback,
  }
}

// ── CUSTOM PAD CALC ────────────────────────────────────────────────────────
function calcCustom() {
  if (!cpLeds.value && !cpMa.value) return

  const targetI = cpLeds.value
    ? Math.min(rawI(cpLeds.value) * (1 + BUFFER), MAX_CAP)
    : cpMa.value

  const rIdeal = K / targetI * 1000
  const nearest = E24_VALS.reduce((a, b) =>
    Math.abs(a - rIdeal) < Math.abs(b - rIdeal) ? a : b)
  const actualI = K / nearest * 1000
  const err = (actualI - targetI) / targetI * 100

  cpResult.value = { rIdeal, nearest, actualI, err }
}
</script>

<style scoped>
.glf-calc {
  --glf-brand: #4ade80;
  --glf-brand-soft: rgba(74, 222, 128, 0.12);
  --glf-bg: #ffffff;
  --glf-bg-soft: #f6f8fa;
  --glf-border: #e2e8f0;
  --glf-divider: #f0f4f8;
  --glf-text-1: #1a202c;
  --glf-text-2: #4a5568;
  --glf-text-3: #a0aec0;

  font-family: 'Share Tech Mono', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: var(--glf-text-1);
  margin: 1.5rem 0;
}

.glf-formula {
  display: inline-block;
  margin-bottom: 1.25rem;
  padding: .3rem .75rem;
  background: var(--glf-bg-soft);
  border: 1px solid var(--glf-border);
  border-radius: 4px;
  font-size: .85rem;
  color: var(--glf-brand);
}

.glf-section-title {
  font-size: .65rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--glf-text-3);
  margin: 1.25rem 0 .6rem;
  padding-bottom: .3rem;
  border-bottom: 1px solid var(--glf-border);
}

/* Card */
.glf-card {
  background: var(--glf-bg-soft);
  border: 1px solid var(--glf-border);
  border-radius: 6px;
  padding: 1rem 1.1rem 1.1rem;
  margin-bottom: .5rem;
}

.glf-hint {
  font-size: .72rem;
  color: var(--glf-text-2);
  margin-bottom: .75rem;
  line-height: 1.7;
}

/* Inputs */
.glf-input-row {
  display: flex;
  align-items: flex-end;
  gap: .65rem;
  flex-wrap: wrap;
  margin-bottom: .85rem;
}

.glf-field {
  display: flex;
  flex-direction: column;
  gap: .2rem;
}

.glf-field label {
  font-size: .6rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--glf-text-3);
}

.glf-field input {
  width: 130px;
  padding: .38rem .6rem;
  background: var(--glf-bg);
  border: 1px solid var(--glf-border);
  border-radius: 4px;
  color: var(--glf-text-1);
  font-family: inherit;
  font-size: .9rem;
  outline: none;
  transition: border-color .15s;
  -moz-appearance: textfield;
}

.glf-field input::-webkit-outer-spin-button,
.glf-field input::-webkit-inner-spin-button { -webkit-appearance: none; }

.glf-field input:focus { border-color: var(--glf-brand); }

.glf-btn {
  padding: .4rem 1rem;
  background: var(--glf-brand-soft);
  border: 1px solid var(--glf-brand);
  color: var(--glf-brand);
  font-family: inherit;
  font-size: .72rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  transition: all .15s;
  white-space: nowrap;
}

.glf-btn:hover { background: var(--glf-brand); color: white; }

/* Result */
.glf-result {
  border-top: 1px solid var(--glf-border);
  padding-top: .85rem;
}

.glf-result-main {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--glf-brand);
  line-height: 1;
  margin-bottom: .35rem;
}

.glf-result-sub {
  font-size: .75rem;
  color: var(--glf-text-2);
  line-height: 1.8;
  margin-bottom: .5rem;
}

.glf-jumpers {
  display: flex;
  gap: .4rem;
  flex-wrap: wrap;
}

.glf-jp {
  display: inline-flex;
  align-items: center;
  gap: .3rem;
  padding: .22rem .55rem;
  border-radius: 4px;
  font-size: .72rem;
  border: 1px solid;
}

.glf-jp-tier {
  font-size: .58rem;
  letter-spacing: .08em;
  opacity: .6;
}

.glf-jp-bypass {
  background: var(--glf-bg);
  border-color: var(--glf-border);
  color: var(--glf-text-3);
}

.glf-jp-active {
  background: var(--glf-brand-soft);
  border-color: var(--glf-brand);
  color: var(--glf-brand);
}

/* Tier value table */
.glf-tier-table {
  width: 100%;
  border-collapse: collapse;
  font-size: .8rem;
  margin-bottom: .5rem;
}

.glf-tier-table th {
  text-align: left;
  padding: .3rem .65rem;
  font-size: .6rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--glf-text-3);
  border-bottom: 1px solid var(--glf-border);
}

.glf-tier-table td {
  padding: .28rem .65rem;
  border-bottom: 1px solid var(--glf-divider);
}

.glf-tier-name {
  font-size: .7rem;
  letter-spacing: .1em;
  color: var(--glf-brand);
}

/* Reference table */
.glf-table-wrap { overflow-x: auto; margin-bottom: .5rem; }

.glf-ref-table {
  width: 100%;
  border-collapse: collapse;
  font-size: .78rem;
  white-space: nowrap;
}

.glf-ref-table th {
  text-align: left;
  padding: .3rem .6rem;
  font-size: .58rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--glf-text-3);
  border-bottom: 1px solid var(--glf-border);
}

.glf-ref-table td {
  padding: .28rem .6rem;
  border-bottom: 1px solid var(--glf-divider);
}

.glf-ref-table tr:hover td { background: var(--glf-bg-soft); }

.glf-row-active td { background: var(--glf-brand-soft) !important; }

.glf-row-active td:first-child { border-left: 2px solid var(--glf-brand); }

.glf-hi { color: var(--glf-brand); font-weight: 600; }

.glf-dim { color: var(--glf-text-3); }

/* Notes */
.glf-notes {
  margin-top: 1.25rem;
  font-size: .72rem;
  color: var(--glf-text-2);
  line-height: 1.9;
  padding-left: .85rem;
  border-left: 2px solid var(--glf-border);
}
</style>
