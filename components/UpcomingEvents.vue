<<template>
  <div>
    <div class="gradient-bg py-20">
      <div class="container mx-auto">
        <div>
          <h2 class="text-3xl font-bold text-white pb-8">
            Upcoming Events
          </h2>

          <div class="grid grid-cols-3 gap-8 text-blue-500">
            <UpcomingEventBox
              v-for="(description, index) in descriptions"
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
