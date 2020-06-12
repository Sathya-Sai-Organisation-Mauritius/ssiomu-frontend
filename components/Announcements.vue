<<template>
  <div class="announcement-details bg-orange-100 ">
    <div
      class="container mx-auto py-10 flex flex-col justify-center text-blue-500 "
    >
      <div class="text-center pb-10">
        <h2
          class="font-serif text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          Announcements
        </h2>
      </div>

      <div class="lg:flex mb-4">
        <div class=" w-2/2 lg:w-1/2  lg:mr-4">
          <div
            class="bg-white shadow overflow-hidden sm:rounded-md border-t-8 border-orange-500"
          >
            <ul>
              <AnnouncementBox
                v-for="(announcementdescription,
                index) in announcementdescriptions"
                :key="index"
                :announcmentvalues="announcementdescription"
              />
            </ul>
          </div>
        </div>
        <div class="w-0 lg:w-1/2 hidden -ml-2 lg:block lg:overflow-hidden ">
          <img
            class="h-full w-full overflow-hidden"
            src="/images/flowers2.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnnouncementBox from '../components/AnnouncementBox'
export default {
  components: {
    AnnouncementBox
  },

  props: ['subtitle', 'color'],
  data: () => {
    return {
      announcementdescriptions: [
        {
          title: 'Announcement 1',
          region: 'Region 6',
          time: 'January 7, 2020'
        },
        {
          title: 'Announcement 2',
          region: 'Region 3',
          time: 'January 7, 2020'
        },
        {
          title: 'Announcement 3',

          region: 'Region 5',
          time: ',January 7, 2020'
        },
        {
          title: 'Announcement 1',
          region: 'Region 6',
          time: 'January 7, 2020'
        },
        {
          title: 'Announcement 2',
          region: 'Region 3',
          time: 'January 7, 2020'
        },
        {
          title: 'Announcement 2',
          region: 'Region 3',
          time: 'January 7, 2020'
        }
      ]
    }
  }
}
</script>

<style></style>
