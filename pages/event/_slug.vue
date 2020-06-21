<template>
  <div>
    <div>
      <div>
        <div class="container mx-auto">
          <div class="event-details space-y-12 py-10 m-8 md:m-0">
            <div
              class="event-details grid gap-1 md:grid-cols-3 space-y-12 py-10 border-b border-gray-20"
            >
              <div
                class="event-title font-bold flex md:col-span-2 space-x-2 items-center justify-center md:justify-start"
              >
                <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl">
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
                  <div class="mx-12 lg:flex contact mt-4 ">
                    <h3
                      class=" flex items-center w-64 lg:font-semibold justify-center text-center rounded-t-md lg:rounded-t-none lg:rounded-l-md border border-transparent   bg-blue-600 text-base leading-6 font-medium text-center text-white "
                    >
                      From
                    </h3>

                    <div
                      class="lg:flex font-semibold text-gray-600 rounded-b-md lg:rounded-b-none lg:rounded-r-md justify-center text-center border-2 border-gray-400   w-full"
                    >
                      <div
                        class="text-center text-xl text-gray-600 font-bold py-2"
                      >
                        {{ formatDate(events.to) }}
                      </div>
                    </div>
                  </div>

                  <div class="mx-12 lg:flex contact mt-1 ">
                    <h3
                      class=" flex items-center w-64 lg:font-semibold justify-center text-center rounded-t-md lg:rounded-t-none lg:rounded-l-md border border-transparent  text-center bg-blue-600 text-base leading-6 font-medium text-center text-white "
                    >
                      To
                    </h3>

                    <div
                      class="lg:flex font-semibold text-gray-600 rounded-b-md lg:rounded-b-none lg:rounded-r-md justify-center text-center border-2 border-gray-400 text-center w-full"
                    >
                      <div
                        class="text-center text-xl text-gray-600 font-bold py-2"
                      >
                        {{ formatDate(events.to) }}
                      </div>
                    </div>
                  </div>

                  <div class="mx-12 lg:flex contact mt-1 ">
                    <h3
                      class=" flex w-64 lg:font-semibold items-center justify-center text-center rounded-t-md lg:rounded-t-none lg:rounded-l-md border border-transparent py-4 bg-orange-600 text-base leading-6 font-medium text-center text-white "
                    >
                      Organisers
                    </h3>

                    <div
                      class="lg:flex font-semibold text-gray-600 rounded-b-md lg:rounded-b-none lg:rounded-r-md justify-center text-center border-2 border-gray-400 py-4 w-full"
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
  async asyncData({ params, $http }) {
    let fetchURL = 'event'
    let filter = '?filter[slug][eq]='
    let single = '&single'
    let fields = '&fields=*.*,region.number'
    let url = `${fetchURL}${filter}${params.slug}${single}${fields}`
    const result = await $http.$get(url)

    return {
      events: result.data[0]
    }
  }
}
</script>

<style></style>
