<<template>
  <div>
    <HomeHero />

    <Announcements v-if="announcements" :information="announcements" />
    <BreakingNews v-if="breakingNews" :information="breakingNews" />

    <UpcomingEvents
      v-if="upcomingEvents"
      :information="upcomingEvents"
      :color="'gradient-bg'"
      :textcolor="'text-blue-600'"
    />

    <FeaturedPublications
      v-if="featuredPublications"
      :information="featuredPublications"
      :textalign="'text-center'"
    />

    <PastEvents
      v-if="pastEvents"
      :information="pastEvents"
      :subtitle="
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.'
      "
      :textalign="'text-center'"
      :textcolor="'text-blue-600'"
    />
  </div>
</template>

<script>
import Announcements from '~/components/Announcements.vue'
import HomeHero from '~/components/HomeHero.vue'
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import PastEvents from '~/components/PastEvents.vue'
import BreakingNews from '~/components/BreakingNews.vue'

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
    PastEvents
  },

  async asyncData({ $http }) {
    const announcementsQuery = 'annoucement?fields=*.*,region.*'
    const breakingNewsQuery = 'breaking_news'
    const upcomingEventsQuery =
      'event?filter[from][gt]=now&fields=*.*,region.name,region.number'
    const featuredPublicationsQuery =
      'publication?filter[featured][nempty]&limit=3&fields=*.*,photo.*,wing.*'
    const pastEventsQuery = 'event?filter[from][lt]=now&fields=*.*'

    const announcements = await $http.get(announcementsQuery)
    const announcementsData = await announcements.json()

    const breakingNews = await $http.get(breakingNewsQuery)
    const breakingNewsData = await breakingNews.json()

    const upcomingEvents = await $http.get(upcomingEventsQuery)
    const upcomingEventsData = await upcomingEvents.json()

    const featuredPublications = await $http.get(featuredPublicationsQuery)
    const featuredPublicationsData = await featuredPublications.json()

    const pastEvent = await $http.get(pastEventsQuery)
    const pastEventsData = await pastEvent.json()

    return {
      announcements: announcementsData.data,
      breakingNews: breakingNewsData.data,
      upcomingEvents: upcomingEventsData.data,
      featuredPublications: featuredPublicationsData.data,
      pastEvents: pastEventsData.data
    }
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
