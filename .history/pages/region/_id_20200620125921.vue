<template>
  <div>
    <div>
      <p v-if="$fetchState.pending">Fetching posts...</p>
      <p v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </p>
      <div v-else>
        <div class="container mx-auto">
          <div class="region-details grid gap-1 grid-cols-2 space-y-12 py-10">
            <div
              class="region-title font-bold flex col-span-1 space-x-2 items-center"
            >
              <h1 class="font-serif text-5xl">
                {{ regions.name }}
              </h1>
            </div>
            <div class="relative col-span-1" style="margin-top: 0;">
              <div
                class="absolute top-0 right-0 text-2xl text-gray-700 bg-black-100 border-2 border-black-900 rounded-full p-3 px-10 font-black"
              >
                Region {{ regions.number }}
              </div>
            </div>
          </div>
        </div>

        <UpcomingEvents
          :color="'gradient-bg'"
          :textcolor="'text-blue-600'"
          :fetchURL="
            `/_/items/event?filter[from][gt]=now&filter[region][eq]=${regionId}`
          "
        />

        <PastEvents
          :fetchURL="
            `/_/items/event?filter[from][gt]=now&filter[region][eq]=${regionId}`
          "
        />

        <FeaturedPublications />

        <OfficeBearer />
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingEvents from '../../components/UpcomingEvents.vue'
import FeaturedPublications from '../../components/FeaturedPublications.vue'
import PastEvents from '../../components/PastEvents.vue'

export default {
  data: () => {
    return {
      subtitle: 'A list of events in region X '
    }
  },
  components: {
    UpcomingEvents,
    FeaturedPublications,
    PastEvents
  },
  props: ['fetchurl'],

  data() {
    return {
      regionId: this.$route.params.id,
      regions: [],
      apiEndpoint: 'http://localhost:4444',
      fetchURL: '/_/items/region/',
      fetchURL2: '?fields=*.*'
    }
  },
  methods: {
    formatDate(param) {
      let temporaryDate = new Date(param)
      let month = temporaryDate.toLocaleString('default', { month: 'long' })
      let day = temporaryDate.toLocaleString('default', { day: 'numeric' })
      let year = temporaryDate.toLocaleString('default', { year: 'numeric' })

      let fullDate = `${month} ${day}, ${year}`
      return fullDate
    }
  },

  async fetch() {
    let url = `${this.apiEndpoint}${this.fetchURL}${this.regionId}${this.fetchURL2}`
    console.log(url)
    const result = await this.$http.$get(url)
    console.log(result)
    this.regions = result.data
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
