<template>
  <div>
    <ErrorHandler :model="upcomingEvents">
      <UpcomingEvents
        :color="'gradient-bg'"
        :textcolor="'text-blue-600'"
        :information="upcomingEvents"
      />
    </ErrorHandler>

    <ErrorHandler :model="pastEvents">
      <PastEvents
        :subtitle="
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.'
        "
        :textalign="'text-center'"
        :textcolor="'text-blue-600'"
        :information="pastEvents"
      />
    </ErrorHandler>
  </div>
</template>

<script>
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import PastEvents from '~/components/PastEvents.vue'

export default {
  head() {
    return {
      title: 'Events',
      meta: [{ hid: 'description', name: 'description', content: 'All events' }]
    }
  },
  components: {
    UpcomingEvents,
    PastEvents,
    ErrorHandler
  },
  async asyncData({ $axios }) {
    let upcomingEvents = await $axios
      .$get(
        'event?filter[from][gt]=now&filter[status]=published&fields=*.*,region.name,region.number'
      )
      .then(res => res)
      .catch(err => err)

    let pastEvents = await $axios
      .$get(
        'event?filter[from][lt]=now&filter[status]=published&fields=*.*,region.name,region.number'
      )
      .then(res => res)
      .catch(err => err)

    return {
      upcomingEvents: upcomingEvents.data,
      pastEvents: pastEvents.data
    }
  }
}
</script>

<style></style>
