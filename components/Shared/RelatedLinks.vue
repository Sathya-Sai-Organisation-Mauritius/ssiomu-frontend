<template>
  <div v-if="related_links">
    <div class="p-4 w-full bg-gray-200 text-left">
      <div class="space-y-2">
        <h3 class="font-bold text-lg text-blue-800">Related Links</h3>
        <div v-for="(link, index) in related_links" :key="index + link.link">
          <a
            class="block text-blue-500 hover:text-orange-500 hover:underline"
            :href="link.link"
            >{{ link.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['related_links']
}
</script>

<style lang="scss" scoped></style>
