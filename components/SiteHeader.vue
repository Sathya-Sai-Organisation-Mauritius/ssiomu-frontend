<template>
  <header role="banner">
    <div class="container mx-auto">
      <div>
        <nav role="navigation">
          <ul class="flex justify-end text-blue-500 text-sm">
            <li class="p-2">
              <a href="">Log in</a>
            </li>
            <li class="p-2">Mauritius / Zone 9A</li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="main-menu-wrapper relative z-10 ">
      <div class="container flex items-center mx-auto">
        <div>
          <div id="block-tailwindcss-branding">
            <div class="flex items-center">
              <a href="/" title="Home" rel="home" class="site-logo mr-2">
                <img src="/images/logo.png" alt="Home" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <nav role="navigation">
            <ul class=" flex ml-4">
              <a href="">
                <li class="py-5 px-4   hover:bg-orange-600 hover ">
                  Home
                </li>
              </a>

              <a href="/publicationsPage">
                <li class="py-5 px-4   hover:bg-orange-600 hover">
                  About
                </li>
              </a>

              <a href="/publicationsPage">
                <li class="py-5 px-4   hover:bg-orange-600 hover">
                  Publications
                </li>
              </a>

              <li class=" relative py-5 hover:bg-orange-500 hover">
                <div class="dropdown ">
                  <a
                    href="/regions"
                    class="  px-4 rounded inline-flex items-center"
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
                  </a>
                  <ul
                    class="dropdown-menu absolute block left-0 hidden block text-white-700 pt-3 shadow-xl "
                  >
                    <li class="">
                      <a
                        class="rounded-t bg-orange-600 hover:bg-orange-500 py-3 px-4 block whitespace-no-wrap"
                        href="/LowerPlaineWilhems"
                        style="margin-bottom:0px;"
                        >Savanne</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >Grand Port</a
                      >
                    </li>
                    <li class="">
                      <a
                        class=" bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >Moka/Flacq</a
                      >
                    </li>
                    <li class="">
                      <a
                        class=" bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >Upper Plaine Wilhems</a
                      >
                    </li>
                    <li class="">
                      <a
                        class=" bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="/LowerPlaineWilhems"
                        >Lower Plaine Wilhems</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >Port Louis</a
                      >
                    </li>
                    <li class="">
                      <a
                        class=" bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >Pamplemouses</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="rounded-b bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >Riviere du rempart</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class=" relative py-5 hover:bg-orange-500 hover">
                <div class="dropdown ">
                  <a
                    href="/wings"
                    class="  px-4 rounded inline-flex items-center"
                  >
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
                  </a>
                  <ul
                    class="dropdown-menu absolute left-0 hidden block text-white-700 pt-3 shadow-xl"
                  >
                    <li class="">
                      <a
                        class="rounded-t bg-orange-600 hover:bg-orange-500 py-3 px-4 block whitespace-no-wrap"
                        href="#"
                        style="margin-bottom:0px;"
                        >Devotions</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >Educations(SSE)</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="rounded-b bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        href="#"
                        style="margin-bottom:0px;"
                        >Services</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <a href="/events" title="" class="is-active">
                <li class="py-5 px-4   hover:bg-orange-600 hover">
                  Events
                </li>
              </a>

              <li class=" relative py-5 hover:bg-orange-500 hover">
                <div class="dropdown ">
                  <a href="/" class="  px-4 rounded inline-flex items-center">
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
                  </a>
                  <ul
                    class="dropdown-menu absolute left-0 hidden block text-white-700 pt-3 shadow-xl "
                  >
                    <li class="">
                      <a
                        class="rounded-t bg-orange-600 hover:bg-orange-500 py-3 px-4 block whitespace-no-wrap"
                        href="#"
                        style="margin-bottom:0px;"
                        >Sai shop</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >Guidelines</a
                      >
                    </li>
                    <li class="">
                      <a
                        class=" bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >Links</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        style="margin-bottom:0px;"
                        href="#"
                        >PWS resources</a
                      >
                    </li>
                    <li class="">
                      <a
                        class="rounded-b bg-orange-600 hover:bg-orange-500 py-3  px-4 block whitespace-no-wrap"
                        href="#"
                        style="margin-bottom:0px;"
                        >Pre World Conference Videos</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <a href="/" title="" class="is-active">
                <li class="py-5 px-4   hover:bg-orange-600 hover">
                  Contact Us
                </li>
              </a>

              <li class="py-5 px-4   hover:bg-orange-600 hover">
                <a href="/test" title="" class="is-active">GET REQUEST</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
