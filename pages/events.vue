<template>
  <div>
    <SiteHeader />

    <UpcomingEvents :color="'gradient-bg'" :textcolor="'text-blue-600'" />

    <PastEvents
      :subtitle="
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.'
      "
      :textalign="'text-center'"
      :textcolor="'text-blue-600'"
    />

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import PastEvents from '~/components/PastEvents.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    UpcomingEvents,
    PastEvents
  }
}
</script>

<style></style>
