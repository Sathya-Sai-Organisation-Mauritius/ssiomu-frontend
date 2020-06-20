<template>
  <div>
    <div>
      <p v-if="$fetchState.pending">Fetching posts...</p>
      <p v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </p>
      <div v-else>
        <div class="container mx-auto ">
          <div class=" page-details space-y-12 py-20 text-center">
            <div class="page-title font-bold space-x-2 items-center">
              <h1 class="font-serif text-6xl text-center">{{ pages.title }}</h1>
            </div>

            <div class="page-description space-y-3" v-html="pages.body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: ['query'],

  data() {
    return {
      pageId: this.$route.params.slug,
      pages: [],
      fetchURL: '/_/items/page',
      filter: '?filter[slug][eq]=',
      field: '&fields=*.*'
    }
  },

  async fetch() {
    let url = `${this.fetchURL}${this.filter}${this.pageId}${this.field}`
    const result = await this.$http.$get(url)
    this.pages = result.data[0]
  }
}
</script>

<style></style>
