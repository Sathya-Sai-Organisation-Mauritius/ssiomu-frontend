<<template>
  <div>
    <AllPublications
      :textalign="'text-center'"
      query="/_/items/publication?fields=*.*,photo.*,wing.name,wing.slug"
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
