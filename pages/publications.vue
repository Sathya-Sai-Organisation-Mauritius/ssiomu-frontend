<<template>
  <div class="Publications">
    <div
      class="container mx-auto relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div v-if="publications.length > 0">
        <div class="text-center">
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

        <ErrorHandler :model="publications">
          <div
            class="mt-12 grid gap-5 mx-auto lg:grid-cols-3"
            v-if="publications"
          >
            <PublicationBox
              v-for="(pubDescription, index) in publications"
              :key="index"
              :pubvalues="pubDescription"
            />
          </div>
        </ErrorHandler>
      </div>
      <div v-else>
        <h2 class="font-serif text-3xl text-center font-bold text-black">
          No publications on this page
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'

import PublicationBox from '~/components/PublicationBox.vue'

export default {
  head() {
    return {
      title: 'Publications',
      meta: [
        { hid: 'description', name: 'description', content: 'All Publication' }
      ]
    }
  },
  components: {
    PublicationBox,
    ErrorHandler
  },
  async asyncData({ $axios }) {
    const result = await $axios
      .$get(
        'publication?filter[status]=published&fields=*.*,photo.*,wing.name,wing.slug'
      )
      .then(res => res)
      .catch(err => err)

    return {
      publications: result.data
    }
  }
}
</script>

<style lang="scss" scoped></style>
