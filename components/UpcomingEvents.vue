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

          <div>
            <p
              v-if="$fetchState.pending"
              class="text-center text-white text-xl "
            >
              Upcoming events loading...
            </p>
            <p
              v-else-if="$fetchState.error"
              class="text-center text-red-300 bg-red-900 text-xl p-4 "
            >
              Error while loading upcoming events, please try again later.
              {{ $fetchState.error.message }}
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

  props: ['color', 'textalign', 'textcolor', 'query'],
  data() {
    return {
      events: []
    }
  },
  async fetch() {
    const result = await this.$http.$get(this.query)
    this.events = result.data
  }
}
</script>

<style></style>
