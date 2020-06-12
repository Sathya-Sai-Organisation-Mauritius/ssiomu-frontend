<template>
  <div>
    <SiteHeader />

    <div class="container mx-auto">
      <div class="region-details grid gap-1 grid-cols-2 space-y-12 py-10">
        <div
          class="region-title font-bold flex col-span-1 space-x-2 items-center"
        >
          <h1 class="font-serif text-5xl">Lower Plaine Wilhems</h1>
        </div>
        <div class="relative col-span-1" style="margin-top: 0;">
          <div
            class="absolute top-0 right-0 text-2xl text-gray-700 bg-black-100 border-2 border-black-900 rounded-full p-3 px-10 font-black"
          >
            Region 5
          </div>
        </div>
      </div>
    </div>

    <UpcomingEvents :color="'gradient-bg'" :textcolor="'text-blue-600'" />

    <PastEvents />

    <FeaturedPublications />

    <OfficeBearer />

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import PastEvents from '~/components/PastEvents.vue'

export default {
  data: () => {
    return {
      subtitle: 'A list of events in region X '
    }
  },
  components: {
    SiteHeader,
    SiteFooter,
    UpcomingEvents,
    FeaturedPublications,
    PastEvents
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
