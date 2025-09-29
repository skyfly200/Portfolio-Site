<template lang="pug">
.home-it.skill
  v-fab(to="/services" flat location="top start" app).home-btn Services

  .home-it-info
    .headline.ma-5
      h1 Home IT Solutions
    
    v-container
      v-row
        // IMAGE / CALL TO ACTION COLUMN (Left/Top)
        v-col(cols="12" md="5")
          v-card(elevation="4").mb-4
            // Placeholder Image - Replace the src with your actual image path
            v-img(contain src="https://picsum.photos/id/225/600/300" alt="Home IT Image")
            
            v-card-title.text-h6.primary--text Ready for Smarter Tech?
            v-card-text
              | Schedule your IT support session today.
              | Whether remote or in-home, we'll get your tech running smoothly.
            
            v-card-actions.d-flex.flex-column
              v-btn(color="primary" large block href="https://calendar.app.google/fyvvJvfuYHeTenAD8" target="_blank").mb-2 Book Now
              v-btn(color="secondary" block href="mailto:home-it@skylerfly.com" target="_blank") Contact Me

        // SERVICES & PRICING COLUMN (Right/Bottom)
        v-col(cols="12" md="7")
          // Main Overview Card
          v-card(elevation="4").mb-6
            v-card-title.text-h5 Comprehensive Home Tech Support
            v-divider 
            v-card-text
              | I offer in-home and remote IT support services for individuals and families, helping with computer setup, troubleshooting, software installation, virus removal, and general tech support. My goal is to make technology accessible, secure, and easy to use for everyone.

          // Detailed Services List
          v-card(elevation="2").mb-6
            v-card-title.text-h6 Services I Offer
            v-divider
            v-list(dense)
              v-list-item
                svg.fa.fa-wifi
                | &nbsp; Wi-Fi & Networks: Setup, optimization, and security for your home network.
              v-list-item
                svg.fa.fa-lightbulb
                | &nbsp; IoT & Smart Devices: Integration and configuration of smart speakers, lighting, thermostats, and more.
              v-list-item
                svg.fa.fa-lock
                | &nbsp; Home Security Systems: Installation and setup of sensors, video doorbells, and surveillance.
              v-list-item
                svg.fa.fa-desktop
                | &nbsp; Computer & Mobile Support: Troubleshooting, performance tune-ups, and general support for all your devices.

          // Pricing and Packages using Expansion Panels
          v-expansion-panels(flat)
            v-expansion-panel
              v-expansion-panel-title Hourly Rates
              v-expansion-panel-text
                v-list(dense)
                  v-list-item
                    svg.fa.fa-headset
                    | &nbsp; Remote Support: $75/hour
                  v-list-item
                    svg.fa.fa-map-marker-alt
                    | &nbsp; On-Site Support: $100/hour
                p.caption.mt-2 *Minimum 1-hour charge for all services.
            v-expansion-panel
              v-expansion-panel-title Smart Home Setup Special (Flat Fee)
              v-expansion-panel-text
                p Our 'Move-In Special' gets your Wi-Fi and all IoT devices professionally hooked up for one flat, predictable price.
                v-list(dense)
                  v-list-item Wifi Router & Up to 10 IOT devices: $300
                  v-list-item Wifi Router & Up to 20 IOT devices: $500
                  v-list-item Multiple Wifi Routers & Up to 30 IOT devices: $800
                p.caption.mt-2 For setups with more devices, please contact us for a custom quote.

</template>

<script>
export default {
  name: "home-it",
};
</script>

<style lang="sass">
.home-it
  flex-direction: row
  justify-content: left
  width: 100%
  color: white
  .headline
    width: 100%
    text-align: center
  .home-it-info
    text-align: center
    margin: auto
    padding: 10px

  @media (max-width: 940px)
    flex-direction: column

  .home-btn
    a
      color: white

</style>
