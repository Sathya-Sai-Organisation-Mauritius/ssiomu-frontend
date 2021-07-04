<template>
  <li class="border-t border-gray-200">
    <div
      class="hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
    >
      <div class="py-4 pr-4">
        <div class="mt-2 sm:flex sm:justify-between" v-if="relatedlink">
          <a class="sm:flex" :href="relatedlink.link" target="_blank">
            <div class="flex text-md leading-5 ">
              <div class="text-xl flex items-center justify-center w-1/6">
                <div v-if="relatedlink.photo">
                  <img :src="relatedlink.photo.data.full_url" alt="" />
                </div>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-radio"
                >
                  <circle cx="12" cy="12" r="2" />
                  <path
                    d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
                  />
                </svg>
              </div>
              <div class="space-y-2 w-5/6">
                <h2 class="text-xl text-primary-600 font-medium">
                  {{ relatedlink.title }}
                </h2>
                <p class="text-gray-600">{{ relatedlink.description }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['relatedlink'],

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
