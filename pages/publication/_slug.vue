<<template>
  <div>
    <div>
      <div v-if="publications">
        <div class="container mx-auto">
          <div class="publication-details space-y-12 py-10 ">
            <div
              class="publications-details grid gap-1 md:grid-cols-3 space-y-4 py-2 border-b border-gray-20"
            >
              <div
                class="publications-title font-bold flex md:col-span-2 space-x-2 items-center justify-center md:justify-start"
              >
                <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl">
                  {{ publications.title }}
                </h1>
              </div>
              <div
                class="relative col-span-1 mx-12 flex items-center justify-center "
              >
                <div
                  class="text-center lg:absolute lg:text-2xl top-0 right-0 text-gray-700 bg-black-100 border-2 border-gray-400 rounded-full p-2 md:p-3 px-4 md:px-10 font-black"
                  v-if="publications.region"
                >
                  Region {{ publications.region.number }}
                </div>
              </div>
              <div class=" italic flex justify-center md:justify-start">
                Published on: {{ formatDate(publications.date) }}
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto">
          <div class="publication-details space-y-12 pb-10">
            <div class="publication-description">
              <div
                class="description-body space-y-2 flex justify-center md:justify-start  "
                v-html="publications.body"
              ></div>
            </div>

            <div class="flex flex-col text-center md:text-left">
              <div
                v-if="publications.wing"
                class="font-bold text-md lg:text-xl"
              >
                Wing:
                {{ publications.wing.name }}
              </div>

              <div
                v-if="publications.region"
                class="font-bold text-md lg:text-xl"
              >
                Region: {{ publications.region.name }}
              </div>

              <div
                v-if="publications.attachments"
                class="flex items-center md:items-start flex-col  text-md lg:text-xl font-medium italic my-2 "
              >
                <div>
                  Attachments:
                </div>
                <a
                  :href="publications.attachments.data.full_url"
                  download
                  class="p-2 w-40 lg:w-48 rounded bg-orange-500 cursor-pointer text-white block "
                  >Download {{ publications.attachments.filename_download }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

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

  async asyncData({ params, $http }) {
    let publicationId = params.slug
    let publications = []
    let fetchURL = 'publication'
    let filter = '?filter[slug][eq]='
    let fields = '&fields=*.*'

    let url = fetchURL + filter + publicationId + fields
    const result = await $http.$get(url)

    return {
      publications: result.data[0]
    }
  }
}
</script>

<style></style>
