<template>
  <li>
    <div class="px-4 py-4 sm:px-6">
      <div class="flex items-center justify-between">
        <nuxt-link
          :to="{ name: 'event-slug', params: { slug: pasteventvalues.slug } }"
          class="hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        >
          <div
            class="text-lg leading-5 max-w-xxs md:max-w-6xl font-bold text-blue-600 truncate"
            :class="textcolor"
          >
            {{ pasteventvalues.name }}
          </div>
        </nuxt-link>

        <div
          class="ml-2 flex-shrink-0 flex"
          v-if="pasteventvalues.region !== null"
        >
          <nuxt-link
            :to="{
              name: 'region-slug',
              params: { slug: pasteventvalues.region.slug }
            }"
            class="hover:underline"
            v-if="pasteventvalues.region"
          >
            <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
              >Region {{ pasteventvalues.region.number }}</span
            >
          </nuxt-link>
        </div>
      </div>
      <div class="mt-2 sm:flex sm:justify-between">
        <div class="sm:flex">
          <nuxt-link
            v-if="pasteventvalues.wing !== null"
            :to="{
              name: 'wing-slug',
              params: { slug: pasteventvalues.wing.slug }
            }"
            class="hover:underline"
          >
            <div
              class="mr-6 flex items-center text-sm leading-5 text-gray-600"
              v-if="pasteventvalues.wing"
            >
              <svg
                class="flex-shrink-0 mr-2 h-5 w-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                />
              </svg>
              {{ pasteventvalues.wing.name }}
            </div>
          </nuxt-link>
          <nuxt-link
            v-if="pasteventvalues.group !== null"
            :to="{
              name: 'group-slug',
              params: { slug: pasteventvalues.group.slug }
            }"
            class="hover:underline"
          >
            <div
              class="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mt-0"
              v-if="pasteventvalues.group"
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
              {{ pasteventvalues.group.name }}
            </div>
          </nuxt-link>
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
            <time datetime="2020-01-07">
              {{ formatDate(pasteventvalues.from) }}
            </time>
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['pasteventvalues', 'textcolor'],

  methods: {
    formatDate(param) {
      let temporaryDate = new Date(param)
      let month = temporaryDate.toLocaleString('default', { month: 'long' })
      let day = temporaryDate.toLocaleString('default', { day: 'numeric' })
      let year = temporaryDate.toLocaleString('default', { year: 'numeric' })

      let fullDate = `${month} ${day}, ${year}`
      return fullDate
    }
  }
}
</script>

<style lang="scss" scoped></style>
