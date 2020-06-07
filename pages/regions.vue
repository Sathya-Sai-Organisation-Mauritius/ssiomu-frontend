<template>
  <div>
    <SiteHeader />

    <div class="container mx-auto">
      <div class="region-details grid gap-1 grid-cols-2 space-y-12 py-10">
        <div
          class="region-title font-bold flex col-span-1 space-x-2 items-center"
        >
          <h1 class="text-5xl">Lower Plaine Wilhems</h1>
        </div>
        <div class="relative col-span-1" style="margin-top: 0;">
          <div
            class="absolute top-0 right-0 text-2xl text-gray-700 bg-black-100 border-2 border-black-900 rounded-full p-3 px-10 font-black"
          >
            Region 5
          </div>
        </div>
      </div>
    </div>

    <UpcomingEvents />

    <!-- <div class="region-events-upcoming gradient-bg py-8">
      <div class="container mx-auto space-y-4">
        <h2
          class="text-white text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10"
        >
          Upcoming events
        </h2>
        <p class="text-white max-w-2xl text-xl leading-7">
          These events are hapenning soon in Region X
        </p>
        <div>
          <div class="grid grid-cols-3 gap-8 text-blue-500">
            <div class="views-row bg-gray-200 p-8">
              <div class="grid grid-cols-4 gap-4">
                <div
                  class="col-span-1 font-bold text-3xl text-right leading-none"
                >
                  <div>18 May</div>
                </div>
                <div class="col-span-3">
                  <h3 class="font-bold">TITLE</h3>
                  <div class="font-light">REGION CONTENT</div>
                </div>
              </div>
            </div>

            <div class="views-row bg-gray-200 p-8">
              <div class="grid grid-cols-4 gap-4">
                <div
                  class="col-span-1 font-bold text-3xl text-right leading-none"
                >
                  <div>18 May</div>
                </div>
                <div class="col-span-3">
                  <h3 class="font-bold">TITLE</h3>
                  <div class="font-light">REGION CONTENT</div>
                </div>
              </div>
            </div>

            <div class="views-row bg-gray-200 p-8">
              <div class="grid grid-cols-4 gap-4">
                <div
                  class="col-span-1 font-bold text-3xl text-right leading-none"
                >
                  <div>18 May</div>
                </div>
                <div class="col-span-3">
                  <h3 class="font-bold">TITLE</h3>
                  <div class="font-light">REGION CONTENT</div>
                </div>
              </div>
            </div>

            <div class="views-row bg-gray-200 p-8">
              <div class="grid grid-cols-4 gap-4">
                <div
                  class="col-span-1 font-bold text-3xl text-right leading-none"
                >
                  <div>18 May</div>
                </div>
                <div class="col-span-3">
                  <h3 class="font-bold">TITLE</h3>
                  <div class="font-light">REGION CONTENT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container mx-auto">
      <div class="region-details space-y-12 py-10">
        <PastEvents />
        <!-- <div class="region-events-past">
          <div class="">
            <h2
              class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
            >
              Past events
            </h2>
            <p class="mt-3 max-w-2xl text-xl leading-7 text-gray-700 sm:mt-4">
              A list of past events in Region X
            </p>
          </div>
          <div class="py-8">
            <div class="shadow overflow-hidden sm:rounded-md">
              <ul>
                <li>
                  <a
                    href="#"
                    class="hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    <div class="px-4 py-4 sm:px-6">
                      <div class="flex items-center justify-between">
                        <div
                          class="text-lg leading-5 font-bold text-blue-600 truncate"
                        >
                          Event Name
                        </div>
                        <div class="ml-2 flex-shrink-0 flex">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
                          >
                            Region 6
                          </span>
                        </div>
                      </div>
                      <div class="mt-2 sm:flex sm:justify-between">
                        <div class="sm:flex">
                          <div
                            class="mr-6 flex items-center text-sm leading-5 text-gray-600"
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
                            Wing Name
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
                            Devotional Group / Center
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
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="border-t border-gray-200">
                  <a
                    href="#"
                    class="hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    <div class="px-4 py-4 sm:px-6">
                      <div class="flex items-center justify-between">
                        <div
                          class="text-lg leading-5 font-bold text-blue-600 truncate"
                        >
                          Event Name
                        </div>
                        <div class="ml-2 flex-shrink-0 flex">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
                          >
                            Region 3
                          </span>
                        </div>
                      </div>
                      <div class="mt-2 sm:flex sm:justify-between">
                        <div class="sm:flex">
                          <div
                            class="mr-6 flex items-center text-sm leading-5 text-gray-600"
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
                            Wing Name
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
                            Devotional Group / Center
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
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="border-t border-gray-200">
                  <a
                    href="#"
                    class="hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    <div class="px-4 py-4 sm:px-6">
                      <div class="flex items-center justify-between">
                        <div
                          class="text-lg leading-5 font-bold text-blue-600 truncate"
                        >
                          Event Name
                        </div>
                        <div class="ml-2 flex-shrink-0 flex">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
                          >
                            Region 5
                          </span>
                        </div>
                      </div>
                      <div class="mt-2 sm:flex sm:justify-between">
                        <div class="sm:flex">
                          <div
                            class="mr-6 flex items-center text-sm leading-5 text-gray-600"
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
                            Wing Name
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
                            Devotional Group / Center
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
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->

        <UpcomingPublications />

        <OfficeBearer />
      </div>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import UpcomingEvents from '~/components/UpcomingEvents.vue'
import UpcomingPublications from '~/components/UpcomingPublications.vue'
import PastEvents from '~/components/PastEvents.vue'

export default {
  data: () => {
    return {
      subtitle: 'A list of events in region X '
    }
  },
  components: {
    SiteHeader,
    SiteFooter,
    UpcomingEvents,
    UpcomingPublications,
    PastEvents
  }
}
</script>

<style>
.gradient-bg {
  background: linear-gradient(90deg, #1c5877, #0d2d3d 100%);
}
</style>
