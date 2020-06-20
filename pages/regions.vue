<<template>
  <div>
    <RegionsComponent query="/_/items/region?fields=*.*" />
  </div>
</template>

<script>
import RegionsComponent from '~/components/RegionsComponent.vue'

export default {
  components: {
    RegionsComponent
  }
}
</script>
