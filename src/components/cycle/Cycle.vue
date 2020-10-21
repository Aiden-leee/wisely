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
              >₩{{ this.$store.state.total_price }}</span
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
          <button>다음</button>
        </div>
        <div class="expected">
          <div class="next_date">
            <span>다음 결제 예정일</span>
            <span class="date">12월 31일 월요일</span>
          </div>
          <div class="after_date">
            <span>이후 결제 예정일</span>
            <span class="date">3월 31일 수요일</span>
          </div>
        </div>
      </div>
    </div>
    <Picker />
  </div>
</template>

<script>
import CycleItem from "./CycleItem.vue";
import CartConfirm from "./CartConfirm.vue";
import Picker from "../datepicker/Picker.vue";
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
      cartOption: this.$store.state.cart,
    };
  },
  created() {
    // this.$store.commit("initOption")
  },
  computed: {
    isTotalCount() {
      return this.$store.state.total_count >= 1
        ? this.$store.state.total_count
        : "";
    },
  },
  methods: {
    currentViewCart() {
      this.$store.state.total_count === 0 ? this.$router.push("/") : "";
      this.currentCartActive = !this.currentCartActive;
    },
  },
};
</script>

<style></style>
