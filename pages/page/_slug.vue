<template>
  <div>
    <div>
      <div>
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
  async asyncData({ params, $http }) {
    let url = `page?filter[slug][eq]=${params.slug}&fields=*.*`
    const result = await $http.$get(url)

    return {
      pages: result.data[0]
    }
  }
}
</script>

<style></style>
