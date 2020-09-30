<template>
  <div>
    <ErrorHandler :model="events">
      <div>
        <div class="container mx-auto ">
          <div class="event-details md:mx-0 mx-4 space-y-12 py-10">
            <div
              class="event-details grid gap-1 grid-rows-2 md:grid-cols-2 space-y-12 py-6 md:py-10 border-b border-gray-20"
            >
              <div
                class="event-title font-bold flex col-span-1 space-x-2 items-center md:items-start justify-center md:justify-start"
              >
                <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl">
                  {{ events.name }}
                </h1>
              </div>
              <div
                class="relative col-span-1 flex justify-center items-top md:items-center"
                style="margin-top: 0;"
              >
                <div
                  class="absolute md:right-0 text-md md:text-2xl text-gray-700 bg-black-100 border-2 border-black-900 rounded-full p-1 md:p-2 lg:p-3 px-4 md:px-8 lg:px-10 font-black"
                  v-if="events.region"
                >
                  <nuxt-link
                    :to="{
                      name: 'region-slug',
                      params: { slug: events.region.slug }
                    }"
                    class="hover:underline font-bold text-md"
                    >Region {{ events.region.number }}</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto">
          <div class="event-details space-y-12 md:pb-10">
            <div class="md:grid grid-cols-2">
              <div
                class="event-description md:text-left md:mx-0 mx-4 md:py-0 pb-6"
              >
                <h2
                  class="text-3xl leading-9 tracking-tight font-extrabold text-gray-800 sm:text-4xl sm:leading-10 mb-4"
                >
                  Description
                </h2>
                <div
                  class="description-body space-y-2 prose"
                  v-html="events.description"
                ></div>
              </div>

              <div class="flex md:justify-end justify-start items-center">
                <div
                  class="my-12 w-full md:ml-24 md:mr-0 mx-4 md:my-0  event-schedule"
                >
                  <h2
                    class="text-left md:text-center mb-4 text-3xl leading-5 md:leading-9 tracking-tight font-extrabold text-gray-800 sm:text-3xl sm:leading-10"
                  >
                    Schedule
                  </h2>
                  <div class="serif">
                    <div class="lg:flex contact mt-4">
                      <h3
                        class="flex items-center w-50 md:w-64 lg:font-semibold justify-center text-center rounded-t-md lg:rounded-t-none lg:rounded-l-md border border-transparent bg-orange-500 md:bg-blue-600 text-base leading-5 md:leading-6 font-medium text-center text-white"
                      >
                        From
                      </h3>

                      <div
                        class="lg:flex font-semibold text-gray-600 rounded-b-none md:rounded-b-md lg:rounded-b-none lg:rounded-r-md justify-center text-center border-2 border-gray-400 w-full"
                      >
                        <div
                          class="text-center text-xl md:mx-0 mx-8 text-gray-600 font-bold py-0 md:py-2"
                        >
                          {{ formatDate(events.to) }}
                        </div>
                      </div>
                    </div>

                    <div class="lg:flex contact mt-3 md:mt-1">
                      <h3
                        class="flex items-center w-50 md:w-64 lg:font-semibold justify-center text-center rounded-t-md lg:rounded-t-none lg:rounded-l-md border border-transparent text-center bg-orange-500 md:bg-blue-600 text-base leading-5 md:leading-6 font-medium text-center text-white"
                      >
                        To
                      </h3>

                      <div
                        class="lg:flex font-semibold text-gray-600 rounded-b-none md:rounded-b-md lg:rounded-b-none lg:rounded-r-md justify-center text-center border-2 border-gray-400 text-center w-full"
                      >
                        <div
                          class="text-center text-xl md:mx-0 mx-8 text-gray-600 font-bold py-0 md:py-2"
                        >
                          {{ formatDate(events.to) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ErrorHandler :model="gallery">
          <div class="gradient-bg" v-if="gallery.length > 0">
            <div class="container mx-auto pt-8">
              <h2
                class="font-serif text-center md:text-left text-white text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10"
              >
                Gallery
              </h2>
            </div>

            <Gallery
              v-for="(oneGallery, index) in gallery"
              :key="index"
              :information="oneGallery.images"
            />
          </div>
        </ErrorHandler>
      </div>
    </ErrorHandler>
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'

export default {
  components: {
    Gallery,
    ErrorHandler
  },
  methods: {
    formatDate(param) {
      let temporaryDate = new Date(param)
      let month = temporaryDate.toLocaleString('default', { month: 'long' })
      let day = temporaryDate.toLocaleString('default', { day: 'numeric' })
      let year = temporaryDate.toLocaleString('default', { year: 'numeric' })

      let fullDate = `${month} ${day}, ${year}`
      return fullDate
    }
  },
  async asyncData({ params, $axios }) {
    let url = `event?filter[slug][eq]=${params.slug}&single&filter[status]=published&fields=*.*,region.number,region.slug`
    const result = await $axios
      .$get(url)
      .then(res => res)
      .catch(err => err)

    const gallery = await $axios
      .$get(
        `gallery?filter[event.slug][eq]=${params.slug}&filter[status]=published&fields=*,images.directus_files_id.data.full_url`
      )
      .then(res => res)
      .catch(err => err)

    return {
      events: result.data[0],
      gallery: gallery.data
    }
  }
}
</script>

<style></style>
