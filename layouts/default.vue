<template lang="pug">
    v-app(theme="dark")#app
        v-main(fluid)
            slot
</template>

<script setup lang="ts">
    import { onMounted } from 'vue'
    import { useTravelStore } from '~/stores/travelStore'

    onMounted(() => {
        const travelStore = useTravelStore()
        travelStore.loadEvents()
    })
</script>

<style src="~/assets/sass/base.sass" lang="sass"></style>
