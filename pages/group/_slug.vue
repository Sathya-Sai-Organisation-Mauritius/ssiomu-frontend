<<template>
  <div>
    <div>
      <div>
        <div class="container mx-auto">
          <div class="information-details space-y-12 py-10">
            <div class="information-title font-bold space-x-2 center">
              <h1
                class="lg:text-6xl lg:justify-start text-4xl flex justify-center"
              >
                {{ groups.name }}
              </h1>
            </div>
            <table
              class="table-fixed overflow-hidden mx-12 md:mx-0 sm:rounded-md border shadow-lg"
            >
              <thead>
                <tr>
                  <!-- <th class="text-6xl col-span-2 px-4 py-2">Roche Bois</th> -->
                </tr>
              </thead>
              <tbody class="shadow-lg">
                <tr class="border-b">
                  <td
                    class="md:px-6 px-2 md:py-6 py-1 text-sm md:text-lg leading-5 font-bold text-blue-600 border-r truncate"
                  >
                    Status
                  </td>
                  <td
                    class="flex border-gray-200 md:px-6 px-2 md:py-6 md:text-lg text-gray-600"
                  >
                    <svg
                      class="flex-shrink-0 mr-2 h-5 md:w-5 w-3 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {{ groups.type }}
                  </td>
                </tr>
                <tr class="border-b">
                  <td
                    class="md:px-6 px-2 md:py-6 py-1 text-sm md:text-lg leading-5 font-bold text-blue-600 border-r truncate"
                  >
                    Found In
                  </td>
                  <td
                    class="flex md:px-6 px-2 md:py-6 md:text-lg text-gray-600"
                    v-if="groups.region"
                  >
                    <svg
                      class="flex-shrink-0 mr-2 h-5 md:w-5 w-3 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {{ groups.region.name }} - Region
                    {{ groups.region.number }}
                  </td>
                </tr>
                <tr class="rounded-b-sm">
                  <td
                    class="md:px-6 px-2 md:py-6 py-1 text-sm md:text-lg leading-5 font-bold text-blue-600 border-r truncate"
                  >
                    Other details
                  </td>
                  <td
                    class="flex md:px-6 px-2 md:py-6 md:text-lg text-gray-600"
                  >
                    Daechwita daechwita, im the king am the boss, traditional MV
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  async asyncData({ params, $http }) {
    let fetchURL = 'groups'
    let filter = '?filter[slug][eq]='
    let single = '&single'
    let fields = '&fields=*.*,type.label'
    let url = `${fetchURL}${filter}${params.slug}${single}${fields}`
    const result = await $http.$get(url)

    return {
      groups: result.data[0]
    }
  }
}
</script>

<style lang="sass" scoped></style>
