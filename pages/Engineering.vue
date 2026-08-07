<template lang="pug">
.hire-page.engineering.skill

  .page-nav
    v-btn(href="/" variant="text" color="primary" size="small")
      i.fas.fa-arrow-left.mr-2
      | Home
    .nav-links
      v-btn(to="/engineering" variant="text" color="primary" size="small").active-link Engineering
      v-btn(to="/services" variant="text" color="primary" size="small") IT Services

  .hero
    .hero-glow
    .hero-inner
      .hero-icon(data-aos="zoom-in")
        i.fas.fa-microchip
      .hero-eyebrow(data-aos="fade-up") High-Precision Engineering
      h1.hero-title(data-aos="fade-up" data-aos-delay="80") Engineering that ships.
      p.hero-sub(data-aos="fade-up" data-aos-delay="200") I turn complex ideas into reliable, finished technical solutions. From multi-layer PCB layouts and custom 3D enclosures to full-stack code and network architecture, I bring hardware, software, and physical design together with careful attention to detail and clear communication. Every build works seamlessly and matches your vision.

  .cards-grid
    v-row
      v-col(cols="12" md="6")
        v-card#hardware.service-card(data-aos="fade-up" color="hardware")
          .accent-bar
          v-card-item
            .icon-tile
              i.fas.fa-bolt
            .card-rate $100 to $200 / hr
            v-card-title.card-title Hardware Design & PCB Prototyping
            v-card-subtitle.card-sub From napkin sketch to physical circuit board.
          v-card-text.card-body
            p End-to-end electronics design and prototyping for hardware products, embedded systems, and custom lighting.
            v-list(bg-color="transparent" density="compact")
              v-list-item(prepend-icon="fa:fas fa-diagram-project")
                strong Schematic & PCB Layout.
                |  Multi-layer boards built to your mechanical specs and form factor.
              v-list-item(prepend-icon="fa:fas fa-cube")
                strong Custom Enclosures & CAD Integration.
                |  3D CAD housings that are protective, functional, and clean.
              v-list-item(prepend-icon="fa:fas fa-microchip")
                strong Component Sourcing & BOM Optimization.
                |  Reliable microcontrollers, power architectures, and sensors.
              v-list-item(prepend-icon="fa:fas fa-code")
                strong Embedded Firmware Development.
                |  Bare-metal and RTOS firmware, sensor drivers, and comms protocols.
              v-list-item(prepend-icon="fa:fas fa-screwdriver-wrench")
                strong Firmware Integration & Assembly.
                |  From digital CAD files to working physical prototypes.
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" href="https://calendar.app.google/dVP9wvqD9Hv6RtfT7" target="_blank")
              i.fas.fa-calendar.mr-2
              | Book Consult
            v-btn(color="primary" variant="outlined" href="mailto:engineering@skylerfly.com?subject=Project%20Inquiry%3A%20Hardware%20Design%20%26%20PCB%20Prototyping&body=Interested%20in%3A%20Hardware%20Design%20%26%20PCB%20Prototyping%0A%0A")
              i.fas.fa-envelope.mr-2
              | Start a Project

      v-col(cols="12" md="6")
        v-card#cad.service-card(data-aos="fade-up" data-aos-delay="80")
          .accent-bar
          v-card-item
            .icon-tile
              i.fas.fa-cube
            .card-rate $100 to $200 / hr
            v-card-title.card-title 3D CAD & Mechanical Product Design
            v-card-subtitle.card-sub Precision modeling for manufacturing and rapid prototyping.
          v-card-text.card-body
            p Standalone CAD services for custom enclosures, functional mechanical parts, and physical product concepts.
            v-list(bg-color="transparent" density="compact")
              v-list-item(prepend-icon="fa:fas fa-box")
                strong Custom Enclosure Design.
                |  Housings engineered around your PCBs, optics, and electronics.
              v-list-item(prepend-icon="fa:fas fa-print")
                strong Design for 3D Printing.
                |  Models optimized for rapid prototyping and low-volume runs.
              v-list-item(prepend-icon="fa:fas fa-shapes")
                strong Concept Modeling & Assemblies.
                |  Rough concepts and specs turned into precise 3D models.
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" href="https://calendar.app.google/dVP9wvqD9Hv6RtfT7" target="_blank")
              i.fas.fa-calendar.mr-2
              | Book Consult
            v-btn(color="primary" variant="outlined" href="mailto:engineering@skylerfly.com?subject=Project%20Inquiry%3A%203D%20CAD%20%26%20Mechanical%20Design&body=Interested%20in%3A%203D%20CAD%20%26%20Mechanical%20Product%20Design%0A%0A")
              i.fas.fa-envelope.mr-2
              | Start a Project

      v-col(cols="12" md="6")
        v-card#software.service-card(data-aos="fade-up" data-aos-delay="120")
          .accent-bar
          v-card-item
            .icon-tile
              i.fas.fa-code
            .card-rate $100 to $200 / hr
            v-card-title.card-title Full-Stack Software Development
            v-card-subtitle.card-sub Custom web apps and complex software architecture.
          v-card-text.card-body
            p Scalable, robust software built for complex business needs and custom hardware APIs.
            v-list(bg-color="transparent" density="compact")
              v-list-item(prepend-icon="fa:fas fa-window-maximize") Web apps and dashboards in Vue, Nuxt, Node.js, and Python
              v-list-item(prepend-icon="fa:fas fa-plug") API development and system integrations
              v-list-item(prepend-icon="fa:fas fa-link") Smart contracts and Web3 infrastructure
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" href="https://calendar.app.google/dVP9wvqD9Hv6RtfT7" target="_blank")
              i.fas.fa-calendar.mr-2
              | Book Consult
            v-btn(color="primary" variant="outlined" href="mailto:engineering@skylerfly.com?subject=Project%20Inquiry%3A%20Full-Stack%20Software%20Development&body=Interested%20in%3A%20Full-Stack%20Software%20Development%0A%0A")
              i.fas.fa-envelope.mr-2
              | Start a Project

      v-col(cols="12" md="6")
        v-card#network.service-card(data-aos="fade-up" data-aos-delay="160")
          .accent-bar
          v-card-item
            .icon-tile
              i.fas.fa-network-wired
            .card-rate $100 to $200 / hr
            v-card-title.card-title Network Engineering & Systems Architecture
            v-card-subtitle.card-sub Secure, high-performance infrastructure.
          v-card-text.card-body
            p Advanced networking for businesses that need maximum uptime, security, and throughput.
            v-list(bg-color="transparent" density="compact")
              v-list-item(prepend-icon="fa:fas fa-network-wired") Custom network routing and infrastructure layouts
              v-list-item(prepend-icon="fa:fas fa-server") System automation, security systems, and server deployment
          v-card-actions.card-actions
            v-btn(color="primary" variant="elevated" href="https://calendar.app.google/dVP9wvqD9Hv6RtfT7" target="_blank")
              i.fas.fa-calendar.mr-2
              | Book Consult
            v-btn(color="primary" variant="outlined" href="mailto:engineering@skylerfly.com?subject=Project%20Inquiry%3A%20Network%20Engineering&body=Interested%20in%3A%20Network%20Engineering%20%26%20Systems%20Architecture%0A%0A")
              i.fas.fa-envelope.mr-2
              | Start a Project

    .cross-cta(data-aos="fade-up")
      .cta-label See it in action
      p.cta-body Real client engagements, technical breakdowns, and measurable outcomes, from network overhauls to blockchain security research.
      v-btn(color="primary" variant="elevated" to="/case-studies" size="large")
        i.fas.fa-arrow-right.mr-2
        span View Case Studies

    .cross-cta(data-aos="fade-up")
      .cta-label Looking for local help instead?
      p.cta-body Home and business IT support, device setup, and 1-on-1 tech and coding tutoring. $30 to $150 / hr.
      v-btn(color="secondary" variant="outlined" to="/services" size="large")
        span Visit IT Services
        i.fas.fa-arrow-right.ml-2
</template>

<script>
export default { name: "engineering" };
</script>

<style lang="sass">
@use "@/assets/sass/hire.sass" as *

.engineering
  --accent: #a855f7
  --accent-2: #7627D0
</style>
