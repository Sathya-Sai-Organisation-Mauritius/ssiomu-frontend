<<template>
  <div class="event-events-gallery gradient-bg py-8">
    <div class="container mx-auto space-y-4  p-4 md:p-0">
      <h2
        class="font-serif text-center md:text-left text-white text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10"
      >
        Gallery
      </h2>
      <p class="text-white max-w-2xl text-xl leading-7">
        Images of what happened during the event
      </p>

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
          <div
            v-for="(image, index) in images"
            :key="index"
            @click="() => show(index)"
          >
            <img :src="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      index: 0, // default
      images: [
        'https://picsum.photos/seed/1/900/900',
        'https://picsum.photos/seed/2/900/900',
        'https://picsum.photos/seed/3/900/900',
        'https://picsum.photos/seed/4/900/900'
      ]
    }
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
