<<template>
  <div class="container mx-auto py-12">
    <div class="region-team space-y-4">
      <h2
        class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
      >
        Office Bearers
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
                      class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <OfficeBearerBox
                    v-for="(officeBearer, index) in members"
                    :officebearervalues="officeBearer.member_id"
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
import OfficeBearerBox from '../components/OfficeBearerBox'

export default {
  components: {
    OfficeBearerBox
  },
  props: ['information'],
  data() {
    return {
      members: this.information
    }
  }
}
</script>

<style lang="scss" scoped></style>
