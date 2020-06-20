<<template>
  <div>
    <SiteHeader />
    <h3 class="p-3 text-center">Vue HTTP GET Requests with Fetch</h3>
    <GetRequest />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'

import GetRequest from '~/components/GetRequest.vue'
export default {
  components: {
    SiteHeader,

    GetRequest
  }
}
</script>

<style></style>
