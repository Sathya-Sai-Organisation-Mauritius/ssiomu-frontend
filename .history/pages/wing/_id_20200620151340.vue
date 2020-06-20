<template>
  <div>
    <div class="container mx-auto ">
      <div class=" wing-details space-y-12 py-20 text-center">
        <div class="wing-title font-bold space-x-2 items-center">
          <h1 class="font-serif text-6xl text-center">{{ wings.name }}</h1>
        </div>

        <div class="wing-description space-y-3">
          {{ wings.description }}
          <!-- <p>
            The Devotion Wing is an integral part of the Sri Sathya Sai Service
            Organisation. The primary objective of this wing is to facilitate
            individual spiritual progress, based on the teachings of Sri Sathya
            Sai Baba, by conducting multiple spiritual activities in accordance
            with the Organisation’s guidelines.
          </p>
          <p>
            The Devotional Wing focuses on group devotional singing, study
            circle, prayers, meditation, retreats and other activities designed
            to strengthen one’s faith, devotional fervor and understanding and
            practice of spiritual principles.
          </p>
          <p><strong class="font-bold">Devotional Singing</strong></p>
          <p>
            Devotional singing (bhajan ) is the process of singing that
            originates in the hear, not from the lips or the tongue. It is the
            expression of the joyous thrill that wells up from the heart when
            the Glory of God is remembered. It is the spontaneous manifestation
            of inner ecstasy. No attention is paid to the blame or praise that
            others may give. It does not seek the admiration or the appreciation
            of the listeners.
          </p>
          <p>
            It is said that when several people gather together to sing the
            Glory of God, then the atmosphere becomes purified. Mankind, to day,
            is forced to breathe an atmosphere polluted by sounds that spring
            from violence, hatred, greed and wickedness. The singing of Bhajans
            radiating devotion and love, with the melody emerging from the
            heart, creates a sacred sound that can help purify both the
            individual and the world.
          </p>
          <p>
            <strong class="font-bold"
              >Wherever My glory is sung, I install Myself there – Sri Sathya
              Sai Baba</strong
            > 
          </p>-->
        </div>
      </div>
    </div>

    <UpcomingEvents fetchURL="/_/items/event?filter[from][gt]=now" />

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
