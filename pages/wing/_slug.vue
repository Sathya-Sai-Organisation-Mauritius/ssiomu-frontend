<template>
  <div>
    <div>
      <ErrorHandler :model="wings">
        <div v-if="wings">
          <div class="container mx-auto ">
            <div class=" wing-details space-y-12 py-20 text-center">
              <div class="wing-title font-bold space-x-2 items-center">
                <h1 class="font-serif text-6xl text-center">
                  {{ wings.name }}
                </h1>
              </div>

              <div
                class="wing-description space-y-3"
                v-html="wings.description"
              ></div>
            </div>
          </div>

          <ErrorHandler :model="upcomingEvents">
            <UpcomingEvents :information="upcomingEvents" />
          </ErrorHandler>

          <ErrorHandler :model="pastEvents">
            <PastEvents
              :subtitle="'My Wing Subtitle'"
              :color="'bg-gray-200'"
              :textalign="'text-center'"
              :textcolor="'text-blue-500'"
              :information="pastEvents"
              v-if="pastEvents.length > 0"
            />
          </ErrorHandler>

          <ErrorHandler :model="featuredPublications">
            <FeaturedPublications
              :textalign="'text-center'"
              :information="featuredPublications"
              v-if="featuredPublications.length > 0"
            />
          </ErrorHandler>
        </div>
      </ErrorHandler>
    </div>
  </div>
</template>

<script>
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import PastEvents from '~/components/PastEvents.vue'
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'

export default {
  components: {
    UpcomingEvents,
    FeaturedPublications,
    PastEvents,
    ErrorHandler
  },
  async asyncData({ params, $axios }) {
    let url = `wing?filter[slug][eq]=${params.slug}&filter[status]=published&fields=*.*`
    let upcomingEventsQuery = `event?filter[from][gt]=now&filter[status]=published&filter[wing.slug][eq]=${params.slug}`
    let pastEventsQuery = `event?filter[from][lt]=now&filter[status]=published&filter[wing.slug][eq]=${params.slug}&fields=*.*`
    let featuredPublicationsQuery = `publication?filter[wing.slug][eq]=${params.slug}&filter[status]=published&fields=*.*`

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

    const result = await $axios
      .$get(url)
      .then(res => res)
      .catch(err => err)

    return {
      upcomingEvents: upcomingEvents.data,
      pastEvents: pastEvents.data,
      featuredPublications: featuredPublications.data,
      wings: result.data[0]
    }
  }
}
</script>

<style></style>
