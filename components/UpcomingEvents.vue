<template>
  <div>
    <div class="py-20 gradient-bg">
      <div class="container mx-auto">
        <div v-if="events.length > 0">
          <h2
            class="font-serif text-3xl font-bold text-center md:text-left  text-white pb-8"
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
