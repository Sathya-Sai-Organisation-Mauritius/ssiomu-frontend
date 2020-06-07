<<template>
  <div class="bg-gray-200">
    <div class="container mx-auto relative pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div class="text-center pb-12">
        <h2
          class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          Past events
        </h2>
        <p
          v-if="subtitle"
          class="mt-3 max-w-2xl text-xl leading-7 text-gray-700 sm:mt-4"
        >
          {{ subtitle }}
        </p>
        <!-- <p
          class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-700 sm:mt-4"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p> -->
      </div>
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul>
          <PastEventBox
            v-for="(pasteventdescription, index) in pasteventdescriptions"
            :pasteventvalues="pasteventdescription"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PastEventBox from '../components/PastEventBox'
export default {
  components: {
    PastEventBox
  },
  data: () => {
    return {
      pasteventdescriptions: [
        {
          eventname: 'Event Name',
          wingname: 'Wing Name',
          center: 'Devotional Group / Center',
          region: 'Region 6',
          time: 'January 7, 2020'
        },
        {
          eventname: 'Event Name',
          wingname: 'Wing Name',
          center: 'Devotional Group / Center',
          region: 'Region 3',
          time: 'January 7, 2020'
        },
        {
          eventname: 'Event Name',
          wingname: 'Wing Name',
          center: 'Devotional Group / Center',
          region: 'Region 5',
          time: 'January 7, 2020'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
