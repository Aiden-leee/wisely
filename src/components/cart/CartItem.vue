<template>
  <div class="selected_item_box" :key="item.id">
    <div class="selected_item item_img">
      <img :src="item.img" :alt="item.title" />
    </div>

    <div class="selected_item item_des">
      <div class="wrap">
        <h3 class="item_des_title">{{ item.title }}</h3>
        <span class="item_des_info"
          ><span
            class="item_color"
            :class="[selectShaveColorClass]"
            v-if="item.id === 1"
            >{{ selectShaveColorName }}</span
          >{{ item.des }}</span
        >
        <div class="item_des_price">
          <span class="price">{{ item.price.toLocaleString() }}원</span>
        </div>
      </div>
      <div class="selected_quantity">
        <div class="cancel">
          <img
            @click="removeItem(item)"
            src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallXmark.svg"
            alt="x"
          />
        </div>
        <div class="quantity_wrap">
          <span class="btn minus" @click="quantityDecrement(item)"
            ><span class="minus_icon"></span
          ></span>
          <span class="quantity">{{ quantityValue }}</span>
          <span class="btn plus" @click="quantityIncrement(item)"
            ><span class="plus_icon"></span
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantityValue: 1,
    };
  },
  created() {
    if (this.item) {
      this.quantityValue = this.item.quantity;
    } else {
      this.quantityValue = 1;
    }
  },
  computed: {
    //면도기 색상 이름
    selectShaveColorName() {
      let colorName = ["미드나이트 네이비", "사파이어 블루", "슬레이트 그레이"];
      return colorName[this.$store.state.shave_color - 1];
    },
    // 면도기 색상 클래스
    selectShaveColorClass() {
      let colorClass = ["navy", "blue", "gray"];
      return colorClass[this.$store.state.shave_color - 1];
    },
  },
  methods: {
    // 카트 아이템 삭제
    removeItem(item) {
      this.$store.state.cart.forEach((item) => {
        item.quantity = 1;
      });
      this.$store.commit("revertItem", item);
      this.$store.commit("removeCart", item);
      this.$store.commit("totalCount");
      if (this.$store.state.cart.length < 1) {
        this.$store.commit("totalPrice", 0);
      }
    },
    // 수량 감소
    quantityDecrement(item) {
      if (this.quantityValue <= 1) {
        return;
      }
      this.quantityValue--;
      this.$store.commit("minusQuantity", [item, this.quantityValue]);
      this.$store.commit("totalCount");
    },
    // 수량 증가
    quantityIncrement(item) {
      this.quantityValue++;
      this.$store.commit("plusQuantity", [item, this.quantityValue]);
      this.$store.commit("totalCount");
    },
  },
};
</script>

<style></style>
