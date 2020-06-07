<template>
  <div class="description">
    <div class="views-row bg-white p-8 m-2">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1 font-bold text-3xl text-right leading-none">
          <div class="date">{{ myvalues.date }}</div>
        </div>
        <div class="col-span-3">
          <h3 class=" font-bold">{{ myvalues.title }}</h3>
          <div class="font-light">{{ myvalues.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['myvalues']
}
</script>

<style lang="scss" scoped></style>
