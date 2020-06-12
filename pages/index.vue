<<template>
  <div>
    <SiteHeader />

    <div class="front-landing">
      <div
        class="container mx-auto py-20 flex flex-col justify-center text-blue-500"
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

    <Announcements />

    <BreakingNews />

    <UpcomingEvents :color="'gradient-bg'" :textcolor="'text-blue-600'" />

    <FeaturedPublications :textalign="'text-center'" />

    <PastEvents
      :subtitle="
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.'
      "
      :textalign="'text-center'"
      :textcolor="'text-blue-600'"
    />

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import Announcements from '~/components/Announcements.vue'
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import PastEvents from '~/components/PastEvents.vue'
import BreakingNews from '~/components/BreakingNews.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    Announcements,
    UpcomingEvents,
    FeaturedPublications,
    PastEvents,
    BreakingNews
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
