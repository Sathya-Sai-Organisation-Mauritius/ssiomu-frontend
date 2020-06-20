<<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">
      Error while fetching posts: {{ $fetchState.error.message }}
    </p>
    <div class="announcement-detailsg " v-else>
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
            class="text-center text-sm md:text-2xl lg:text-3xl flex-grow leading-none "
          >
            {{ news.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['query'],
  data() {
    return {
      news: []
    }
  },
  async fetch() {
    let url = `${this.query}`
    const result = await this.$http.$get(url)
    this.news = result.data[0]
  }
}
</script>

<style lang="scss" scoped></style>
