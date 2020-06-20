<<template>
  <div>
    <div>
      <p v-if="$fetchState.pending">Fetching posts...</p>
      <p v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </p>
      <div v-else>
        <div class="container mx-auto">
          <div class="publication-details space-y-12 py-10">
            <div
              class="publication-details grid gap-1 grid-cols-3 space-y-12 py-10 border-b border-gray-20"
            >
              <div
                class="publication-title font-bold flex col-span-2 space-x-2 items-center"
              >
                <h1 class="text-4xl">
                  {{ publications.title }}
                </h1>
              </div>
              <div class="relative col-span-1" style="margin-top: 0;">
                <div
                  class="absolute text-2xl top-0 right-0 text-gray-700 bg-black-100 border-2 border-gray-400 rounded-full p-3 px-10 font-black"
                  v-if="publications.region"
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
              <div v-if="publications.wing">
                Wing: {{ publications.wing.name }}
              </div>

              <div v-if="publications.region">
                Region: {{ publications.region.name }}
              </div>

              <div>
                Attachment: PDF icon Sai Newletter -
                {{ publications.date }} LD.pdf {{ publications.attachments }} -
                {{ publications.date }}
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

  data() {
    return {
      publicationId: this.$route.params.slug,
      publications: [],

      fetchURL: '/_/items/publication/',
      filter: '?filter[slug][eq]=',
      fields: '?fields=*.*'
    }
  },
  async fetch() {
    let url = `${this.fetchURL}${this.filter}${this.publicationId}${this.fields}`
    console.log(url)
    const result = await this.$http.$get(url)
    console.log(result)
    this.publications = result.data[0]
  }
}
</script>

<style></style>
