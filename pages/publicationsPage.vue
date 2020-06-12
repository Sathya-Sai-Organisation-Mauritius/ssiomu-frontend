<<template>
  <div>
    <SiteHeader />
    <AllPublications :textalign="'text-center'" />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import AllPublications from '~/components/AllPublications.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    AllPublications,
    FeaturedPublications
  }
}
</script>

<style></style>
