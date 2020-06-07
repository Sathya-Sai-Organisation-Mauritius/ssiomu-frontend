<<template>
  <div class="announcement-detailsg bg-gray-100">
    <div
      class="container mx-auto py-10 flex flex-col justify-center text-blue-500 "
    >
      <div class="text-center pb-10">
        <h2
          class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          Announcement
        </h2>
        <p
          class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>

      <div class="lg:flex mb-4">
        <div class=" w-2/2 lg:w-1/2  lg:mr-4">
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
              <AnnouncementBox
                v-for="(announcementdescription,
                index) in announcementdescriptions"
                :announcmentvalues="announcementdescription"
              />
            </ul>
          </div>
        </div>
        <div
          class="w-0 lg:w-1/2 bg--200 hidden -ml-2 lg:block lg:overflow-hidden "
        >
          <img class="h-full w-full " src="/images/announcement.png" />
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
  data: () => {
    return {
      announcementdescriptions: [
        {
          title: 'Announcement 1',
          description:
            'Announcement: Major SSIO Events Scheduled for 2020 are Postponed to 2021',
          region: 'Region 6',
          time: 'January 7, 2020'
        },
        {
          title: 'Announcement 2',
          description:
            '30 days of global sadhana from April 1-30 — an offering of love and gratitude',
          region: 'Region 3',
          time: 'January 7, 2020'
        },
        {
          title: 'Announcement 3',
          description: 'Latest Advisory from the SSIO on Coronavirus',
          region: 'Region 5',
          time: ',January 7, 2020'
        },
        {
          title: 'Announcement 1',
          description:
            'Announcement: Major SSIO Events Scheduled for 2020 are Postponed to 2021',
          region: 'Region 6',
          time: 'January 7, 2020'
        },
        {
          title: 'Announcement 2',
          description:
            '30 days of global sadhana from April 1-30 — an offering of love and gratitude',
          region: 'Region 3',
          time: 'January 7, 2020'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
