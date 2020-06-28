<template>
  <div>
    <div class="container mx-auto">
      <ErrorHandler :model="regions">
        <div
          v-if="regions"
          class="region-details grid gap-1 grid-cols-2 space-y-12 py-10"
        >
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
              <nuxt-link
                :to="'/region/' + regions.slug"
                class="hover:underline"
              >
                Region {{ regions.number }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </ErrorHandler>
    </div>

    <ErrorHandler :model="upcomingEvents">
      <UpcomingEvents
        :color="'gradient-bg'"
        :textcolor="'text-blue-600'"
        :information="upcomingEvents"
      />
    </ErrorHandler>

    <ErrorHandler :model="pastEvents">
      <PastEvents :information="pastEvents" v-if="pastEvents.length > 0" />
    </ErrorHandler>

    <ErrorHandler :model="featuredPublications">
      <FeaturedPublications
        :information="featuredPublications"
        v-if="featuredPublications.length > 0"
      />
    </ErrorHandler>

    <OfficeBearer
      v-if="regions && regions.member.length > 0"
      :information="regions.member"
    />
  </div>
</template>

<script>
import UpcomingEvents from '../../components/UpcomingEvents.vue'
import FeaturedPublications from '../../components/FeaturedPublications.vue'
import PastEvents from '../../components/PastEvents.vue'
import OfficeBearer from '../../components/OfficeBearer.vue'
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'

export default {
  components: {
    UpcomingEvents,
    FeaturedPublications,
    PastEvents,
    OfficeBearer,
    ErrorHandler
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
  async asyncData({ params, $axios }) {
    let regionsQuery = `region?filter[slug][eq]=${params.slug}&filter[status]=published&fields=*.*,member.member_id.name,,member.member_id.email,member.member_id.role,member.member_id.phone`
    let upcomingEventsQuery = `event?filter[from][gt]=now&filter[status]=published&filter[region.slug][eq]=${params.slug}`
    let pastEventsQuery = `event?filter[from][lt]=now&filter[status]=published&filter[region.slug][eq]=${params.slug}&fields=*.*`
    let featuredPublicationsQuery = `publication?filter[region.slug][eq]=${params.slug}&filter[status]=published&fields=*.*`

    let region = await $axios
      .$get(regionsQuery)
      .then(res => res)
      .catch(err => err)

    let upcomingEvents = await $axios
      .$get(upcomingEventsQuery)
      .then(res => res)
      .catch(err => err)

    let pastEvents = await $axios
      .$get(pastEventsQuery)
      .then(res => res)
      .catch(err => err)

    let featuredPublications = await $axios
      .$get(featuredPublicationsQuery)
      .then(res => res)
      .catch(err => err)

    return {
      upcomingEvents: upcomingEvents.data,
      pastEvents: pastEvents.data,
      featuredPublications: featuredPublications.data,
      regions: region.data[0]
    }
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
