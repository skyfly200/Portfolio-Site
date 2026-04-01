import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface EventData {
  event_id: string
  title: string
  description: string
  location_title: string
  latitude: number
  longitude: number
  time: string // ISO format
  full_story: string
  tags: string[]
  images: string[]
  videos: string[]
  custom_icon?: string
  trip_hierarchy: {
    chapter: string
    trip: string
    country_or_state: string
    city_or_town: string
    event: string
  }
  time_hierarchy: {
    decade: string
    year: number
    month: number
    day: number
    event: string
  }
}

export interface FilterOptions {
  tags?: string[]
  year?: number
  chapter?: string
  trip?: string
  search?: string
}

export const useTravelStore = defineStore('travel', () => {
  const allEvents = ref<EventData[]>([])
  const filteredEvents = ref<EventData[]>([])

  const loadEvents = async () => {
    const response = await fetch('/travel.json')
    const data: EventData[] = await response.json()
    allEvents.value = data
    filteredEvents.value = [...data]
  }

  const applyFilters = (filters: FilterOptions) => {
    filteredEvents.value = allEvents.value.filter(event => {
      const matchesTags =
        !filters.tags || filters.tags.every(tag => event.tags.includes(tag))

      const matchesYear = !filters.year || event.time_hierarchy.year === filters.year
      const matchesChapter = !filters.chapter || event.trip_hierarchy.chapter === filters.chapter
      const matchesTrip = !filters.trip || event.trip_hierarchy.trip === filters.trip
      const matchesSearch =
        !filters.search ||
        event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.search.toLowerCase())

      return matchesTags && matchesYear && matchesChapter && matchesTrip && matchesSearch
    })
  }

  return {
    allEvents,
    filteredEvents,
    loadEvents,
    applyFilters,
  }
})
