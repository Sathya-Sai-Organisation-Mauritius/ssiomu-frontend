<template>
  <div class="bg-white pastevents-section">
    <div class="container mx-auto relative pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div v-if="pastevents.length > 0">
        <div class="pb-12" :class="textalign">
          <h2
            class="font-serif text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Past events
          </h2>
          <p
            v-if="subtitle"
            class="mt-3 text-xl leading-7 text-gray-700 sm:mt-4"
          >
            {{ subtitle }}
          </p>
        </div>

        <div>
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
              <PastEventBox
                v-for="(pasteventdescription, index) in pastevents"
                :pasteventvalues="pasteventdescription"
                :key="index"
              />
            </ul>
          </div>
          <div class="flex justify-center items-center pt-8">
            <a href="/events"
              ><div
                class="px-8 md:py-4 py-2 inline-block gradient-bg text-white rounded-md shadow-lg font-bold tracking-wide hover:text-orange-400 "
              >
                View more
              </div></a
            >
          </div>
        </div>
      </div>
      <div v-else>
        <h2
          class="font-serif text-3xl text-center font-bold text-black"
          :class="textalign"
        >
          No past events to show
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import PastEventBox from '../components/PastEventBox'
export default {
  components: {
    PastEventBox
  },
  props: ['subtitle', 'color', 'textalign', 'textcolor', 'information'],
  data() {
    return {
      pastevents: this.information
    }
  }
}
</script>

<style lang="scss" scoped>
.pastevents-section {
  background-image: url('/images/past-events.jpg');
  background-size: auto 50vh;
  background-position: right bottom;
  background-repeat: no-repeat;
  min-height: 50vh;
}
</style>
