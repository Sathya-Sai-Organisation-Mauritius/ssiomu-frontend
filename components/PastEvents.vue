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
  props: ['subtitle', 'color', 'textalign', 'textcolor', 'query'],
  data() {
    return {
      pastevents: []
    }
  },
  async fetch() {
    const result = await this.$http.$get(this.query)
    this.pastevents = result.data
  }
}
</script>

<style lang="scss" scoped></style>
