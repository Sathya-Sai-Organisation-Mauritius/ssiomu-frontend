<<template>
  <div class="flex flex-col shadow-lg overflow-hidden mb-4">
    <div>
      <div class="flex-shrink-0">
        <img
          class="h-48 w-full object-cover"
          v-if="pubvalues.photo"
          :src="pubvalues.photo.data.full_url"
          alt=""
        />
        <img v-else src="https://picsum.photos/400/200" />
      </div>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm leading-5 font-medium text-blue-600">
            <a
              :href="'/wing/' + pubvalues.id"
              class="hover:underline"
              v-if="pubvalues.wing"
            >
              {{ pubvalues.wing.name }}
            </a>
          </p>
          <a :href="'/publication/' + pubvalues.id" class="">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ pubvalues.title }}
            </h3>
          </a>
        </div>

        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div
              class="h-10 w-10 rounded-full text-center font-bold flex items-center justify-center bg-red-300 text-white text-2xl"
            >
              {{ pubvalues.region.number }}
            </div>
          </div>

          <div class="ml-3">
            <p class="text-sm leading-5 font-medium text-gray-900">
              <a href="#" class="hover:underline" v-if="pubvalues.region">
                <span>Region</span> {{ pubvalues.region.number }}
              </a>
            </p>
            <div class="flex text-sm leading-5 text-gray-600">
              <time datetime="2020-03-16">
                {{ formatDate(pubvalues.date) }}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pubvalues'],

  methods: {
    formatDate(param) {
      let temporaryDate = new Date(param)
      let month = temporaryDate.toLocaleString('default', { month: 'short' })
      let day = temporaryDate.toLocaleString('default', { day: 'numeric' })
      let year = temporaryDate.toLocaleString('default', { year: 'numeric' })

      let fullDate = `${month} ${day}, ${year}`
      return fullDate
    }
  }
}
</script>

<style lang="scss" scoped></style>
