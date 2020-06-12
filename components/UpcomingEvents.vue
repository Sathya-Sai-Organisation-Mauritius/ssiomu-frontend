<<template>
  <div>
    <div class="py-20 gradient-bg">
      <div class="container mx-auto">
        <div>
          <h2
            class="font-serif text-4xl font-bold text-white pb-8"
            :class="textalign"
          >
            Upcoming Events
          </h2>

          <div class="grid grid-cols-3 gap-8 text-blue-600">
            <UpcomingEventBox
              v-for="(description, index) in descriptions"
              :key="index"
              :myvalues="description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingEventBox from '../components/UpcomingEventBox'

export default {
  components: {
    UpcomingEventBox
  },
  props: ['color', 'textalign', 'textcolor'],
  data: () => {
    return {
      descriptions: [
        { date: '18 May', title: 'TITLE', content: 'REGION CONTENT' },
        { date: '19 May', title: 'TITLE', content: 'REGION CONTENT' },
        { date: '18 May', title: 'TITLE', content: 'REGION CONTENT' },
        { date: '18 May', title: 'TITLE', content: 'REGION CONTENT' },
        { date: '18 May', title: 'TITLE', content: 'REGION CONTENT' },
        { date: '18 May', title: 'TITLE', content: 'REGION CONTENT' }
      ]
    }
  }
}
</script>

<style></style>
