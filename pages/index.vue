<<template>
  <div>
    <div class="front-landing">
      <div
        class="container mx-auto py-20 flex flex-col justify-center text-blue-700"
      >
        <h1 class="text-5xl font-black leading-none font-serif">
          Sathya Sai <br />
          International <br />
          Organisation
        </h1>
        <p class="text-xl w-1/2 pt-5">
          The main objective of the Sathya Sai Organisation is to help humanity
          recognize its inherent divinity. It is established to translate the
          principles of love and nonviolence into daily practice.
        </p>
      </div>
    </div>

    <Announcements :information="announcements" />

    <BreakingNews :information="breakingNews" />

    <UpcomingEvents
      :information="upcomingEvents"
      :color="'gradient-bg'"
      :textcolor="'text-blue-600'"
    />

    <FeaturedPublications
      :information="featuredPublications"
      :textalign="'text-center'"
    />

    <PastEvents
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
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import PastEvents from '~/components/PastEvents.vue'
import BreakingNews from '~/components/BreakingNews.vue'

export default {
  components: {
    BreakingNews,
    Announcements,
    UpcomingEvents,
    FeaturedPublications,
    PastEvents
  },

  async asyncData({ $http }) {
    const announcementsQuery = 'annoucement'
    const breakingNewsQuery = 'breaking_news'
    const upcomingEventsQuery = 'event?filter[from][gt]=now'
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
