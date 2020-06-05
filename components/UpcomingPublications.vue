<<template>
  <div class="Publications">
    <div
      class="container mx-auto relative bg-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Publications
          </h2>
          <p
            class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>

        <div class="mt-12 grid gap-5 mx-auto lg:grid-cols-3">
          <PublicationBox
            v-for="(pubDescription, index) in pubDescriptions"
            :pubvalues="pubDescription"
          />
          <!-- <div class="flex flex-col shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-blue-600">
                  <a href="#" class="hover:underline">
                    Education
                  </a>
                </p>
                <a href="#" class="">
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                  >
                    Boost your conversion rate
                  </h3>
                </a>
              </div>
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div
                    class="h-10 w-10 rounded-full text-center font-bold flex items-center justify-center bg-red-300 text-white text-2xl"
                  >
                    6
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Region 6
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-600">
                    <time datetime="2020-03-16">
                      Mar 16, 2020
                    </time>
                    <span class="mx-1">
                      &middot;
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-blue-600">
                  <a href="#" class="hover:underline">
                    Service
                  </a>
                </p>
                <a href="#" class="">
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                  >
                    How to use search engine optimization to drive sales
                  </h3>
                </a>
              </div>
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div
                    class="h-10 w-10 rounded-full text-center font-bold flex items-center justify-center bg-red-300 text-white text-2xl"
                  >
                    3
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Region 3
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-600">
                    <time datetime="2020-03-16">
                      Mar 16, 2020
                    </time>
                    <span class="mx-1">
                      &middot;
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-blue-600">
                  <a href="#" class="hover:underline">Youth Wing</a>
                </p>
                <a href="#" class="">
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                  >
                    Improve your customer experience
                  </h3>
                </a>
              </div>
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div
                    class="h-10 w-10 rounded-full text-center font-bold flex items-center justify-center bg-red-300 text-white text-2xl"
                  >
                    1
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Region 1
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-600">
                    <time datetime="2020-03-16">
                      Mar 16, 2020
                    </time>
                    <span class="mx-1">
                      &middot;
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
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

  data: () => {
    return {
      pubDescriptions: [
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
        },

        {
          url:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          purpose: 'Youth Wing',
          title: 'Improve your customer experience',
          number: '1',
          region: 'Region 1',
          time: 'Mar 16, 2020'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
