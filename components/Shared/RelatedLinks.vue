<template>
  <div v-if="related_links">
    <div class="p-8 w-full gradient-bg shadow-md  rounded-md text-left">
      <div class="space-y-2">
        <h3 class="font-bold text-lg py-2 text-white uppercase">
          Related Links
        </h3>
        <ul class="divide-y-2 divide-blue-700">
          <li v-for="(link, index) in related_links" :key="index + link.link">
            <a class="block py-2 text-white hover:underline" :href="link.link"
              >{{ link.title }}
            </a>
          </li>
        </ul>
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
