<<template>
  <div v-if="news.length > 0">
    <div class="announcement-detailsg ">
      <div
        class="container mx-auto px-4 md:px-0 py-10 flex flex-col justify-center "
      >
        <div class="md:flex justify-between bg-red-100 items-center">
          <div
            class=" bg-red-700 text-center font-bold text-white p-4 text-xs md:text-xl lg:text-2xl leading-none"
          >
            BREAKING NEWS
          </div>
          <div
            class="text-center p-2 text-md md:text-2xl lg:text-3xl flex-grow
             md:leading-none "
          >
            {{ news[0].title }}
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
      news: this.information
    }
  }
}
</script>

<style lang="scss" scoped></style>
