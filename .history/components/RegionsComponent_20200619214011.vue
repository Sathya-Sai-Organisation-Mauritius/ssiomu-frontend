<<template>
  <div>
    <div class="py-20 ">
      <div class="container mx-auto">
        <div>
          <h2
            class="font-serif text-4xl font-bold text-black pb-8 text-center md:text-left"
          >
            All regions
          </h2>
          <!-- <div
            v-if="errors"
            class="bg-red-900 p-3 text-xl text-red-500 text-center"
          >
            {{ errors }}
          </div> -->
          <div>
            <p v-if="$fetchState.pending">Fetching posts...</p>
            <p v-else-if="$fetchState.error">
              Error while fetching posts: {{ $fetchState.error.message }}
            </p>
            <div class="grid md:grid-cols-2 gap-4 " v-else>
              <RegionsComponentBox
                v-for="(description, index) in regions"
                :key="index"
                :myvalues="description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegionsComponentBox from '~/components/RegionsComponentBox.vue'

export default {
  components: {
    RegionsComponentBox
  },

  props: ['fetchURL'],

  data: () => {
    return {
      regions: [],
      apiEndpoint: 'http://localhost:4444'
    }
  },
  async fetch() {
    const result = await this.$http.$get(this.apiEndpoint + this.fetchURL)
    this.regions = result.data
  }
  // data() {
  //   return {
  //     myResult: false,
  //     errors: false
  //   }
  // },

  // methods: {
  //   getJson(response) {
  //     return response.json()
  //   },

  //   displayData(result) {
  //     console.log(result)
  //     this.myResult = result.data
  //   },

  //   handleError(error) {
  //     console.log(error)
  //     this.errors = 'An error occured. Please try again later.'
  //   },

  //   fetchData() {
  //     fetch('http://localhost:4444/_/items/region?fields=*.*')
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
