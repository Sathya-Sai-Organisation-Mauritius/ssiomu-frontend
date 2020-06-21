<template>
  <div>
    <div>
      <div v-if="wings">
        <div class="container mx-auto ">
          <div class=" wing-details space-y-12 py-20 text-center">
            <div class="wing-title font-bold space-x-2 items-center">
              <h1 class="font-serif text-6xl text-center">{{ wings.name }}</h1>
            </div>

            <div
              class="wing-description space-y-3"
              v-html="wings.description"
            ></div>
          </div>
        </div>

        <UpcomingEvents :information="upcomingEvents" />

        <PastEvents
          :subtitle="'My Wing Subtitle'"
          :color="'bg-gray-200'"
          :textalign="'text-center'"
          :textcolor="'text-blue-500'"
          :information="pastEvents"
        />

        <FeaturedPublications
          :textalign="'text-center'"
          :information="featuredPublications"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import PastEvents from '~/components/PastEvents.vue'

export default {
  components: {
    UpcomingEvents,
    FeaturedPublications,
    PastEvents
  },
  async asyncData({ params, $http }) {
    let url = `wing?filter[slug][eq]=${params.slug}&fields=*.*`
    let upcomingEventsQuery = `event?filter[from][gt]=now&filter[wing.slug][eq]=${params.slug}`
    let pastEventsQuery = `event?filter[from][lt]=now&filter[wing.slug][eq]=${params.slug}&fields=*.*`
    let featuredPublicationsQuery = `publication?filter[wing.slug][eq]=${params.slug}&fields=*.*`

    let upcomingEvents = await $http.get(upcomingEventsQuery)
    let upcomingEventsData = await upcomingEvents.json()

    let pastEvents = await $http.get(pastEventsQuery)
    let pastEventsData = await pastEvents.json()

    let featuredPublications = await $http.get(featuredPublicationsQuery)
    let featuredPublicationsData = await featuredPublications.json()

    const result = await $http.$get(url)

    return {
      upcomingEvents: upcomingEventsData.data,
      pastEvents: pastEventsData.data,
      featuredPublications: featuredPublicationsData.data,
      wings: result.data[0]
    }
  }
}
</script>

<style></style>
