<template>
  <div class="container mx-auto">
    <div class="prose">

    <h1>Text</h1>
    <h2>Text</h2>
    <h3>Text</h3>
    <p>Text</p>
    <blockquote>Text</blockquote>
    <strong>Text</strong>
    <ol>Text</ol>
    <li>Text</li>
    <ul>Text</ul>
    <h4>Text</h4>
    <h5>Text</h5>
    <h6>Text</h6>
    </div>
    <h3 class="p-3 text-center">Vue HTTP GET Requests with Fetch</h3>
    <GetRequest />
  </div> 
</template>

<script>
import GetRequest from '~/components/GetRequest.vue'
export default {
  components: {
    GetRequest
  }
}
</script>

<style></style>
