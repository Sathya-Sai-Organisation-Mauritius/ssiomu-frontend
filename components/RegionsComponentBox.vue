<<template>
  <div class="description mb-8 mx-4 md:mx-0">
    <div
      class="views-row bg-white  px-4 pt-2 rounded shadow-lg border-b-4 border-blue-700 "
    >
      <nuxt-link class="hover:underline" :to="'/region/' + myvalues.id">
        <div class="flex items-center grid grid-cols-5 gap-4">
          <div
            class=" circ-num text-md md:text-xl lg:text-4xl text-center sm:font-medium text-blue-600"
          >
            <span class="">#</span>
            {{ myvalues.number }}
          </div>

          <div
            class="flex col-span-3 font-semibold text-sm md:text-xl lg:text-3xl text-blue-900"
          >
            <!-- <nuxt-link class="hover:underline" :to="myvalues.url"> -->
            {{ myvalues.name }}
            <!-- </nuxt-link > -->
          </div>
          <div class="flex justify-end">
            <div
              class="shape-wrapper relative w-8 h-8 md:w-16 md:h-16"
              style="--map-size:50px;"
            >
              <div class="shape absolute ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-map "
                >
                  <polygon
                    points="1 6 1 20 8 16 16 20 23 16 23 2 16 6 8 2 1 6"
                  ></polygon>
                  <line x1="8" y1="2" x2="8" y2="16"></line>
                  <line x1="16" y1="6" x2="16" y2="20"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['myvalues']
}
</script>

<style lang="scss" scoped></style>
