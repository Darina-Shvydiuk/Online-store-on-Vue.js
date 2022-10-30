<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <vCatalogItemVue />
  </div>
</template>

<script>
import vCatalogItemVue from "./v-catalog.item.vue";

export default {
  name: "v-catalog",
  components: {
    vCatalogItemVue,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.v-main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
