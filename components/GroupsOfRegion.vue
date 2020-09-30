<template>
  <div class="container mx-auto py-12">
    <div class="region-team space-y-4">
      <h2
        class="text-xl md:text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
      >
        Centers/Groups in this region
      </h2>

      <div>
        <div class="flex flex-col">
          <div
            class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            <div
              class="align-middle inline-block min-w-full shadow overflow-hidden border-b border-gray-200"
            >
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      class="px-2 md:px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      class="px-2 md:px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <GroupsBox
                    v-if="group.id"
                    v-for="(group, index) in groups"
                    :values="group"
                    :key="index"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GroupsBox from '../components/GroupsBox'

export default {
  components: {
    GroupsBox
  },
  props: ['information'],
  data() {
    return {
      groups: this.information
    }
  }
}
</script>

<style lang="scss" scoped></style>
