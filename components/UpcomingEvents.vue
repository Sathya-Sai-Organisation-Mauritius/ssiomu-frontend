<<template>
  <div>
    <div class="py-20 gradient-bg">
      <div class="container mx-auto">
        <div v-if="events.length > 0">
          <h2
            class="font-serif text-4xl font-bold text-white pb-8"
            :class="textalign"
          >
            Upcoming Events
          </h2>

          <div>
            <div class="grid md:grid-cols-3 gap-8 text-blue-600">
              <UpcomingEventBox
                v-for="(description, index) in events"
                :key="index"
                :myvalues="description"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <h2
            class="font-serif text-2xl text-center font-bold text-white"
            :class="textalign"
          >
            No upcoming events on this page
          </h2>
          <div class="flex justify-center py-8 text-white">
            <div class="p-2 md:w-48 md:w-48 lg:w-64 lg:h-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-image"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <div class="p-2 md:w-48 md:w-48 lg:w-64 lg:h-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-layers"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <div class="p-2  md:w-48 md:w-48 lg:w-64 lg:h-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-tag"
              >
                <path
                  d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                ></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
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

  props: ['color', 'textalign', 'textcolor', 'information'],
  data() {
    return {
      events: this.information
    }
  }
}
</script>

<style></style>
