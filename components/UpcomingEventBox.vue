<template>
  <div class="description">
    <a :href="'/event/' + myvalues.id">
      <div class="views-row bg-white p-8 mx-4 md:m-2">
        <div class="grid  md:grid-cols-4 gap-4">
          <div
            class="col-span-1 font-bold text-xl md:text-2xl lg:text-3xl text-left  md:text-right leading-none"
          >
            <div class="date">{{ formatDate(myvalues.from) }}</div>
          </div>
          <div class="col-span-3 text-left md:text-center lg:text-left">
            <h3 class=" font-bold text-md md:text-sm lg:text-xl">
              {{ myvalues.name }}
            </h3>
            <div
              class="font-light text-md md:text-sm lg:text-xl"
              v-html="myvalues.description"
            ></div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['myvalues'],
  methods: {
    formatDate(param) {
      let temporaryDate = new Date(param)
      let month = temporaryDate.toLocaleString('default', { month: 'short' })
      let day = temporaryDate.toLocaleString('default', { day: 'numeric' })

      let fullDate = `${day} ${month}`
      return fullDate
    }
  }
}
</script>

<style lang="scss" scoped></style>
