<template>
  <div class="cart">
    <div class="cart_header">
      <img src="~@/assets/img/logo.svg" alt="wisely" />
    </div>
    <div class="cart_content">
      <div class="cart_list">
        <p v-if="getCartList.length === 0">
          장바구니가 비어있습니다<br />상품을 추가해주세요
        </p>
        <transition-group name="slideIn" tag="div" mode="out-in">
          <template v-for="item in getCartList">
            {{ item }}
            <CartItem :item="item" :key="item.id" />
          </template>
        </transition-group>
        <div class="wrap" v-if="getCartList.length !== 0">
          <div class="selected_info">
            <div class="selected_price">
              <div class="delivery_price">
                <span class="delivery_text">배송비</span>
                <span class="delivery_status">무료</span>
              </div>
              <div class="total">
                <span class="total_text">최종 결제 금액</span>
                <span class="total_price"
                  >{{ getTotalPrice.toLocaleString() }}원</span
                >
              </div>
            </div>
            <div class="selected_payment">
              <router-link to="/phase_cycle" tag="button" class="payment"
                >주문하기</router-link
              >
            </div>
            <div class="selected_delivery_info">
              <p>
                <span>1.5만원 이상 무료 배송</span
                ><span>평일 16시 이전 주문 시 당일 출고</span>
              </p>
            </div>
            <div class="selected_title">함께하면 더 현명한 습관</div>
          </div>
        </div>
      </div>
      <div class="items">
        <template v-for="item in getItemList">
          <ItemBox :key="item.id" :item="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ItemBox from "./ItemBox"; // 아이템 목록 컴포넌트
import CartItem from "./CartItem"; // 카트 아이템 컴포넌트
export default {
  name: "cart",
  components: {
    ItemBox,
    CartItem,
  },
  data() {
    return {};
  },

  computed: {
    // 카트 목록
    getCartList() {
      return this.$store.state.cart;
    },
    // 기본 아이템 목록
    getItemList() {
      return this.$store.state.items;
    },
    // 총 금액
    getTotalPrice() {
      let price = 0;
      this.$store.state.cart.forEach((item) => {
        price += item.price * item.quantity;
      });
      this.$store.commit("getTotalPrice", price);
      return price;
    },
    // 총 개수
    getTotalCount() {
      let count = 0;
      this.$store.state.cart.forEach((item) => {
        count += item.quantity;
      });
      this.$store.commit("getTotalCount");
      return count;
    },
  },
};
</script>

<style scoped></style>
