<<template>
  <div class="bg-gray-200">
    <div class="container mx-auto relative pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div class="pb-12" :class="textalign">
        <h2
          class="font-serif text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          Past events
        </h2>
        <p v-if="subtitle" class="mt-3 text-xl leading-7 text-gray-700 sm:mt-4">
          {{ subtitle }}
        </p>
      </div>
      <!-- <div
        v-if="errors"
        class="bg-red-900 p-3 text-xl text-red-500 text-center"
      >
        {{ errors }}
      </div> -->
      <!-- {{ $fetchState }} -->
      <div>
        <p v-if="$fetchState.pending">Fetching posts...</p>
        <p v-else-if="$fetchState.error">
          Error while fetching posts: {{ $fetchState.error.message }}
        </p>

        <div class="bg-white shadow overflow-hidden sm:rounded-md" v-else>
          <ul>
            <PastEventBox
              v-for="(pasteventdescription, index) in pastevents"
              :pasteventvalues="pasteventdescription"
              :key="index"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PastEventBox from '../components/PastEventBox'
export default {
  components: {
    PastEventBox
  },
  props: ['subtitle', 'color', 'textalign', 'textcolor', 'fetchURL'],
  data: () => {
    return {
      pastevents: [],
      apiEndPoint: 'http://localhost:4444'
    }
  },
  mounted() {
    console.log(this.fetchURL)
  },

  async fetch() {
    const result = await this.$http.$get(this.apiEndpoint + this.fetchURL)
    console.log(result)
    this.pastevents = result.data
  },
  fetchOnServer: false
  // methods: {
  //   getJson(response) {
  //     return response.json()
  //   },

  //   handleError(error) {
  //     console.log(error)
  //     this.errors = 'An error occured, please try again later.'
  //   },

  //   displayData(result) {
  //     console.log(result)
  //     this.myResult = result
  //   },

  //   fetchData() {
  //     fetch(
  //       'http://localhost:4444/_/items/event?filter[from][lt]=now&fields=*.*'
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

<style lang="scss" scoped></style>
