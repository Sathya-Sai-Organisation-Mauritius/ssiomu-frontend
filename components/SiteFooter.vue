<template>
  <div class="footer-details gradient-bg">
    <div class="container mx-auto">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div class="xl:grid xl:gap-8">
          <div
            class="flex flex-col items-center text-center justify-center md:text-left md:items-start md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-8"
          >
            <nuxt-link
              :to="{ name: 'index' }"
              title="Home"
              rel="home"
              class="md:px-10 flex justify-start items-center md:items-start md:justify-start"
            >
              <img
                class="w-32 h-32 md:w-48 md:h-48"
                src="/images/logo.png"
                alt="Home"
              />
            </nuxt-link>

            <div class="mt-12 md:mt-0 md:col-span-2">
              <h4
                class="text-sm leading-5 font-semibold tracking-wider text-gray-100 uppercase"
              >
                Related Sites
              </h4>
              <ul class="mt-4 gap-4 grid md:grid-cols-2">
                <li
                  class="text-base leading-6 text-gray-300 hover:text-white"
                  v-for="menu in footerLinks"
                  :key="menu.url"
                >
                  <a :href="menu.url" v-if="menu.url !== null">{{
                    menu.title
                  }}</a>
                  <div v-else>{{ menu.title }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
        >
          <div class="flex md:order-2">
            <a href="#" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href="http://github.com/Sathya-Sai-Organisation-Mauritius/"
              target="_blank"
              class="ml-6 text-gray-400 hover:text-gray-300"
            >
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p class="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Sathya Sai International Organisation. All rights
            reserved. | Contact Us : s<span></span>si<span></span>om.m<span
            ></span>au<span></span>riti<span></span>us@<span></span>gma<span
            ></span>il<span></span>.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getRegions', 'getWings'])
  },
  data() {
    return {
      footerLinks: [
        {
          title: 'Sri Sathya Sai International Org',
          url: 'https://www.sathyasai.org/'
        },

        {
          title: 'Sri Sathya Sai Humanitarian Relief ',
          url: 'http://sathyasaihumanitarianrelief.org/updates/'
        },

        {
          title: 'Sri Sathya Sai Universe',
          url: 'http://saiuniverse.sathyasai.org/'
        },

        {
          title: 'Sai Cast ',
          url: 'http://www.saicast.org/'
        },

        {
          title: 'Sai Love In Action ',
          url: 'http://www.sailoveinaction.org/about'
        },

        {
          title: 'Radio Sai Global Harmony ',
          url: 'http://media.radiosai.org/www/'
        },

        {
          title: 'Prashanthi Reporter ',
          url: 'http://www.theprasanthireporter.org/'
        },

        {
          title: 'Easwaramma Women’s Welfare Trust ',
          url: 'http://www.ewwt.org.in/'
        },

        {
          title: 'Radio Sai - Sri Sathya Sai Speaks',
          url: 'http://media.radiosai.org/www/ssspeaks/'
        },

        {
          title: 'Sri Sathya Sai Central Trust ',
          url: 'https://sssmt.org.in/pages/index.html'
        },

        {
          title: 'Sri Sathya Sai Sadhana Trust ',
          url: 'http://sssbpt.org/index.html'
        },

        {
          title: 'Sri Sathya Sai Media Centre',
          url: 'https://sssmediacentre.org/#/'
        },

        {
          title: 'Sri Sathya Sai Vidya Vahini ',
          url: 'https://www.srisathyasaividyavahini.org/'
        }
      ]
    }
  }
}
</script>
