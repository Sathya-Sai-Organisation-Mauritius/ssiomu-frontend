<<template>
  <div>
    <div class="py-20 ">
      <div class="container mx-auto">
        <div>
          <h2
            class="font-serif text-4xl font-bold text-black pb-8 text-center md:text-left"
          >
            All regions
          </h2>

          <div class="grid md:grid-cols-2 gap-4 ">
            <RegionsComponentBox
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
import RegionsComponentBox from '~/components/RegionsComponentBox.vue'

export default {
  components: {
    RegionsComponentBox
  },

  data: () => {
    return {
      descriptions: [
        { url: '/LowerPlaineWilhems', number: '1', region: 'Savanne', map: '' },
        { url: '/GrandPort', number: '2', region: 'Grand Port', map: '' },
        { url: '/MokaFlacq', number: '3', region: 'Moka/Flacq', map: '' },
        {
          url: '/UpperPlaineWilhems',
          number: '4',
          region: 'Upper Plaine Wilhems',
          map: ''
        },
        {
          url: '/LowerPlaineWilhems',
          number: '5',
          region: 'Lower Plaine Wilhems',
          map: ''
        },
        { url: '/PortLouis', number: '6', region: 'Port Louis', map: '' },
        { url: '/Pamplemouses', number: '7', region: 'Pamplemouses', map: '' },
        {
          url: '/RiviereDuRempart',
          number: '8',
          region: 'Riviere du rempart',
          map: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
