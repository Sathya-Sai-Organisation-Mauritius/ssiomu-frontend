<template>
  <div class="announcement-details bg-orange-100 border-t-4 border-orange-500">
    <div v-if="homelrelatedlinks.length > 0">
      <div
        class="container mx-auto px-4 md:px-0 py-10 flex flex-col justify-center text-blue-700"
      >
        <div class="lg:flex mb-4 items-center mx-6 md:mx-0 md:space-x-10">
          <div class="w-0 lg:w-1/2 hidden -ml-2 lg:block lg:overflow-hidden">
            <!-- <img class="h-full w-full overflow-hidden" src="/images/announcement_1.svg" /> -->
          </div>
          <div class="w-2/2 lg:w-1/2 lg:mr-4">
            <div class="text-center pb-10">
              <h2
                class="font-serif text-3xl leading-9 tracking-tight font-extrabold text-primary-500 sm:text-4xl sm:leading-10"
              >
                Related Links
              </h2>
            </div>
            <div>
              <div
                class="bg-white shadow overflow-hidden sm:rounded-md border-t-8 border-orange-500"
              >
                <ul>
                  <HomeRelatedLinksBox
                    v-for="(item, index) in homelrelatedlinks"
                    :key="index"
                    :relatedlink="item"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 
      <div v-else>
        <h2
          class="font-serif text-2xl text-center font-bold text-white"
          :class="textalign"
        >
          No announcement events on this page
        </h2>
      </div>-->
    </div>
  </div>
</template>

<script>
import HomeRelatedLinksBox from '../components/HomeRelatedLinksBox'
export default {
  components: {
    HomeRelatedLinksBox
  },

  props: ['subtitle', 'color', 'information'],

  data() {
    return {
      homelrelatedlinks: this.information
    }
  }
}
</script>

<style></style>
