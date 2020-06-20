<template>
  <div>
    <div class="container mx-auto ">
      <div class=" wing-details space-y-12 py-20 text-center">
        <div class="wing-title font-bold space-x-2 items-center">
          <h1 class="font-serif text-6xl text-center">{{ wings.name }}</h1>
        </div>

        <div
          class="wing-description space-y-3"
          v-html="wings.description"
        ></div>
      </div>
    </div>

    <UpcomingEvents
      fetchURL="/_/items/event?filter[from][gt]=now&filter[wing][eq]=${wingId}"
    />

    <PastEvents
      :subtitle="'My Wing Subtitle'"
      :color="'bg-gray-200'"
      :textalign="'text-center'"
      :textcolor="'text-blue-500'"
    />

    <FeaturedPublications :textalign="'text-center'" />
  </div>
</template>

<script>
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import PastEvents from '~/components/PastEvents.vue'

export default {
  components: {
    UpcomingEvents,
    FeaturedPublications,
    PastEvents
  },

  props: ['fetchurl'],

  data() {
    return {
      wingId: this.$route.params.id,
      wings: [],
      apiEndpoint: 'http://localhost:4444',
      fetchURL: '/_/items/wing/',
      field: '?fields=*.*'
    }
  },

  async fetch() {
    let url = `${this.apiEndpoint}${this.fetchURL}${this.wingId}${this.field}`
    console.log(url)
    const result = await this.$http.$get(url)
    console.log(result)
    this.wings = result.data
  }
}
</script>

<style></style>
