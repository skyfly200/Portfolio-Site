<template lang="pug">
.case-studies.skill

  v-btn(href="/services" variant="text" color="primary").home-btn
    i.fas.fa-arrow-left.mr-2
    span Services

  .page-header(data-aos="fade-down")
    .header-eyebrow Results &amp; Impact
    h1.header-title Case Studies
    p.header-sub Real problems, technical solutions, and measurable outcomes.

  v-divider.my-6

  .content-wrap
    v-card.study-card.mb-10(v-for="study in studies" :key="study.title" data-aos="fade-up")
      v-card-text
        .study-eyebrow {{ study.context }}
        h2.study-title {{ study.title }}

        v-divider.my-4

        .study-section.mb-6
          .study-label The Challenge
          p.study-text {{ study.challenge }}

        .study-section.mb-6
          .study-label The Solution
          ul.solution-list(v-if="Array.isArray(study.solution)")
            li.study-text(v-for="point in study.solution" :key="point") {{ point }}
          p.study-text(v-else) {{ study.solution }}

        .outcome-box
          .study-label The Outcome
          p.study-text {{ study.outcome }}

</template>

<script>
export default {
  name: "caseStudies",
  data: () => ({
    studies: [
      {
        context: "Music Venue · Nederland, CO",
        title: "Caribou Room — Full Network & Lighting Modernization",
        challenge: "The Caribou Room had the bones of a solid infrastructure — building-wide ethernet wiring and a reliable CenturyLink fiber connection — but none of it was being used effectively. WiFi relied on two older, slow routers that couldn't cover the building adequately, the point-of-sale system ran on an aging router that had started glitching mid-service, and their Lutron Radio RA lighting hub was an early manufactured unit that shipped with insufficient RAM, leaving it permanently stuck and unable to take any later firmware updates. The venue had no way to prioritize bandwidth across different use cases.",
        solution: [
          "Designed and deployed a distributed WiFi network using existing ethernet runs, anchored by a high-powered core router to manage throughput across all access points",
          "Replaced the failing POS router with a reliable model, isolating that network for stability",
          "Identified a Lutron hardware limitation — early-manufactured hubs shipped with insufficient RAM and couldn't take later firmware updates — and worked with Lutron to secure a free upgrade to the latest Radio RA 3 platform",
          "Configured the new hub using Lutron's toolset, restoring app and device integrations and enabling the latest firmware",
          "Configured QoS rules and per-network bandwidth limits to protect the highest-priority systems",
        ],
        outcome: "Venue-wide WiFi coverage, a stable POS system that no longer dropped during service, and a fully modernized Radio RA 3 lighting system with restored app and device integrations — all leveraging infrastructure they already owned.",
      },
      {
        context: "Wireless ISP · Nederland, CO",
        title: "Nedernet — Network Automation, Monitoring & Channel Planning",
        challenge: "Nedernet is a small wireless ISP serving mountain communities in and around Nederland, Colorado using a network of nearly 500 Ubiquiti 5GHz WiFi links. As a licensed operator, they had the right to unlock the UNII reserved frequency bands on their devices — access to additional channels that significantly reduced interference in denser parts of the network. But the unlock process required rolling back each device's firmware to an older version exposing the unlock UI, performing the unlock, then re-flashing to the latest firmware: five to ten minutes per device across a fleet of hundreds, with no reliable way to verify unlock status beforehand. The team's visibility into device health was limited to old custom-built tools with only basic information, firmware updates were manual and disruptive, and the network's channel assignments had grown inconsistent — some out of compliance with FCC 5GHz specifications.",
        solution: [
          "Unlock Automation: Discovered the underlying unlock command line tool existed in every firmware version — not just older ones. Built a script that SSHes directly into a device and pushes the unlock key in seconds, with no firmware rollback required. Supported bulk operation across entire IP ranges and could audit devices to verify unlock status before any channel changes.",
          "AirControl Deployment: Installed and configured Ubiquiti's AirControl software, replacing limited custom-built tools with a real-time dashboard of every device on the network — service quality, signal levels, and device health — plus scheduled bulk firmware updates at 4 AM with minimal customer disruption.",
          "Channel Planning Tool: Built a custom React tool to visualize frequency band usage for any given area, showing which channels were in use, at what bandwidth, and how they overlapped — making interference-free planning concrete rather than guesswork.",
          "Network-Wide Replanning: Used the new unlock capability, network visibility, and visualization tool to re-plan channel assignments across the entire network, reducing interference in dense areas and fixing inconsistencies with FCC 5GHz channel specifications.",
        ],
        outcome: "Five-to-ten minute per-device unlock operations became seconds. Forty to eighty hours of potential manual work across a fleet of ~500 devices was eliminated. The team gained real-time visibility into network health they had never had before, firmware updates stopped being a customer-disrupting gamble, and the channel plan went from an ad-hoc patchwork to a clean, interference-reduced, FCC-compliant design.",
      },
      {
        context: "Ethereum Generative Art · TinyBoxes & ArtBlocks",
        title: "On-Chain Randomness Vulnerability & Solution",
        challenge: "Generative art projects like ArtBlocks relied on a random seed at mint time to produce each token's unique artwork. The randomness source combined the block number, token ID, and minting address. Unlike a block hash — which is only known once a block is confirmed — the block number is fully predictable well in advance. This meant anyone could pre-compute exactly what output they would get from any given mint with no time pressure whatsoever: the inputs were public, the formula was public, and the result was entirely deterministic. No specialized hardware or speed advantage required — just the math.",
        solution: "To demonstrate the severity, I built two tools. The first, Omnipotent Artist, let anyone visualize exactly what token they would mint in any upcoming block. The second used Ethereum's CREATE2 opcode to deploy a contract to a precisely calculated address, then use that contract to execute the mint — making the minting address a controllable input, allowing iteration through potential addresses until finding one that produced exactly the desired token. To prove the real-world stakes, I demonstrated the exploit against ArtBlocks' Chromie Squiggles on testnet, generating pieces of greater rarity than some that had sold for millions of dollars. Rather than use Chainlink VRF — which would introduce an oracle dependency and async callback — I built a fully on-chain solution using data points that change unpredictably block-to-block as a byproduct of organic user activity: token supplies of assets like DAI and USDC that are constantly minted and burned in unrelated transactions. By reading several of these intractable, ever-shifting values into the randomness calculation, the seed becomes impossible to predict in advance.",
        outcome: "I brought the vulnerability to ArtBlocks' attention along with proof-of-concept exploits demonstrating exactly how their first-generation contracts could be gamed. They adopted the improved randomness system into their later contract generations — ensuring the integrity of randomness for generative art projects across their entire platform.",
      },
      {
        context: "Ethereum Generative Art · Collaboration with Nate Alex",
        title: "TinyBoxes — On-Chain SVG Compression, Animation & User Configuration",
        challenge: "TinyBoxes started as a generative art concept by Nate Alex — a Solidity script that randomly shuffled layered boxes to produce unique compositions. The original implementation stored the entire SVG output directly on-chain as a blob for each token. The result was prohibitively expensive: minting a single piece cost between $1,000 and $2,000 in gas fees just to store the SVG. At that price, the project simply couldn't ship.",
        solution: "Looking at the SVG output, I noticed massive redundancy — the structure was always the same patterns of elements with only certain values changing. It was a templating problem, or a special-case compression problem. I rebuilt the system around an on-chain renderer: a Solidity contract that takes a token's stored options and random seed and generates the complete SVG on demand using free read functions. Solidity has essentially no useful string handling primitives, so I built custom string parsing tooling from scratch and created a library of functions for each templated SVG chunk — constructing rectangles, applying animations, assembling layers. With storage costs solved, I expanded what the system could do: user-configurable parameters let minters set the bounds and feel of their piece while the algorithm made precise choices within those constraints, a UI let users explore the generative space before committing, and animations were added to bring the shapes to life — all cheap to include once storage overhead was gone.",
        outcome: "Minting went from $1,000–$2,000 per token in storage gas to a total on-chain footprint of just 256 bits — a single Ethereum data block, the same storage cost as any standard NFT. The full SVG including animations renders on demand for free. What started as an unshippable project became a fully on-chain generative art system with user collaboration, dynamic output, and near-zero storage overhead.",
      },
    ],
  }),
};
</script>

