<template>
  <div v-if="related_links">
    <div class="p-4 w-full bg-gray-200  rounded-md text-left">
      <div class="space-y-2">
        <h3 class="font-bold text-lg py-2 text-blue-800 uppercase text-center">
          Related Links
        </h3>
        <ul
          class="list-disc pl-4"
          v-for="(link, index) in related_links"
          :key="index + link.link"
        >
          <li>
            <a
              class="block text-blue-500 hover:text-orange-500 hover:underline"
              :href="link.link"
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
