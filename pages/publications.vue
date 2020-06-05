<<template>
  <div>
    <SiteHeader />
    <div class="container mx-auto">
      <div class="publication-details space-y-12 py-10">
        <div
          class="publication-details grid gap-1 grid-cols-3 space-y-12 py-10 border-b border-gray-20"
        >
          <div
            class="publication-title font-bold flex col-span-2 space-x-2 items-center"
          >
            <h1 class="text-4xl">
              Publication Sai Newsletter -Echoes from Region 1 savanne(Vol 4 ISS
              1) - Savanne
            </h1>
          </div>
          <div class="relative col-span-1" style="margin-top: 0;">
            <div
              class="absolute text-2xl top-0 right-0 text-gray-700 bg-black-100 border-2 border-gray-400 rounded-full p-3 px-10 font-black"
            >
              Region 5
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="publication-details space-y-12 pb-10">
        <div class="publication-description">
          <div class="description-body space-y-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus asperiores earum enim, impedit ipsum iusto odit quaerat
              quas! Aliquam aut cupiditate dolor enim facilis impedit labore
              nihil, nisi nulla voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus asperiores earum enim, impedit ipsum iusto odit quaerat
              quas! Aliquam aut cupiditate dolor enim facilis impedit labore
              nihil, nisi nulla voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus asperiores earum enim, impedit ipsum iusto odit quaerat
              quas! Aliquam aut cupiditate dolor enim facilis impedit labore
              nihil, nisi nulla voluptatum.
            </p>
          </div>
        </div>

        <div>
          <div>
            Wing: Devotion
          </div>

          <div>
            Region: Savanne
          </div>

          <div>
            Attachment: PDF icon Sai Newletter - March 2016 LD.pdf
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="scss" scoped></style>
