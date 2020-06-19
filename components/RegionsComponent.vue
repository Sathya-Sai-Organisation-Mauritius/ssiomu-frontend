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

          <div class="grid md:grid-cols-2 gap-4 ">
            <RegionsComponentBox
              v-for="(description, index) in myResult"
              :key="index"
              :myvalues="description"
            />
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

  data() {
    return {
      myResult: false,
      errors: false
    }
  },

  methods: {
    getJson(response) {
      return response.json()
    },

    displayData(result) {
      console.log(result)
      this.myResult = result.data
    },

    handleError(error) {
      console.log(error)
      this.errors = 'An error occured. Please try again later.'
    },

    fetchData() {
      fetch('http://localhost:4444/_/items/region?fields=*.*')
        .then(this.getJson)

        .then(this.displayData)
        .catch(this.handleError)
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped></style>
