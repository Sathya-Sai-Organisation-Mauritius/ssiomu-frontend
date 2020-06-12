<<template>
  <div class="Publications" :class="color">
    <div
      class="container mx-auto relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div :class="textalign">
          <h2
            class="font-serif text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Publications
          </h2>
          <p class="mt-3 mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>

        <div class="mt-12 grid gap-5 mx-auto lg:grid-cols-3">
          <PublicationBox
            v-for="(pubDescription, index) in pubDescriptions"
            :key="index"
            :pubvalues="pubDescription"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicationBox from '../components/PublicationBox'

export default {
  components: {
    PublicationBox
  },
  props: ['subtitle', 'color', 'textalign'],
  data: () => {
    return {
      pubDescriptions: [
        {
          url:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          purpose: 'Service',
          titleUrl: '/savannePublications',
          title: 'Boost your conversion rate ',
          number: '6',
          region: 'Region 6',
          time: 'Mar 16, 2020'
        },

        {
          url:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          titleUrl: '/savannePublications',
          purpose: 'Education',
          title: 'How to use search engine optimization to drive sales',
          number: '3',
          region: 'Region 3',
          time: 'Mar 16, 2020'
        },

        {
          url:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          titleUrl: '/savannePublications',
          purpose: 'Youth Wing',
          title: 'Improve your customer experience',
          number: '1',
          region: 'Region 1',
          time: 'Mar 16, 2020'
        },
        {
          url:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          purpose: 'Service',
          titleUrl: '/savannePublications',
          title: 'Boost your conversion rate ',
          number: '6',
          region: 'Region 6',
          time: 'Mar 16, 2020'
        },

        {
          url:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          titleUrl: '/savannePublications',
          purpose: 'Education',
          title: 'How to use search engine optimization to drive sales',
          number: '3',
          region: 'Region 3',
          time: 'Mar 16, 2020'
        },
        {
          url:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          purpose: 'Service',
          titleUrl: '/savannePublications',
          title: 'Boost your conversion rate ',
          number: '6',
          region: 'Region 6',
          time: 'Mar 16, 2020'
        },

        {
          url:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          titleUrl: '/savannePublications',
          purpose: 'Education',
          title: 'How to use search engine optimization to drive sales',
          number: '3',
          region: 'Region 3',
          time: 'Mar 16, 2020'
        },
        {
          url:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          purpose: 'Service',
          titleUrl: '/savannePublications',
          title: 'Boost your conversion rate ',
          number: '6',
          region: 'Region 6',
          time: 'Mar 16, 2020'
        },

        {
          url:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          purpose: 'Education',
          title: 'How to use search engine optimization to drive sales',
          number: '3',
          region: 'Region 3',
          time: 'Mar 16, 2020'
        },
        {
          url:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          purpose: 'Service',
          title: 'Boost your conversion rate ',
          number: '6',
          region: 'Region 6',
          time: 'Mar 16, 2020'
        },

        {
          url:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          purpose: 'Education',
          title: 'How to use search engine optimization to drive sales',
          number: '3',
          region: 'Region 3',
          time: 'Mar 16, 2020'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
