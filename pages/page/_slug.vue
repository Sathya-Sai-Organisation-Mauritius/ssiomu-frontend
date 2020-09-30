<template>
  <div>
    <ErrorHandler :model="pages">
      <div class="container mx-auto " v-if="pages">
        <div
          class=" page-details space-y-10 md:space-y-12 py-12 md:py-20 text-center"
        >
          <div class="page-title font-bold space-x-2 items-center">
            <h1 class="font-serif text-3xl md:text-4xl lg:text-6xl text-center">
              {{ pages.title }}
            </h1>
          </div>

          <div class="page-description space-y-3" v-html="pages.body"></div>
        </div>
      </div>
    </ErrorHandler>
  </div>
</template>

<script>
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'

export default {
  components: {
    ErrorHandler
  },

  async asyncData({ params, $axios }) {
    let url = `page?filter[slug][eq]=${params.slug}&filter[status]=published&fields=*.*`
    const result = await $axios
      .$get(url)
      .then(res => res)
      .catch(err => err)

    return {
      pages: result.data[0]
    }
  }
}
</script>

<style></style>
