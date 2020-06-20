<template>
  <header role="banner">
    <div class="container mx-auto">
      <div>
        <nav role="navigation">
          <ul class="flex justify-end text-blue-500 text-sm">
            <li class="p-2">
              <a href="http://localhost:4444" target="_blank">Log in</a>
            </li>
            <li class="p-2">Mauritius / Zone 9A</li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="main-menu-wrapper relative z-10 ">
      <div class="container flex items-center mx-auto">
        <div>
          <div id="block-tailwingcss-branding">
            <div class="flex items-center">
              <a href="/" title="Home" rel="home" class="site-logo mr-2">
                <img src="/images/logo.png" alt="Home" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <nav role="navigation">
            <ul class="flex ml-4">
              <li
                class="hover:bg-orange-600 hover"
                v-for="menu in menuRoot"
                :key="menu.url"
              >
                <nuxt-link
                  :to="menu.url"
                  v-if="menu.url !== null"
                  class="py-5 flex px-5"
                >
                  {{ menu.name }}
                </nuxt-link>
                <div v-else>
                  {{ menu.name }}
                </div>
              </li>

              <li class=" relative hover:bg-orange-500 hover" v-if="regions">
                <div class="dropdown ">
                  <nuxt-link
                    to="/regions"
                    class=" inline-flex items-center py-5 px-5"
                  >
                    <span class="mr-1">Regions</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </nuxt-link>
                  <ul
                    class="dropdown-menu absolute block left-0 hidden block text-white-700 pt-xl "
                  >
                    <li class="" v-for="region in regions" :key="region.id">
                      <nuxt-link
                        class="bg-orange-600 hover:bg-orange-500 py-3 flex whitespace-no-wrap mb-0 px-3"
                        :to="'/region/' + region.id"
                        >{{ region.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </li>

              <li class=" relative hover:bg-orange-500 hover">
                <div class="dropdown ">
                  <div class=" inline-flex items-center  py-5 px-5">
                    <span class="mr-1">Wings</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                  <ul
                    class="dropdown-menu absolute left-0 hidden block text-white-700 pt-xl"
                  >
                    <li class="" v-for="wing in wings" :key="wing.id">
                      <nuxt-link
                        class="bg-orange-600 hover:bg-orange-500 py-3 flex whitespace-no-wrap mb-0 px-3"
                        :to="'/wing/' + wing.id"
                        >{{ wing.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </li>

              <li class=" relative hover:bg-orange-500 hover">
                <div class="dropdown ">
                  <div class=" inline-flex items-center  py-5 px-5">
                    <span class="mr-1">Resources</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                  <ul
                    class="dropdown-menu absolute left-0 hidden block text-white-700 shadow-xl "
                  >
                    <li
                      class="bg-orange-600 hover:bg-orange-500 py-3 flex whitespace-no-wrap mb-0 px-3"
                      v-for="menu in menuResources"
                      :key="menu.url"
                    >
                      <nuxt-link :to="menu.url" v-if="menu.url !== null">
                        {{ menu.name }}
                      </nuxt-link>
                      <div v-else>
                        {{ menu.name }}
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      regions: [],
      wings: [],
      menuResources: [
        {
          url: 'sai-shop',
          name: 'Sai shop'
        },
        {
          url: 'guidelines',
          name: 'Guidelines'
        },
        {
          url: 'links',
          name: 'Links'
        },
        {
          url: 'pws-resources',
          name: 'PWS resources'
        },
        {
          url: 'pre-world-conference-videos',
          name: 'Pre World Conference Videos'
        }
      ],
      menuRoot: [
        {
          url: '/',
          name: 'Home'
        },
        // {
        //   url: '/publications/',
        //   name: 'About'
        // },
        // {
        //   url: '/publications/',
        //   name: 'Gallery'
        // },
        {
          url: '/publications/',
          name: 'Publications'
        },
        {
          url: '/events/',
          name: 'Events'
        }
      ]
    }
  },
  async fetch() {
    // Get Regions
    const regionQuery = '/_/items/region?fields=*.*'
    const regionData = await this.$http.$get(regionQuery)

    // Get Wings
    const wingQuery = '/_/items/wing?fields=*.*'
    const wingData = await this.$http.$get(wingQuery)

    let filteredRegions = regionData.data.map(region => {
      // pluck properties from object
      let { name, number, id } = region
      return {
        name,
        number,
        id
      }
    })

    let filteredwings = wingData.data.map(wing => {
      // pluck properties from object
      let { name, number, id } = wing
      return {
        name,
        number,
        id
      }
    })

    this.regions = filteredRegions
    this.wings = filteredwings
  },
  fetchOnServer: false
}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}

.nuxt-link-exact-active {
  background: rgb(237 137 54);
}
</style>
