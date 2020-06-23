<template>
  <header role="banner">
    <div class="container mx-auto">
      <div>
        <nav role="navigation">
          <ul class="flex justify-end text-blue-500 text-sm">
            <li class="p-2 hidden md:block">
              <a href="http://localhost:4444" target="_blank">Log in</a>
            </li>
            <li class="p-2">Mauritius / Zone 9A</li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="main-menu-wrapper relative z-10 ">
      <div
        class="container flex justify-start md:justify-start items-center mx-auto"
      >
        <div>
          <div id="block-tailwingcss-branding">
            <div class="flex items-center">
              <nuxt-link to="/" title="Home" rel="home" class="site-logo mr-2">
                <img src="/images/logo.png" alt="Home" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block ">
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

              <li class=" relative hover:bg-orange-500 hover">
                <div class="dropdown ">
                  <nuxt-link
                    :to="'/regions'"
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
                    <li
                      class=""
                      v-for="region in getRegions"
                      :key="region.slug"
                    >
                      <nuxt-link
                        class="bg-orange-600 hover:bg-orange-500 py-3 flex whitespace-no-wrap mb-0 px-3"
                        :to="'/region/' + region.slug"
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
                    <li class="" v-for="wing in getWings" :key="wing.slug">
                      <nuxt-link
                        class="bg-orange-600 hover:bg-orange-500 py-3 flex whitespace-no-wrap mb-0 px-3"
                        :to="{ name: 'wing-slug', params: { slug: wing.slug } }"
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
                      v-for="menu in getMenuResources"
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
  data() {
    return {
      wings: [],

      menuRoot: [
        {
          url: '/',
          name: 'Home'
        },
        {
          url: '/page/about',
          name: 'About'
        },
        // {
        //   url: '/publications/',
        //   name: 'Gallery'
        // },
        {
          url: '/publications',
          name: 'Publications'
        },
        {
          url: '/events',
          name: 'Events'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getRegions', 'getWings', 'getMenuResources'])
  }
}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}

.main-menu-wrapper .nuxt-link-exact-active {
  background: rgb(237 137 54);
}

.main-menu-wrapper .site-logo {
  background: transparent;
}
</style>
