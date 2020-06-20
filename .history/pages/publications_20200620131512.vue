<<template>
  <div>
    <AllPublications
      :textalign="'text-center'"
      fetchURL="`/_/items/publication?fields=*,photo.*`"
    />
  </div>
</template>

<script>
import FeaturedPublications from '~/components/FeaturedPublications.vue'
import AllPublications from '~/components/AllPublications.vue'

export default {
  components: {
    AllPublications,
    FeaturedPublications
  }
}
</script>

<style></style>
