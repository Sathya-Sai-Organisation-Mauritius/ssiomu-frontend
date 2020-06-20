<<template>
  <div class="announcement-details bg-orange-100 border-t-4 border-orange-500 ">
    <div
      class="container mx-auto px-4 md:px-0 py-10 flex flex-col justify-center text-blue-500 "
    >
      <div class="lg:flex mb-4 items-center space-x-10">
        <div class=" w-2/2 lg:w-1/2  lg:mr-4 ">
          <div class="text-center pb-10">
            <h2
              class="font-serif text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
            >
              Announcements
            </h2>
          </div>
          <div>
            <p v-if="$fetchState.pending">Fetching posts...</p>
            <p v-else-if="$fetchState.error">
              Error while fetching posts: {{ $fetchState.error.message }}
            </p>
            <div
              class="bg-white shadow overflow-hidden sm:rounded-md border-t-8 border-orange-500 "
              v-else
            >
              <ul>
                <AnnouncementBox
                  v-for="(announcementdescription, index) in announcements"
                  :key="index"
                  :announcmentvalues="announcementdescription"
                />
              </ul>
            </div>
          </div>
        </div>
        <div class="w-0 lg:w-1/2 hidden -ml-2 lg:block lg:overflow-hidden ">
          <img
            class="h-full w-full overflow-hidden"
            src="/images/flowers2.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnnouncementBox from '../components/AnnouncementBox'
export default {
  components: {
    AnnouncementBox
  },

  props: ['subtitle', 'color', 'query'],

  data() {
    return {
      announcements: []
    }
  },
  async fetch() {
    let url = `${this.apiEndpoint}${this.query}`
    const result = await this.$http.$get(url)
    this.announcements = result.data
  }
}
</script>

<style></style>
