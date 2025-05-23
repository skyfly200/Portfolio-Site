<template lang="pug">
    client-only
            .map(ref="mapContainer")
</template>

<script setup>
import { useTravelStore } from '@/stores/travelStore'
import { onMounted, ref, nextTick } from "vue";

const travelStore = useTravelStore()

// Dynamically import Leaflet on client-side only
const L = !import.meta.env.SSR ? await import("leaflet") : null;

const mapContainer = ref(null);

onMounted(async () => {
    await nextTick(); // Ensure DOM is fully rendered

    if (!mapContainer.value) {
        console.error("Map container is not available.");
        return;
    }
    if (!L) {
        console.error("Leaflet library failed to load.");
        return;
    }

    console.log("Initializing map...");

    // --- Define Base Layers ---
    const baseLayers = {
        "Watercolor": L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
            maxZoom: 16,
            attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
            timeout: 5000, // Retry loading after 5 seconds
        }),

        "Terrain": L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            timeout: 5000, // Retry loading after 5 seconds
            attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
        }),

        "Toner": L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            timeout: 5000, // Retry loading after 5 seconds
            attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
        }),

        "Toner Lite": L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            timeout: 5000, // Retry loading after 5 seconds
            attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
        }),

        "Smooth": L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            timeout: 5000, // Retry loading after 5 seconds
            attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>', 
        }),

        "Smooth Dark": L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            timeout: 5000, // Retry loading after 5 seconds
            attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>', 
        }),

        "OpenStreetMap": L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
            timeout: 5000, // Retry loading after 5 seconds
            maxZoom: 19,
        }),

        "Satellite (Esri)": L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
            attribution: "&copy; Esri contributors",
            timeout: 5000, // Retry loading after 5 seconds
            maxZoom: 19,
        }),
    };

    // Initialize the map
    const map = L.map(mapContainer.value);
    console.log("Map initialized:", map);

    // --- Add Default Layer ---
    baseLayers["Watercolor"].addTo(map);

    // --- Add Layer Control ---
    L.control.layers(baseLayers).addTo(map);

    const markers = [
        {lat: 39.7392, lng: -104.9903, title: "Denver", description: "The capital of Colorado."},
        {lat: 40.015, lng: -105.2705, title: "Boulder", description: "A city at the foothills of the Rocky Mountains."},
        {lat: 39.5501, lng: -105.7821, title: "Colorado", description: "A state in the western United States."},
        {lat: 38.8339, lng: -104.8214, title: "Colorado Springs", description: "A city located at the foot of Pikes Peak."},
    ];

    markers.forEach((marker) => {
        // TODO - add custom marker icons
        // const customIcon = L.icon({ iconUrl: '/custom-marker.png', iconSize: [30, 30], });
        // const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map);
        const markerObj = L.marker([marker.lat, marker.lng]).addTo(map);
        // TODO - add custom popup content and open on click handler
        // marker.bindPopup(`<b>${loc.title}</b><br><img src="/custom-image.png" alt="Custom Image" />`).openPopup();
        markerObj.bindPopup(`<b>${marker.title}</b><br><p>${marker.description}</p>`);
    });

    map.setView([39.7392, -104.9903], 7);
});
</script>

<style scoped lang="sass">
.map
  width: 100vw
  height: 100vh
  background: #f0f0f0 // Fallback background to ensure visibility
  border: 1px solid #ccc // Add border to confirm container visibility
</style>
