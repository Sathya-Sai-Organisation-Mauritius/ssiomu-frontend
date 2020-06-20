<template>
  <div>
    <UpcomingEvents
      :color="'gradient-bg'"
      :textcolor="'text-blue-600'"
      query="/_/items/event?filter[from][gt]=now"
    />

    <PastEvents
      :subtitle="
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.'
      "
      :textalign="'text-center'"
      :textcolor="'text-blue-600'"
      query="/_/items/event?filter[from][lt]=now&fields=*.*"
    />
  </div>
</template>

<script>
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import PastEvents from '~/components/PastEvents.vue'

export default {
  components: {
    UpcomingEvents,
    PastEvents
  }
}
</script>

<style></style>
