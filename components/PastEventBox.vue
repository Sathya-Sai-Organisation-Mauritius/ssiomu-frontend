<<template>
  <li>
    <a
      href="#"
      class="hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
    >
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center justify-between">
          <div
            class="text-lg leading-5 font-bold text-blue-600 truncate"
            :class="textcolor"
          >
            {{ pasteventvalues.eventname }}
          </div>
          <div class="ml-2 flex-shrink-0 flex">
            <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
            >
              {{ pasteventvalues.region }}
            </span>
          </div>
        </div>
        <div class="mt-2 sm:flex sm:justify-between">
          <div class="sm:flex">
            <div class="mr-6 flex items-center text-sm leading-5 text-gray-600">
              <svg
                class="flex-shrink-0 mr-2 h-5 w-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                />
              </svg>
              {{ pasteventvalues.wingname }}
            </div>
            <div
              class="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mt-0"
            >
              <svg
                class="flex-shrink-0 mr-2 h-5 w-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ pasteventvalues.center }}
            </div>
          </div>
          <div
            class="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mt-0"
          >
            <svg
              class="flex-shrink-0 mr-2 h-5 w-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              <time datetime="2020-01-07">{{ pasteventvalues.time }}</time>
            </span>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: ['pasteventvalues', 'textcolor']
}
</script>

<style lang="scss" scoped></style>
