<template>
  <div class="item_box" :key="item.id" @click="addCartItem(item)">
    <div class="item item_img">
      <img :src="item.img" :alt="item.title" />
    </div>

    <div class="item item_des" :key="item.id">
      <div class="wrap">
        <h3 class="item_des_title">{{ item.title }}</h3>
        <span class="item_des_info">{{ item.des }}</span>
        <div class="item_des_price">
          <span class="price">{{ item.price.toLocaleString() }}원</span
          ><span class="info">무료배송</span>
        </div>
      </div>
      <div class="add">
        <img
          src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/plusInCircle.svg"
          alt="add"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemBox",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    addCartItem(item) {
      if (!item.isModal) {
        this.$store.commit("addCart", item);
        this.$store.commit("updateItems", item);
        this.$store.commit("totalCount");
      } else {
        this.$store.commit("shave_modal", [true]);
      }
    },
  },
};
</script>

<style></style>
