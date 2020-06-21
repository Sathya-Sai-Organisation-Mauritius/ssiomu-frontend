<template>
  <div>
    <UpcomingEvents
      :color="'gradient-bg'"
      :textcolor="'text-blue-600'"
      :information="upcomingEvents"
    />

    <PastEvents
      :subtitle="
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.'
      "
      :textalign="'text-center'"
      :textcolor="'text-blue-600'"
      :information="pastEvents"
    />
  </div>
</template>

<script>
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
    PastEvents
  },
  async asyncData({ $http }) {
    let upcomingEventsQuery = 'event?filter[from][gt]=now'
    let pastEventsQuery = 'event?filter[from][lt]=now&fields=*.*'

    let upcomingEvents = await $http.get(upcomingEventsQuery)
    let upcomingEventsData = await upcomingEvents.json()

    let pastEvents = await $http.get(pastEventsQuery)
    let pastEventsData = await pastEvents.json()

    return {
      upcomingEvents: upcomingEventsData.data,
      pastEvents: pastEventsData.data
    }
  }
}
</script>

<style></style>
