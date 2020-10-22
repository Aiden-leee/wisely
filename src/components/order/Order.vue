<template>
  <div class="order">
    <div class="cart_header">
      <img src="~@/assets/img/logo.svg" alt="wisely" />
    </div>
    <div class="wrap">
      <div class="preparing">
        <div class="text">배송준비중</div>
        <div class="date">{{ deilveryDay }}</div>
      </div>
      <div class="order_info">
        <h3>주문상품정보</h3>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    deilveryDay() {
      let result;
      if (this.$store.state.deliveryDate) {
        result = `${this.$store.state.deliveryDate.month}월 ${this.$store.state.deliveryDate.day}일`;
      }
      return result;
    },
    selectShaveColorName() {
      let colorName = ["미드나이트 네이비", "사파이어 블루", "슬레이트 그레이"];
      return colorName[this.$store.state.shave_color - 1];
    },
    selectShaveColorClass() {
      let colorClass = ["navy", "blue", "gray"];
      return colorClass[this.$store.state.shave_color - 1];
    },
    getTotalPrice() {
      return this.$store.getters.total_price;
    },
  },
};
</script>

<style></style>
