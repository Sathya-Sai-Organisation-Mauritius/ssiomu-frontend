<<template>
  <div>
    <div class="py-20 gradient-bg">
      <div class="container mx-auto">
        <div>
          <h2
            class="font-serif text-4xl font-bold text-white pb-8"
            :class="textalign"
          >
            Upcoming Events
          </h2>

          <div
            v-if="errors"
            class="bg-red-900 p-3 text-xl text-red-500 text-center"
          >
            {{ errors }}
          </div>
          <div v-else>
            <div
              class="grid md:grid-cols-3 gap-8 text-blue-600"
              v-if="myResult"
            >
              <UpcomingEventBox
                v-for="(description, index) in myResult"
                :key="index"
                :myvalues="description"
              />
            </div>
            <div v-else class="text-2xl text-white text-center py-8">
              Upcoming events are loading. Please wait....
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingEventBox from '../components/UpcomingEventBox'

export default {
  components: {
    UpcomingEventBox
  },

  props: ['color', 'textalign', 'textcolor'],
  data: () => {
    return {
      myResult: false,
      errors: false
    }
  },

  methods: {
    getJson(response) {
      return response.json()
    },

    handleError(error) {
      console.log(error)
      this.errors = 'An error occured. Please try again later.'
    },

    displayData(result) {
      console.log(result)
      this.myResult = result.data
    },

    fetchData() {
      fetch('http://localhost:4444/_/items/event?filter[from][gt]=now')
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

<style></style>
