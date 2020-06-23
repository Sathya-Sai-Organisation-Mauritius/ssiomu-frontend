<template>
  <div v-if="model.hasOwnProperty('error')" class="container my-4 mx-auto">
    <div class="bg-yellow-300 p-4 text-center text-yellow-800">
      {{ model.error.message }}
    </div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>

<style lang="scss" scoped></style>
