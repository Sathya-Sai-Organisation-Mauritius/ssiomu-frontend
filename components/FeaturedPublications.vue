<<template>
  <div class="Publications" :class="color">
    <div
      class="container mx-auto relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <!-- <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div> -->

      <div v-if="publications.length > 0">
        <div
          class="relative max-w-7xl mx-auto overflow-hidden"
          :class="maxheight"
        >
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

          <div>
            <div class="mt-12 grid gap-5 mx-auto lg:grid-cols-3">
              <PublicationBox
                v-for="(pubDescription, index) in publications"
                :pubvalues="pubDescription"
                :key="index"
              />
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <h2
          class="font-serif text-3xl text-center font-bold text-black"
          :class="textalign"
        >
          No publications on this page
        </h2>
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
  props: ['subtitle', 'color', 'textalign', 'maxheight', 'information'],
  data() {
    return {
      publications: this.information
    }
  }
}
</script>

<style lang="scss" scoped></style>
