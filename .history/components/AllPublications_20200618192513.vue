<<template>
  <div class="Publications" :class="color">
    <div
      class="container mx-auto relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div :class="textalign">
          <h2
            class="font-serif text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Publications
          </h2>
          <p class="mt-3 mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>

        <div
          v-if="errors"
          class="bg-red-900 p-3 text-xl text-red-500 text-center"
        >
          {{ errors }}
        </div>

        <div class="mt-12 grid gap-5 mx-auto lg:grid-cols-3" v-if="myResult">
          <PublicationBox
            v-for="(pubDescription, index) in myResult"
            :key="index"
            :pubvalues="pubDescription"
          />
        </div>
        <div v-else class="text-2xl text-black text-center py-8">
          Publications are loading, please wait...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicationBox from '../components/PublicationBox'

export default {
  components: {
    PublicationBox
  },
  props: ['subtitle', 'color', 'textalign', 'maxheight', 'fetchURL'],
  data: () => {
    return {
      publications: [],
      apiEndpoint: 'http://localhost:4444'
    }
  },
  async fetch() {
    const result = await this.$http.$get(this.apiEndpoint + this.fetchURL)
    console.log(result)
    this.publications = result.data
  }
}
</script>

<style lang="scss" scoped></style>
