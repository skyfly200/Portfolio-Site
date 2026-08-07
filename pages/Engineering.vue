<template lang="pug">
.engineering.skill

  .page-nav
    v-btn(href="/" variant="text" color="primary" size="small")
      i.fas.fa-arrow-left.mr-2
      | Home
    .nav-links
      v-btn(to="/engineering" variant="text" color="primary" size="small").active-link Engineering
      v-btn(to="/services" variant="text" color="primary" size="small") IT Services

  .page-header(data-aos="fade-down")
    .header-eyebrow High-Precision Engineering
    h1.header-title Engineering
    .rate-badge $100 – $200 / hr · or fixed project quotes
    p.header-sub At the intersection of hardware, software, and physical design, I help turn complex ideas into reliable, fully realized technical solutions. Bringing a multidisciplinary approach to every build—from multi-layer PCB layouts and custom 3D CAD enclosures to full-stack code and network architecture—I prioritize rigorous attention to detail and clear, collaborative communication. Every prototype and system is engineered with craftsmanship, ensuring a finished product that not only functions seamlessly but truly satisfies the client's vision.

  v-divider.my-6

  .cards-grid
    v-row

      v-col(cols="12" md="6")
        v-card#hardware.skill-card
          v-card-item
            .card-rate $100 – $200 / hr
            v-card-title.card-title Hardware Design & PCB Prototyping
            v-card-subtitle.card-sub From napkin sketch to physical circuit board.
          v-card-text.card-body
            p End-to-end custom electronics design and prototype development for hardware products, embedded systems, and custom lighting.
            v-list(bg-color="transparent" density="compact")
              v-list-item(prepend-icon="fa:fas fa-diagram-project")
                strong Schematic & PCB Layout —
                |  multi-layer board design tailored to your mechanical specs and form factor.
              v-list-item(prepend-icon="fa:fas fa-cube")
                strong Custom Enclosures & CAD Integration —
                |  integrated 3D CAD design for protective, functional, and aesthetic housings.
              v-list-item(prepend-icon="fa:fas fa-microchip")
                strong Component Sourcing & BOM Optimization —
                |  reliable microcontrollers, power architectures, and sensors.
              v-list-item(prepend-icon="fa:fas fa-screwdriver-wrench")
                strong Firmware Integration & Assembly —
                |  from digital CAD files to fully functional physical prototypes.
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" href="https://calendar.app.google/dVP9wvqD9Hv6RtfT7" target="_blank")
              i.fas.fa-calendar.mr-2
              | Book Consult
            v-btn(color="primary" variant="outlined" href="mailto:engineering@skylerfly.com?subject=Project%20Inquiry%3A%20Hardware%20Design%20%26%20PCB%20Prototyping&body=Interested%20in%3A%20Hardware%20Design%20%26%20PCB%20Prototyping%0A%0A")
              i.fas.fa-envelope.mr-2
              | Start a Project

      v-col(cols="12" md="6")
        v-card#cad.skill-card
          v-card-item
            .card-rate $100 – $200 / hr
            v-card-title.card-title 3D CAD & Mechanical Product Design
            v-card-subtitle.card-sub Precision 3D modeling for manufacturing and rapid prototyping.
          v-card-text.card-body
            p Standalone computer-aided design services for custom enclosures, functional mechanical parts, and physical product concepts.
            v-list(bg-color="transparent" density="compact")
              v-list-item(prepend-icon="fa:fas fa-box")
                strong Custom Enclosure Design —
                |  housings engineered specifically around internal PCBs, optics, and electronics.
              v-list-item(prepend-icon="fa:fas fa-print")
                strong Design for Additive Manufacturing —
                |  optimizing models for rapid functional prototyping and low-volume production.
              v-list-item(prepend-icon="fa:fas fa-shapes")
                strong Concept Modeling & Mechanical Assemblies —
                |  turning rough concepts or specs into precise 3D CAD models.
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" href="https://calendar.app.google/dVP9wvqD9Hv6RtfT7" target="_blank")
              i.fas.fa-calendar.mr-2
              | Book Consult
            v-btn(color="primary" variant="outlined" href="mailto:engineering@skylerfly.com?subject=Project%20Inquiry%3A%203D%20CAD%20%26%20Mechanical%20Design&body=Interested%20in%3A%203D%20CAD%20%26%20Mechanical%20Product%20Design%0A%0A")
              i.fas.fa-envelope.mr-2
              | Start a Project

      v-col(cols="12" md="6")
        v-card#software.skill-card
          v-card-item
            .card-rate $100 – $200 / hr
            v-card-title.card-title Full-Stack Software Development
            v-card-subtitle.card-sub Custom web applications & complex software architecture.
          v-card-text.card-body
            p Scalable, robust software development tailored to complex business requirements and custom hardware APIs.
            v-list(bg-color="transparent" density="compact")
              v-list-item(prepend-icon="fa:fas fa-window-maximize") Web Applications & Dashboards (Vue, Nuxt, Node.js, Python)
              v-list-item(prepend-icon="fa:fas fa-plug") API Development & System Integrations
              v-list-item(prepend-icon="fa:fas fa-link") Smart Contracts & Web3 / Decentralized Application Infrastructure
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" href="https://calendar.app.google/dVP9wvqD9Hv6RtfT7" target="_blank")
              i.fas.fa-calendar.mr-2
              | Book Consult
            v-btn(color="primary" variant="outlined" href="mailto:engineering@skylerfly.com?subject=Project%20Inquiry%3A%20Full-Stack%20Software%20Development&body=Interested%20in%3A%20Full-Stack%20Software%20Development%0A%0A")
              i.fas.fa-envelope.mr-2
              | Start a Project

      v-col(cols="12" md="6")
        v-card#network.skill-card
          v-card-item
            .card-rate $100 – $200 / hr
            v-card-title.card-title Network Engineering & Systems Architecture
            v-card-subtitle.card-sub Secure, high-performance infrastructure.
          v-card-text.card-body
            p Enterprise and advanced networking setups for businesses requiring maximum uptime, security, and throughput.
            v-list(bg-color="transparent" density="compact")
              v-list-item(prepend-icon="fa:fas fa-network-wired") Custom Network Routing & Infrastructure Layouts
              v-list-item(prepend-icon="fa:fas fa-server") System Automation, Security Systems & Server Deployment
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" href="https://calendar.app.google/dVP9wvqD9Hv6RtfT7" target="_blank")
              i.fas.fa-calendar.mr-2
              | Book Consult
            v-btn(color="primary" variant="outlined" href="mailto:engineering@skylerfly.com?subject=Project%20Inquiry%3A%20Network%20Engineering&body=Interested%20in%3A%20Network%20Engineering%20%26%20Systems%20Architecture%0A%0A")
              i.fas.fa-envelope.mr-2
              | Start a Project

    v-divider.my-8

    .cross-cta(data-aos="fade-up")
      .cta-label Looking for local help instead?
      p.cta-body Home and business IT support, device setup, and 1-on-1 tech &amp; coding tutoring — $60 – $100 / hr.
      v-btn(color="primary" variant="outlined" to="/services" size="large")
        span Visit IT Services
        i.fas.fa-arrow-right.ml-2
