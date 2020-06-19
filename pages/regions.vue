<<template>
  <div>
    <SiteHeader />

    <RegionsComponent fetchURL="/_/items/region?fields=*.*" />

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import RegionsComponent from '~/components/RegionsComponent.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    RegionsComponent
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
