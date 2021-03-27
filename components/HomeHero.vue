<template>
  <div class="front-landing">
    <div
      class="container mx-auto text-center lg:text-left py-20 flex flex-col justify-center text-blue-700 space-y-5"
    >
      <h1 class="text-4xl md:text-5xl font-black leading-tight font-serif">
        Sri Sathya Sai
        <br />International <br />Organisation Mauritius
      </h1>
      <p class="text-xl lg:w-1/2">
        The main objective of the Sathya Sai Organisation is to help humanity
        recognize its inherent divinity. It is established to translate the
        principles of love and nonviolence into daily practice.
      </p>
      <div class="flex justify-center md:justify-start space-x-5">
        <nuxt-link
          :to="{ name: 'page-slug', params: { slug: 'about' } }"
          class="p-2 text-sm md:text-md w-40 hover:bg-orange-600 lg:w-48 text-center rounded bg-orange-500 cursor-pointer text-white block"
          >Learn more</nuxt-link
        >
        <nuxt-link
          :to="{ name: 'events' }"
          class="p-2 text-sm md:text-md w-40 hover:bg-orange-600 lg:w-48 text-center rounded bg-orange-500 cursor-pointer text-white block"
          >Events</nuxt-link
        >
        <nuxt-link
          :to="{ name: 'publications' }"
          class="p-2 text-sm md:text-md w-40 hover:bg-orange-600 lg:w-48 text-center rounded bg-orange-500 cursor-pointer text-white block"
          >Publications</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@screen md {
  .front-landing {
    background-image: url('/images/bg-world.png');
    background-size: auto 200%;
    background-position: right bottom;
    background-repeat: no-repeat;
  }
}

h1,
p {
  text-shadow: 1px 1px 0px #fff, -1px -1px 0px #fff, 2px 2px 0px #fff,
    -2px -2px 0px #fff, 3px 3px 0px #fff, -3px -3px 0px #fff, 4px 4px 0px #fff,
    -4px -4px 0px #fff, 5px 5px 0px #fff, -5px -5px 0px #fff;
}

@screen lg {
  .front-landing {
    background-image: url('/images/intro-01.svg');
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;
  }
}
</style>
