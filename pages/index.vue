<template>
  <div>
    <HomeHero />

    <ErrorHandler :model="announcements">
      <Announcements :information="announcements" />
    </ErrorHandler>

    <ErrorHandler :model="breakingNews">
      <BreakingNews v-if="breakingNews" :information="breakingNews" />
    </ErrorHandler>

    <ErrorHandler :model="upcomingEvents">
      <UpcomingEvents
        v-if="upcomingEvents"
        :information="upcomingEvents"
        :color="'gradient-bg'"
        :textcolor="'text-blue-600'"
      />
    </ErrorHandler>

    <ErrorHandler :model="featuredPublications">
      <FeaturedPublications
        v-if="featuredPublications"
        :information="featuredPublications"
        :textalign="'text-center'"
      />
    </ErrorHandler>

    <ErrorHandler :model="pastEvents">
      <PastEvents
        v-if="pastEvents"
        :information="pastEvents"
        :subtitle="
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.'
        "
        :textalign="'text-center'"
        :textcolor="'text-blue-600'"
      />
    </ErrorHandler>
  </div>
</template>

<script>
import Announcements from '~/components/Announcements.vue'
import HomeHero from '~/components/HomeHero.vue'
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import PastEvents from '~/components/PastEvents.vue'
import BreakingNews from '~/components/BreakingNews.vue'
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'

export default {
  head() {
    return {
      title: 'Homepage',
      meta: [{ hid: 'description', name: 'description', content: 'SSIOMU' }]
    }
  },
  components: {
    BreakingNews,
    HomeHero,
    Announcements,
    UpcomingEvents,
    FeaturedPublications,
    PastEvents,
    ErrorHandler
  },
  methods: {},
  async asyncData({ store, $axios }) {
    let announcements = await $axios
      .$get('annoucement?filter[status]=published&fields=*.*,region.*')
      .then(res => res)
      .catch(err => err)

    let breakingNews = await $axios
      .$get('breaking_news?filter[status]=published')
      .then(res => res)
      .catch(err => err)

    let upcomingEvents = await $axios
      .$get(
        'event?filter[from][gt]=now&filter[status]=published&fields=*.*,region.name,region.number'
      )
      .then(res => res)
      .catch(err => err)

    let featuredPublications = await $axios
      .$get(
        'publication?filter[featured][nempty]&filter[status]=published&limit=3&fields=*.*,photo.*,wing.*'
      )
      .then(res => res)
      .catch(err => err)

    let pastEvents = await $axios
      .$get(
        'event?filter[from][lt]=now&filter[status]=published&limit=5&fields=*.*'
      )
      .then(res => res)
      .catch(err => err)

    return {
      announcements: announcements.data,
      breakingNews: breakingNews.data,
      upcomingEvents: upcomingEvents.data,
      featuredPublications: featuredPublications.data,
      pastEvents: pastEvents.data
    }
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
