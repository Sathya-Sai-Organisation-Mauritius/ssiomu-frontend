<template>
  <div>
    <div>
      <p v-if="$fetchState.pending">Fetching posts...</p>
      <p v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </p>

      <div v-else>
        <div class="container mx-auto">
          <div class="event-details space-y-12 py-10 m-8 md:m-0">
            <div
              class="event-details grid gap-1 md:grid-cols-3 space-y-12 py-10 border-b border-gray-20"
            >
              <div
                class="event-title font-bold flex md:col-span-2 space-x-2 items-center justify-center md:justify-start"
              >
                <h1 class="font-serif md:text-4xl lg:text-5xl">
                  {{ events.name }}
                </h1>
              </div>
              <div
                class="relative col-span-1 mx-12 flex items-center justify-end"
                style="margin-top: 0;"
              >
                <div
                  class="text-center lg:absolute lg:text-2xl top-0 right-0 text-gray-700 bg-black-100 border-2 border-gray-400 rounded-full p-2 md:p-3 px-4 md:px-10 font-black"
                  v-if="events.region"
                >
                  Region {{ events.region.number }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto">
          <div class="event-details space-y-12 pb-10 m-8 md:m-0">
            <div class="md:grid grid-cols-2">
              <div class="event-description md:text-left text-center">
                <h2
                  class="text-3xl leading-9 tracking-tight font-extrabold text-gray-800 sm:text-4xl sm:leading-10 mb-4"
                >
                  Description
                </h2>
                <div
                  class="description-body space-y-2"
                  v-html="events.description"
                ></div>
              </div>

              <div class="m-4 md:m-0 lg:ml-8 event-schedule">
                <h2
                  class=" text-center mb-4 text-3xl leading-9 tracking-tight font-extrabold text-gray-800 sm:text-3xl sm:leading-10"
                >
                  Schedule
                </h2>
                <div class="serif">
                  <div class="flex flex-col ">
                    <div
                      class=" mx-12 justify-center rounded-md border border-transparent py-2 bg-blue-600 text-base leading-6 font-medium text-center text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      From
                    </div>
                    <div
                      class="text-center text-xl text-gray-600 font-bold py-4"
                    >
                      {{ formatDate(events.from) }}
                    </div>
                    <div
                      class="mx-12 justify-center rounded-md border border-transparent py-2 bg-orange-600 text-base leading-6 font-medmium text-center text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      To
                    </div>
                    <div
                      class="text-center text-xl text-gray-600 font-bold py-4"
                    >
                      {{ formatDate(events.to) }}
                    </div>
                  </div>

                  <div class="mx-12 lg:flex contact mt-4 ">
                    <h3
                      class=" flex items-center justify-center text-center rounded-t-md lg:rounded-t-none lg:rounded-l-md border border-transparent py-4 px-8 bg-blue-600 text-base leading-6 font-medium text-center text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-xl sm:leading-5"
                    >
                      Organisers
                    </h3>

                    <div
                      class="lg:flex font-semibold text-gray-600 rounded-b-md lg:rounded-b-none lg:rounded-r-md justify-center text-center border-2 border-gray-400 px-4 py-4 w-full"
                    >
                      <div>Contact: Gavin - 57971326</div>
                      <span class="px-2"> - </span>
                      <div v-if="events.region">
                        Region {{ events.region.number }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="event-events-gallery gradient-bg py-8">
          <div class="container mx-auto space-y-4  p-4 md:p-0">
            <h2
              class="font-serif text-center md:text-left text-white text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10"
            >
              Gallery
            </h2>
            <p class="text-white max-w-2xl text-xl leading-7">
              Images of what happened during the event
            </p>
            <div class="text-white">
              <div class="grid grid-cols-4 gap-3">
                <Gallery
                  v-for="(gallery, index) in events.data"
                  :galleryvalues="gallery"
                  :key="index"
                />
                <div>
                  <img
                    src="http://saibabamauritius.org/sites/default/files/photos/2C70BB2F-A799-47C6-B6E9-9AD6B5748663.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://saibabamauritius.org/sites/default/files/photos/2C70BB2F-A799-47C6-B6E9-9AD6B5748663.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://saibabamauritius.org/sites/default/files/photos/2C70BB2F-A799-47C6-B6E9-9AD6B5748663.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://saibabamauritius.org/sites/default/files/photos/2C70BB2F-A799-47C6-B6E9-9AD6B5748663.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://saibabamauritius.org/sites/default/files/photos/2C70BB2F-A799-47C6-B6E9-9AD6B5748663.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://saibabamauritius.org/sites/default/files/photos/2C70BB2F-A799-47C6-B6E9-9AD6B5748663.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://saibabamauritius.org/sites/default/files/photos/2C70BB2F-A799-47C6-B6E9-9AD6B5748663.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    Gallery
  },

  data() {
    return {
      eventId: this.$route.params.slug,
      events: [],

      fetchURL: '/_/items/event',
      filter: '?filter[slug][eq]=',
      single: '&single',
      fields: '&fields=*.*,region.number'
    }
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

  async fetch() {
    let url = `${this.fetchURL}${this.filter}${this.eventId}${this.single}${this.fields}`

    const result = await this.$http.$get(url)
    console.log(result)
    this.events = result.data[0]
  }
}
</script>

<style></style>
