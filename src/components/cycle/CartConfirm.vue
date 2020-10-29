<template>
  <Fragment>
    <div class="cart_view" :class="[currentCartActive ? 'open' : 'close']">
      <div class="cart_confirm ">
        <div class="list" v-for="item in cart" :key="item.id">
          <div class="item item_img">
            <img :src="item.img" alt="" />
          </div>
          <div class="item item_des">
            <div class="wrap">
              <h3 class="item_des_title">
                {{ item.title }} -
                <span class="color">{{ item.quantity }}개</span>
              </h3>
              <span class="item_des_info"
                ><span
                  class="item_color"
                  :class="[selectShaveColorClass]"
                  v-if="item.id === 1"
                  >{{ selectShaveColorName }}</span
                >{{ item.des }}</span
              >
              <div class="item_des_price">
                <span class="cycle">{{
                  item.option ? item.option.name : "이번만 구매"
                }}</span>
                <span class="price">{{ item.price.toLocaleString() }}원</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="total_view">
        <div class="info">
          <span class="left">상품금액</span>
          <span class="right">{{ getTotalPrice.toLocaleString() }}원</span>
        </div>
        <div class="info">
          <span class="left">배송비</span>
          <span class="right">무료</span>
        </div>
        <div class="info t_expected">
          <span class="left">총 결제 예정 금액</span>
          <span class="right">{{ getTotalPrice.toLocaleString() }}원</span>
        </div>
      </div>
    </div>
    <div
      class="overlay_bg confirm"
      :class="[currentCartActive ? 'open' : 'close']"
      @click="closeCartView"
    ></div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  name: "CartConfirm",
  props: {
    currentCartActive: {
      type: Boolean,
    },
  },
  components: {
    Fragment,
  },
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    // 총 개수
    getTotalPrice() {
      return this.$store.state.totalPrice;
    },
    // 면도기 색상 이름
    selectShaveColorName() {
      let colorName = ["미드나이트 네이비", "사파이어 블루", "슬레이트 그레이"];
      return colorName[this.$store.state.shaveColor - 1];
    },
    // 면도기 색상 클래스
    selectShaveColorClass() {
      let colorClass = ["navy", "blue", "gray"];
      return colorClass[this.$store.state.shaveColor - 1];
    },
  },
  methods: {
    closeCartView() {
      this.$emit("update:currentCartActive", false);
    },
  },
};
</script>

<style></style>
