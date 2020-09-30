<template>
  <div>
    <div>
      <ErrorHandler :model="publications">
        <div v-if="publications">
          <div class="container mx-auto">
            <div class="publication-details space-y-12 md:py-10 pt-8 pb-10">
              <div class="publications-details py-2 border-b border-gray-20">
                <div
                  class="grid gap-1 grid-rows-2 md:grid-rows-none md:grid-cols-2"
                >
                  <div
                    class="publications-title font-bold flex space-x-2 items-center justify-center md:justify-start"
                  >
                    <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl">
                      {{ publications.title }}
                    </h1>
                  </div>
                  <div
                    class="relative flex justify-center items-top md:items-center"
                  >
                    <div
                      class="absolute md:right-0 text-md md:text-2xl text-gray-700 bg-black-100 border-2 border-black-900 rounded-full p-1 md:p-2 lg:p-3 px-4 md:px-8 lg:px-10 font-black"
                      v-if="publications.region"
                    >
                      <nuxt-link
                        :to="{
                          name: 'region-slug',
                          params: { slug: publications.region.slug }
                        }"
                        class="hover:underline"
                        >Region {{ publications.region.number }}</nuxt-link
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="italic flex justify-center md:justify-start pt-4 md:pt-8"
                >
                  Published on: {{ formatDate(publications.date) }}
                </div>
              </div>
            </div>
          </div>

          <div class="container mx-auto">
            <div class="publication-details space-y-12 pb-10">
              <div class="publication-description">
                <div
                  class="description-body space-y-2 flex justify-center justify-center"
                  v-html="publications.body"
                ></div>
              </div>

              <div class="flex flex-col text-left">
                <div v-if="publications.wing" class>
                  Wing:
                  <nuxt-link
                    :to="{
                      name: 'wing-slug',
                      params: { slug: publications.wing.slug }
                    }"
                    class="hover:font-bold underline"
                    >{{ publications.wing.name }}</nuxt-link
                  >
                </div>

                <div v-if="publications.region" class>
                  Region:
                  <nuxt-link
                    :to="{
                      name: 'region-slug',
                      params: { slug: publications.region.slug }
                    }"
                    class="hover:font-bold underline"
                    >{{ publications.region.name }}</nuxt-link
                  >
                </div>

                <div
                  v-if="publications.attachments"
                  class="flex items-center md:items-start flex-col text-md font-medium italic my-2"
                >
                  <div>Attachments:</div>
                  <a
                    :href="publications.attachments.data.full_url"
                    download
                    class="p-2 w-40 lg:w-48 text-center rounded bg-orange-500 cursor-pointer text-white block"
                  >
                    Download
                    {{ publications.attachments.filename_download }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ErrorHandler>
    </div>
  </div>
</template>

<script>
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'

export default {
  components: {
    ErrorHandler
  },
  methods: {
    formatDate(param) {
      let temporaryDate = new Date(param)
      let month = temporaryDate.toLocaleString('default', { month: 'short' })
      let day = temporaryDate.toLocaleString('default', { day: 'numeric' })
      let year = temporaryDate.toLocaleString('default', { year: 'numeric' })

      let fullDate = `${month} ${day}, ${year}`
      return fullDate
    }
  },

  async asyncData({ params, $axios }) {
    let url = `publication?filter[slug][eq]=${params.slug}&filter[status]=published&fields=*.*`
    const result = await $axios
      .$get(url)
      .then(res => res)
      .catch(err => err)

    return {
      publications: result.data[0]
    }
  }
}
</script>

<style></style>
