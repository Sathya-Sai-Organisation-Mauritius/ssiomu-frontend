<<template>
  <div>
    <SiteHeader />
    <div class="front-landing">
      <template v-if="$fetchState.pending">
        <div>Loading</div>
      </template>
      <p v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </p>
      <div
        v-else
        class="container mx-auto py-20 flex flex-col justify-center text-blue-500"
      >
        <h1 class="text-5xl font-black leading-none w-64  ">
          {{ site_info.name }}
        </h1>
        <p class="text-xl w-1/2 pt-5">
          {{ site_info.tagline }}
        </p>
      </div>
    </div>

    <UpcomingEvents />

    <UpcomingPublications />

    <PastEvents />

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import UpcomingPublications from '~/components/UpcomingPublications.vue'
import PastEvents from '~/components/PastEvents.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    UpcomingEvents,
    UpcomingPublications,
    PastEvents
  },
  data() {
    return {
      site_info: null
    }
  },
  mounted() {
    // console.log(
    //   this.$sdk.getItems('site_info').then(data => {
    //     console.log(data)
    //   })
    // )
  },
  async fetch() {
    let API_ENDPOINT =
      'http://localhost:4444/_/items/site_info?status=published'
    let result = await this.$http.$get(API_ENDPOINT)
    this.site_info = result.data[0]

    // let API_ENDPOINT = 'http://localhost:4444/_/items/site_info'
    // let result = await fetch(API_ENDPOINT, {
    //   method: 'GET'
    // })
    // let json = await result.json()
    // console.log(json)
    // this.site_info = {
    //   name: 's',
    //   tagline: 'ss'
    // }
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
