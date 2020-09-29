<template>
  <tr class="bg-white">
    <td
      class="px-6 py-4 whitespace-no-wrap text-lg leading-5 font-medium text-gray-900"
    >
      <nuxt-link :to="{ name: 'group-slug', params: { slug: values.slug } }">{{
        values.name
      }}</nuxt-link>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-lg leading-5 text-gray-500">
      {{ formatType(values.type) }}
    </td>
  </tr>
</template>

<script>
export default {
  props: ['values'],

  methods: {
    formatType(typ) {
      switch (typ) {
        case 'dg':
          return 'Sathya Sai Group'
          break

        case 'center':
          return 'Sathya Sai Centre'

        default:
          return 'Sathya Sai Group'
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
