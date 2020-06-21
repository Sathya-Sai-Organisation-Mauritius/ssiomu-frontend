<<template>
  <tr class="bg-white">
    <td
      class="px-6 py-4 whitespace-no-wrap text-lg leading-5 font-medium text-gray-900"
    >
      {{ officebearervalues.name }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-lg leading-5 text-gray-500">
      {{ officebearervalues.phone }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-lg leading-5 text-gray-500">
      {{ officebearervalues.email }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-lg leading-5 text-gray-500">
      {{ officebearervalues.role }}
    </td>
  </tr>
</template>

<script>
export default {
  props: ['officebearervalues']
}
</script>

<style lang="scss" scoped></style>
