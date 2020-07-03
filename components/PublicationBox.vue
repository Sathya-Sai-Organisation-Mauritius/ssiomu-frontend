<template>
  <div
    class="flex flex-col transition duration-500 transition-shadow shadow-md hover:shadow-lg overflow-hidden mb-4"
  >
    <div>
      <div class="flex-shrink-0">
        <nuxt-link
          :to="{name: 'publication-slug', params: { slug:  pubvalues.slug} }"
          class="hover:underline"
        >
          <img
            class="h-48 w-full object-cover"
            v-if="pubvalues.photo"
            :src="pubvalues.photo.data.full_url"
            alt
          />
          <img v-else src="https://picsum.photos/400/200" />
        </nuxt-link>
      </div>
      <div class="flex-1 bg-white p-4 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-xs uppercase leading-5 font-medium text-blue-600">
            <nuxt-link
              :to="{name: 'wing-slug', params: { slug: pubvalues.wing.slug} }"
              class="hover:underline"
              v-if="pubvalues.wing"
            >{{ pubvalues.wing.name }}</nuxt-link>
          </p>
          <nuxt-link
            :to="{name: 'publication-slug', params: { slug:  pubvalues.slug} }"
            class="hover:underline"
          >
            <h3
              class="pt-2 pb-3 text-xl leading-7 font-semibold text-gray-900"
            >{{ pubvalues.title }}</h3>
          </nuxt-link>
        </div>

        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div
              class="h-10 w-10 rounded-full text-center font-bold flex items-center justify-center bg-orange-500 text-white text-2xl"
              v-if="pubvalues.region"
            >{{ pubvalues.region.number }}</div>
          </div>

          <div class="ml-3">
            <p class="text-sm leading-5 font-medium text-gray-900">
              <nuxt-link
                :to="{name: 'region-slug', params: { slug:  pubvalues.region.slug} }"
                class="hover:underline"
                v-if="pubvalues.region"
              >{{ pubvalues.region.name }}</nuxt-link>
            </p>
            <div class="flex text-sm leading-5 text-gray-600">
              <time datetime="2020-03-16">{{ formatDate(pubvalues.date) }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pubvalues'],

  methods: {
    formatDate(param) {
      let temporaryDate = new Date(param)
      let month = temporaryDate.toLocaleString('default', { month: 'short' })
      let day = temporaryDate.toLocaleString('default', { day: 'numeric' })
      let year = temporaryDate.toLocaleString('default', { year: 'numeric' })

      let fullDate = `${month} ${day}, ${year}`
      return fullDate
    }
  }
}
</script>

<style lang="scss" scoped></style>
