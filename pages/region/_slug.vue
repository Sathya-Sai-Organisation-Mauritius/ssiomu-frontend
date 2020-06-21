<template>
  <div>
    <div>
      <div>
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
                <nuxt-link
                  :to="'/region/' + regions.slug"
                  class="hover:underline"
                >
                  Region {{ regions.number }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <UpcomingEvents
          :color="'gradient-bg'"
          :textcolor="'text-blue-600'"
          :information="upcomingEvents"
        />

        <PastEvents :information="pastEvents" />

        <FeaturedPublications :information="featuredPublications" />

        <OfficeBearer :information="regions.member" />
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingEvents from '../../components/UpcomingEvents.vue'
import FeaturedPublications from '../../components/FeaturedPublications.vue'
import PastEvents from '../../components/PastEvents.vue'
import OfficeBearer from '../../components/OfficeBearer.vue'

export default {
  components: {
    UpcomingEvents,
    FeaturedPublications,
    PastEvents,
    OfficeBearer
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
  async asyncData({ params, $http }) {
    let regionsQuery = `region?filter[slug][eq]=${params.slug}&fields=*.*,member.member_id.name,,member.member_id.email,member.member_id.role,member.member_id.phone`
    let upcomingEventsQuery = `event?filter[from][gt]=now&filter[region.slug][eq]=${params.slug}`
    let pastEventsQuery = `event?filter[from][lt]=now&filter[region.slug][eq]=${params.slug}&fields=*.*`
    let featuredPublicationsQuery = `publication?filter[region.slug][eq]=${params.slug}&fields=*.*`

    let region = await $http.get(regionsQuery)
    let regionDatas = await region.json()

    let upcomingEvents = await $http.get(upcomingEventsQuery)
    let upcomingEventsData = await upcomingEvents.json()

    let pastEvents = await $http.get(pastEventsQuery)
    let pastEventsData = await pastEvents.json()

    let featuredPublications = await $http.get(featuredPublicationsQuery)
    let featuredPublicationsData = await featuredPublications.json()

    return {
      upcomingEvents: upcomingEventsData.data,
      pastEvents: pastEventsData.data,
      featuredPublications: featuredPublicationsData.data,
      regions: regionDatas.data[0]
    }
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
