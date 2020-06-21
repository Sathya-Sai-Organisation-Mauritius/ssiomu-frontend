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

          <div>
            <div class="grid md:grid-cols-2 gap-4 ">
              <RegionsComponentBox
                v-for="(description, index) in regions"
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
import RegionsComponentBox from '~/components/RegionsComponentBox.vue'

export default {
  components: {
    RegionsComponentBox
  },
  async asyncData({ $http }) {
    let url = 'region?fields=*.*,region.slug'

    const res = await $http.get(url)
    const regions = await res.json()

    return {
      regions: regions.data
    }
  }
}
</script>

<style lang="scss" scoped></style>
