<<template>
  <div>
    <div class="py-20 gradient-bg">
      <div class="container mx-auto">
        <div>
          <h2
            class="font-serif text-4xl font-bold text-white pb-8"
            :class="textalign"
          >
            Upcoming Events
          </h2>

          <!-- <div
            v-if="errors"
            class="bg-red-900 p-3 text-xl text-red-500 text-center"
          >
            {{ errors }}
          </div> -->
          <div>
            <p v-if="$fetchState.pending">Fetching posts...</p>
            <p v-else-if="$fetchState.error">
              Error while fetching posts: {{ $fetchState.error.message }}
            </p>
            <div class="grid md:grid-cols-3 gap-8 text-blue-600" v-else>
              <UpcomingEventBox
                v-for="(description, index) in events"
                :key="index"
                :myvalues="description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingEventBox from '../components/UpcomingEventBox'

export default {
  components: {
    UpcomingEventBox
  },

  props: ['color', 'textalign', 'textcolor', 'fetchURL'],
  data: () => {
    return {
      events: [],
      apiEndpoint: 'http://localhost:4444'
    }
  },
  async fetch() {
    const result = await this.$http.$get(this.apiEndpoint + this.fetchURL)
    this.events = result.data
  },
  fetchDelay: 2000
}
</script>

<style></style>
