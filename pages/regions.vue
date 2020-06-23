<template>
  <div>
    <div class="py-20 ">
      <div class="container mx-auto">
        <div>
          <h2
            class="font-serif text-4xl font-bold text-black pb-8 text-center md:text-left"
          >
            All regions
          </h2>

          <ErrorHandler :model="regions">
            <div>
              <div class="grid md:grid-cols-2 gap-4 " v-if="regions">
                <RegionsComponentBox
                  v-for="(description, index) in regions"
                  :key="index"
                  :myvalues="description"
                />
              </div>
            </div>
          </ErrorHandler>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'

import RegionsComponentBox from '~/components/RegionsComponentBox.vue'

export default {
  head() {
    return {
      title: 'Regions',
      meta: [
        { hid: 'description', name: 'description', content: 'All regions' }
      ]
    }
  },
  components: {
    RegionsComponentBox,
    ErrorHandler
  },
  async asyncData({ $axios }) {
    const regions = await $axios
      .$get('region?fields=*.*')
      .then(res => res)
      .catch(err => err)

    return {
      regions: regions.data
    }
  }
}
</script>

<style lang="scss" scoped></style>
