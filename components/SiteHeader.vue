<template>
  <header role="banner">
    <div class="container mx-auto">
      <div>
        <nav role="navigation">
          <ul class="flex justify-end text-blue-500 text-sm">
            <li class="p-2">Mauritius / Zone 9A</li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="main-menu-wrapper relative z-10">
      <div
        class="container flex justify-start md:justify-start items-center mx-auto"
      >
        <div>
          <div id="block-tailwingcss-branding">
            <div class="flex items-center">
              <nuxt-link
                :to="{ name: 'index' }"
                title="Home"
                rel="home"
                class="site-logo mr-2"
              >
                <img src="/images/logo.png" alt="Home" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <nav role="navigation">
            <ul class="flex ml-4">
              <li
                class="relative hover:bg-orange-600 hover"
                v-for="menu in menuRoot"
                :key="menu.url"
              >
                <div class="dropdown" v-if="menu.hasOwnProperty('children')">
                  <nuxt-link
                    :to="{ path: menu.url }"
                    class="inline-flex items-center py-5 px-5"
                  >
                    <span class="mr-1">{{ menu.name }}</span>
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
                    class="dropdown-menu absolute block left-0 hidden block text-white-700 pt-xl"
                  >
                    <li class v-for="item in menu.children" :key="item.url">
                      <a
                        v-if="item.url.includes('https')"
                        :href="item.url"
                        target="_blank"
                        class="bg-orange-600 hover:bg-orange-500 py-3 flex whitespace-no-wrap mb-0 px-3"
                        >{{ item.name }}</a
                      >
                      <nuxt-link
                        v-else
                        class="bg-orange-600 hover:bg-orange-500 py-3 flex whitespace-no-wrap mb-0 px-3"
                        :to="{
                          path: item.url
                        }"
                        >{{ item.name }}</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
                <nuxt-link
                  :to="menu.url"
                  v-else-if="menu.url !== null"
                  class="py-5 flex px-5"
                  >{{ menu.name }}</nuxt-link
                >
                <div v-else>{{ menu.name }}</div>
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
          name: 'Sri Sathya Sai',
          children: [
            {
              url: '/page/life',
              name: 'His Life & Legacy'
            },
            {
              url: '/page/teachings',
              name: 'His Universal Teachings'
            }
          ]
        },
        {
          url: '/page/about',
          name: 'About',
          children: [
            {
              name: 'Sri Sathya Sai International Organisation',
              url: '/page/about'
            },
            { name: 'Service', url: '/wing/service' },
            { name: 'Devotion', url: '/wing/devotion' },
            { name: 'Education', url: '/wing/education' },
            { name: 'Young Adults', url: '/wing/young-adult-forum' },
            { name: 'Ladies Forum', url: '/wing/ladies-forum' },
            {
              name: 'Sri Sathya Sai School',
              url: '/page/sri-sathya-sai-school'
            },
            { name: 'Regions/Sri Sathya Sai Centres', url: '/regions' }
          ]
        },
        {
          url: '/page/resources',
          name: 'Resources',
          children: [
            { name: 'E-Books', url: 'https://www.sathyasai.org/media/ebooks' },
            {
              name: 'Guidelines',
              url: 'https://www.sathyasai.org/about-us/organisation/guidelines'
            },
            {
              name: 'Devotional Songs',
              url: 'https://sairhythms.sathyasai.org/songs'
            },
            {
              name: 'Discourses',
              url: 'https://www.sathyasai.org/discourses-and-writingss'
            }
          ]
        },
        {
          url: '/events',
          name: 'Events & Activities',
          children: [
            { name: 'Upcoming Events', url: '/events' },
            { name: 'Activities & Community Service', url: '/page/about' }
          ]
        },
        {
          url: '/contact',
          name: 'Contact Us'
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
