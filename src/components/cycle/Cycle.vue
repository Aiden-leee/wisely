<template>
  <div class="cycle">
    <div class="cart_header">
      <div class="left">
        <img src="@/assets/img/logo.svg" alt="wisely" />
      </div>
      <div class="right">
        <div class="current_cart" @click="currentViewCart">
          <div class="cart_icon" :class="{ hasItem: isTotalCount }">
            <span class="count">{{ isTotalCount }}</span>
          </div>
          <div class="current_price" :class="{ active: currentCartActive }">
            <span v-if="this.$store.state.total_price !== 0"
              >₩{{ this.$store.state.total_price.toLocaleString() }}</span
            >
          </div>
        </div>
      </div>
      <CartConfirm :currentCartActive.sync="currentCartActive" />
    </div>
    <div class="cycle_content">
      <div class="cycle_title">배송 주기를 선택해주세요</div>
      <div class="cycle_lists">
        <template v-for="(option, idx) in cartOption">
          <CycleItem
            :key="option.id"
            :idx="idx"
            :option="option"
            v-if="option.id !== 1"
          />
        </template>
      </div>
      <div class="cycle_info_bottom">
        <div class="next_step_btn">
          <button @click="handlePicker">다음</button>
        </div>
        <div class="expected">
          <div class="next_date">
            <span>다음 결제 예정일</span>
            <span class="date">{{ nextPay }}</span>
          </div>
          <div class="after_date">
            <span>이후 결제 예정일</span>
            <span class="date">{{ afterPay }}</span>
          </div>
        </div>
      </div>
    </div>
    <Picker :pick-open.sync="pickOpen" />
  </div>
</template>

<script>
import CycleItem from "./CycleItem.vue";
import CartConfirm from "./CartConfirm.vue";
import Picker from "../datepicker/Picker.vue";

const week = new Array(
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일"
);
export default {
  name: "Cycle",
  components: {
    CycleItem,
    CartConfirm,
    Picker,
  },
  data() {
    return {
      currentCartActive: false,
      pickOpen: false,
      cartOption: this.$store.state.cart,
    };
  },
  computed: {
    // 총 개수
    isTotalCount() {
      return this.$store.state.total_count >= 1
        ? this.$store.state.total_count
        : "";
    },
    // 다음 결제일
    nextPay() {
      let result;
      let date = new Date();
      date.setDate(date.getDate() + 1);
      result = `${date.getMonth() + 1}월 ${date.getDate()}일 ${
        week[date.getDay()]
      }`;
      return result;
    },
    // 이후 결제일
    afterPay() {
      let result;
      let date = new Date();
      date.setMonth(date.getMonth() + this.$store.state.currentWeek / 4);
      result = `${date.getMonth() + 1}월 ${date.getDate()}일 ${
        week[date.getDay()]
      }`;
      return result;
    },
  },
  methods: {
    // 현재 카트 아이템 목록 모달창
    currentViewCart() {
      this.$store.state.total_count === 0 ? this.$router.push("/") : "";
      this.currentCartActive = !this.currentCartActive;
    },
    // 달력 모달 열기
    handlePicker() {
      this.pickOpen = true;
    },
  },
};
</script>

<style></style>