</template>

<script>
export default { name: "engineering" };
</script>

<style lang="sass">
.engineering
  width: 100%
  color: white
  padding-bottom: 80px

  .page-nav
    display: flex
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
    gap: 8px
    padding: 16px 16px 0
    .nav-links
      display: flex
      gap: 4px
    .active-link
      font-weight: 700
      text-decoration: underline

  .page-header
    text-align: center
    padding: 40px 24px 24px
    max-width: 820px
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
      margin-bottom: 12px
    .rate-badge
      display: inline-block
      font-family: 'Nixie One', sans-serif
      font-size: 0.9rem
      letter-spacing: 0.05em
      color: #a855f7
      border: 1px solid rgba(168, 85, 247, 0.5)
      border-radius: 999px
      padding: 4px 16px
      margin-bottom: 20px
    .header-sub
      font-family: 'Raleway', sans-serif
      font-size: 1.05rem
      line-height: 1.8
      opacity: 0.75

  .cards-grid
    max-width: 1100px
    margin: 0 auto
    padding: 0 24px

  .skill-card
    background: rgba(255,255,255,0.04) !important
    border: 1px solid rgba(255,255,255,0.08) !important
    border-radius: 12px !important
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s
    height: 100%
    scroll-margin-top: 80px

    &:hover
      border-color: rgba(118, 39, 208, 0.7) !important
      transform: translateY(-3px)
      box-shadow: 0 6px 24px rgba(118, 39, 208, 0.25) !important

  .card-rate
    font-family: 'Nixie One', sans-serif
    font-size: 0.8rem
    letter-spacing: 0.08em
    color: #a855f7
    margin-bottom: 4px

  .card-title
    font-family: 'Nixie One', sans-serif
    font-size: 1.2rem
    white-space: normal

  .card-sub
    font-family: 'Raleway', sans-serif
    opacity: 0.6
    white-space: normal

  .card-body
    font-family: 'Raleway', sans-serif
    font-size: 0.9rem
    line-height: 1.7
    opacity: 0.85
    .v-list-item
      font-size: 0.85rem
      opacity: 0.9

  .card-actions
    display: flex
    flex-wrap: wrap
    gap: 8px
    padding: 8px 16px 16px

  .cross-cta
    text-align: center
    padding: 24px
    .cta-label
      font-family: 'Nixie One', sans-serif
      font-size: 0.85rem
      letter-spacing: 0.2em
      text-transform: uppercase
      color: #7627D0
      margin-bottom: 12px
    .cta-body
      font-family: 'Raleway', sans-serif
      font-size: 1rem
      opacity: 0.75
      max-width: 560px
      margin: 0 auto 20px
</style>
