<template>
  <div class="container mx-auto">
    <Menu/>
    <Footer/>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
     Menu,
     Footer
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
