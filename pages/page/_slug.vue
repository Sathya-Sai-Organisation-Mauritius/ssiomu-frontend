<template>
  <div>
    <ErrorHandler :model="pages">
      <div class="container mx-auto " v-if="pages">
        <div class=" page-details space-y-10 md:space-y-12 py-12 md:py-20">
          <div
            class="page-title font-bold space-x-2 items-center w-full mx-auto prose"
          >
            <h1 class="font-serif text-3xl md:text-4xl lg:text-6xl text-center">
              {{ pages.title }}
            </h1>
          </div>

          <div v-if="pages.cover">
            <img :src="pages.cover.data.full_url" alt="" />
          </div>

          <div class="md:grid md:grid-cols-12 gap-4">
            <div
              class="page-description space-y-3 prose "
              :class="
                pages && pages.related_links
                  ? 'md:col-span-9'
                  : 'md:col-span-12'
              "
              v-html="pages.body"
            ></div>

            <RelatedLinks
              class="w-full md:max-w-xs md:col-span-3"
              :class="
                pages && pages.related_links ? 'md:col-span-3' : 'md:hidden'
              "
              v-if="pages && pages.related_links"
              :related_links="pages.related_links"
            />
          </div>
        </div>
      </div>
    </ErrorHandler>
  </div>
</template>

<script>
import ErrorHandler from '~/components/Shared/ErrorHandler.vue'
import RelatedLinks from '~/components/Shared/RelatedLinks.vue'

export default {
  components: {
    ErrorHandler,
    RelatedLinks
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

<style lang="scss">
.page-description {
  iframe {
    width: 100%;
    height: 540px;
    aspect-ratio: 1.3;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
