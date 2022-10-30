<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <ul class="v-catalog-list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @sendDataToParent="showChildArticleInConsole"
      />
    </ul>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog.item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    showChildArticleInConsole(data) {
      console.log(data);
    },
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style>
/* .v-catalog {
} */

.v-catalog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
