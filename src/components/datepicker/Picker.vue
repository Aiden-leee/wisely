<template>
  <Fragment>
    <div class="picker">
      <h3>결제일을 설정해주세요</h3>
      <Datepicker
        :language="ko"
        :inline="true"
        :disabled-dates="disabledDates"
        calendar-class="date_pick"
        :minimumView="'day'"
        :maximumView="'day'"
        v-model="payday"
      ></Datepicker>
      <div class="payment_add">
        <router-link tag="button" class="payment disabled" to="/phase_cycle"
          >확인</router-link
        >
      </div>
    </div>
    <div class="overlay_bg date"></div>
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
  data() {
    return {
      payday: new Date(),
      ko: ko,
      disabledDates: {},
    };
  },
  created() {
    let getDate = new Date();
    getDate.setMonth(getDate.getMonth() + 6);
    this.disabledDates.to = new Date();
    this.disabledDates.from = getDate;
  },
};
</script>

<style scoped></style>
