<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item-image"
      :src="require('../assets/images/' + product_data.image)"
      alt="img"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }} UAH</p>
    <button class="v-catalog-item__add_to_card_btn" @click="sendDataToParent">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    sendDataToParent() {
      this.$emit("sendDataToParent", this.product_data.article);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}

.v-catalog-item-image {
  width: 100px;
}
</style>
