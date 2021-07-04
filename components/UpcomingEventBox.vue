<template>
  <div class="description">
    <nuxt-link
      :title="myvalues.name"
      :to="{ name: 'event-slug', params: { slug: myvalues.slug } }"
    >
      <div class="w-full h-48 overflow-hidden">
        <img
          v-if="
            myvalues.thumb !== null &&
              myvalues.thumb.data &&
              myvalues.thumb.data.full_url
          "
          :src="myvalues.thumb.data.full_url"
          class="block object-cover object-center"
          alt=""
        />
        <div v-else class="h-full bg-gray-200 grid place-items-center">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="views-row bg-white p-6 md:p-8  m-0">
        <div class="grid md:grid-cols-4 gap-4">
          <div
            class="col-span-1 font-bold text-xl md:text-2xl lg:text-3xl text-left md:text-right leading-none"
          >
            <div class="date">{{ formatDate(myvalues.from) }}</div>
          </div>
          <div class="col-span-3 text-left md:text-center lg:text-left">
            <h3
              class="font-bold text-md md:text-sm lg:text-xl truncate overflow-clip "
            >
              {{ myvalues.name }}
            </h3>
            <div
              class="font-light text-md md:text-sm lg:text-sm"
              v-if="myvalues.region"
            >
              {{
                myvalues.region.number === 0
                  ? ''
                  : `Region ${myvalues.region.number} -`
              }}
              {{ myvalues.region.name }}
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
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
