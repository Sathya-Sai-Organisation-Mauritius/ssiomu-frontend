<template>
  <div class="event-events-gallery py-8">
    <div class="container mx-auto space-y-4 p-4 md:p-0">
      <!-- all props & events -->
      <client-only>
        <vue-easy-lightbox
          :visible="visible"
          :index="index"
          :imgs="images"
          @hide="visible = false"
          @on-prev-click="handlePrevClick"
          @on-next-click="handleNextClick"
        />
      </client-only>

      <div class="text-white">
        <div class="grid grid-cols-4 gap-3">
          <div v-for="(image, index) in images" :key="index" @click="() => show(index)">
            <img :src="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['information'],
  data() {
    return {
      visible: false,
      index: 0, // default
      images: []
    }
  },
  mounted() {
    this.images = this.information.map(item => {
      return item.directus_files_id.data.full_url
    })
  },
  methods: {
    show(index) {
      this.index = index
      this.visible = true
    },
    handlePrevClick(oldIndex, newIndex) {
      console.log('when next btn click ----')
      console.log('oldIndex of imgs:', oldIndex)
      console.log('newIndex of imgs:', newIndex)
    },
    handleNextClick(oldIndex, newIndex) {
      console.log('when next btn click ----')
      console.log('oldIndex of imgs:', oldIndex)
      console.log('newIndex of imgs:', newIndex)
    }
  }
}
</script>

<style lang="scss" scoped></style>
