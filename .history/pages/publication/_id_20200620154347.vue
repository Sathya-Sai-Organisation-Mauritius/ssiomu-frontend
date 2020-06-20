<<template>
  <div>
    <div v-if="errors" class="bg-red-900 p-3 text-xl text-red-500 text-center">
      {{ errors }}
    </div>
    <div v-else>
      <div v-if="publications">
        <div class="container mx-auto">
          <div class="publication-details space-y-12 py-10">
            <div
              class="publication-details grid gap-1 grid-cols-3 space-y-12 py-10 border-b border-gray-20"
            >
              <div
                class="publication-title font-bold flex col-span-2 space-x-2 items-center"
              >
                <h1 class="text-4xl">
                  <!-- Publication Sai Newsletter -Echoes from Region 1 savanne(Vol 4 ISS
              1) - Savanne -->
                  {{ publications.title }}
                </h1>
              </div>
              <div class="relative col-span-1" style="margin-top: 0;">
                <div
                  class="absolute text-2xl top-0 right-0 text-gray-700 bg-black-100 border-2 border-gray-400 rounded-full p-3 px-10 font-black"
                >
                  Region {{ publications.region.number }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto">
          <div class="publication-details space-y-12 pb-10">
            <div class="publication-description">
              <div
                class="description-body space-y-2"
                v-html="publications.body"
              ></div>
            </div>

            <div>
              <div>Wing: {{ publications.wing.name }}</div>

              <div>Region: {{ publications.region.name }}</div>

              <div>
                Attachment: PDF icon Sai Newletter -
                {{ publications.date }} LD.pdf {{ publications.attachments }} -
                {{ publications.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class=" text-2xl py-12 text-black text-center">
        Publication loading, please wait..
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: ['subtitle', 'color', 'textalign', 'maxheight', 'fetchURL'],
  data: () => {
    return {
      publicationId: this.$route.params.id,

      publications: [],
      apiEndpoint: 'http://localhost:4444'
    }
  },
  async fetch() {
    const result = await this.$http.$get(this.apiEndpoint + this.fetchURL)
    console.log(result)
    this.publications = result.data
  }

  // methods: {
  //   getJson(response) {
  //     return response.json()
  //   },
  //   handleError(error) {
  //     console.log(error)
  //     this.errors = 'An error occured. Please try again later.'
  //   },

  //   displayData(result) {
  //     console.log(result)
  //     this.myResult = result.data
  //   },

  //   fetchData() {
  //     fetch(
  //       'http://localhost:4444/_/items/publication/' +
  //         this.pageId +
  //         '?fields=*.*'
  //     )
  //       .then(this.getJson)
  //       .then(this.displayData)
  //       .catch(this.handleError)
  //   }
  // },
  // mounted() {
  //   this.fetchData()
  // }
}
</script>

<style></style>
