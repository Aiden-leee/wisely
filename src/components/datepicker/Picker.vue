<template>
  <Fragment>
    <div class="picker" :class="[pickOpen ? 'open' : 'close']">
      <h3>결제일을 설정해주세요</h3>
      <Datepicker
        :language="ko"
        :inline="true"
        @selected="getDay"
        :value="payday"
        :disabled-dates="disabledDates"
        calendar-class="date_pick"
        :minimumView="'day'"
        :maximumView="'day'"
        v-model="payday"
      ></Datepicker>
      <div class="payment_add">
        <router-link
          v-html="getPayDate"
          tag="button"
          class="payment"
          :class="[!on ? 'disabled' : '']"
          to="/order"
        ></router-link>
      </div>
    </div>
    <div
      class="overlay_bg date"
      @click="closeOverlay"
      :class="[pickOpen ? 'open' : 'close']"
    ></div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Datepicker from "vuejs-datepicker";
import { ko } from "vuejs-datepicker/dist/locale";
export default {
  components: {
    Fragment,
    Datepicker,
  },
  props: {
    pickOpen: {
      type: Boolean,
    },
  },
  data() {
    return {
      payday: new Date(),
      ko: ko,
      disabledDates: {},
      on: false,
      paymentDate: null,
    };
  },
  created() {
    let getDate = new Date();
    getDate.setMonth(getDate.getMonth() + 6);
    this.disabledDates.to = new Date();
    this.disabledDates.from = getDate;
  },
  computed: {
    // 선택 날짜 출력
    getPayDate() {
      let result;
      if (this.paymentDate) {
        result = `<span>${this.paymentDate.month}</span>월<span>${this.paymentDate.day}</span>일에 결제하기`;
      } else {
        result = "확인";
      }
      return result;
    },
  },
  methods: {
    // 선택한 날짜
    getDay(date) {
      this.on = true;
      let result = new Date(date);
      let sliceDate = result.toLocaleString().split(".");
      let year = parseInt(sliceDate[0].trim());
      let month = parseInt(sliceDate[1].trim());
      let day = parseInt(sliceDate[2].trim());
      let result_day = {
        year,
        month,
        day,
      };
      this.paymentDate = result_day;
      this.$store.commit("deliveryDate", result_day);
    },
    closeOverlay() {
      this.$emit("update:pick-open", false);
    },
  },
};
</script>

<style scoped></style>
