<<template>
  <div class="Publications">
    <div
      class="container mx-auto relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div class="text-center">
        <h2
          class="font-serif text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          Publications
        </h2>
        <p class="mt-3 mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>

      <div>
        <p v-if="$fetchState.pending" class="text-center text-black text-xl ">
          Publications loading...
        </p>
        <p
          v-else-if="$fetchState.error"
          class="text-center text-red-300 bg-red-900 text-xl p-4 "
        >
          Error while loading publications, please try again later.
          {{ $fetchState.error.message }}
        </p>

        <div class="mt-12 grid gap-5 mx-auto lg:grid-cols-3" v-else>
          <PublicationBox
            v-for="(pubDescription, index) in publications"
            :key="index"
            :pubvalues="pubDescription"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicationBox from '~/components/PublicationBox.vue'

export default {
  components: {
    PublicationBox
  },
  data() {
    return {
      publications: [],
      query: '/_/items/publication?fields=*.*,photo.*,wing.name,wing.slug'
    }
  },
  async fetch() {
    const result = await this.$http.$get(this.query)
    this.publications = result.data
  }
}
</script>

<style lang="scss" scoped></style>
