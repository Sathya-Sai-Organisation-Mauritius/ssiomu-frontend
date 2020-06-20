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
            <p v-if="$fetchState.pending">Fetching posts...</p>
            <p v-else-if="$fetchState.error">
              Error while fetching posts: {{ $fetchState.error.message }}
            </p>
            <div class="grid md:grid-cols-2 gap-4 " v-else>
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

  props: ['query'],

  data() {
    return {
      regions: []
    }
  },
  async fetch() {
    const result = await this.$http.$get(this.query)
    this.regions = result.data
  }
}
</script>

<style lang="scss" scoped></style>