<style lang="sass">
.case-studies
  width: 100%
  color: white
  padding-bottom: 80px

  .home-btn
    margin: 16px 0 0 16px

  .page-header
    text-align: center
    padding: 48px 24px 24px
    max-width: 760px
    margin: 0 auto
    .header-eyebrow
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      letter-spacing: 0.25em
      text-transform: uppercase
      color: #7627D0
      margin-bottom: 12px
    h1.header-title
      font-family: 'Nixie One', sans-serif
      font-size: clamp(2rem, 5vw, 3rem)
      font-weight: 700
      line-height: 1.1
      margin-bottom: 16px
    .header-sub
      font-family: 'Raleway', sans-serif
      font-size: 1.05rem
      opacity: 0.7

  .content-wrap
    max-width: 900px
    margin: 0 auto
    padding: 0 24px

  .study-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important

  .study-eyebrow
    font-family: 'Nixie One', sans-serif
    font-size: 0.8rem
    letter-spacing: 0.2em
    text-transform: uppercase
    color: #7627D0
    margin-bottom: 8px

  h2.study-title
    font-family: 'Nixie One', sans-serif
    font-size: clamp(1.2rem, 3vw, 1.6rem)
    font-weight: 700
    color: white
    margin: 0 0 4px

  .study-label
    font-family: 'Nixie One', sans-serif
    font-size: 0.75rem
    letter-spacing: 0.18em
    text-transform: uppercase
    color: rgba(168, 85, 247, 0.85)
    margin-bottom: 10px

  .study-text
    font-family: 'Raleway', sans-serif
    font-size: 0.95rem
    line-height: 1.85
    opacity: 0.85
    margin: 0

  .solution-list
    padding-left: 1.2em
    margin: 0
    li.study-text
      margin-bottom: 10px
      &:last-child
        margin-bottom: 0

  .outcome-box
    background: rgba(118, 39, 208, 0.12)
    border: 1px solid rgba(118, 39, 208, 0.3)
    border-radius: 8px
    padding: 16px 20px
</style>
