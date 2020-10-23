<template>
  <div class="item_cycle" @click="toggleCycleList">
    <div class="wrap">
      <span class="item_title">{{ option.title }} 주기</span>
      <div class="info">
        <span class="selected"
          ><span class="best" v-if="selected_cycle.best">BEST</span
          >{{ selected_cycle.name }}</span
        >
      </div>
    </div>
    <div class="cycle_wrap" @click="bubbleGuard">
      <template v-for="cycle in getCycles">
        <div
          class="box"
          :key="cycle.id"
          @click="selected(cycle)"
          :class="{ selected: cycle.active }"
        >
          <span class="cycle_icon">
            <img
              :src="cycle.active ? cycle.img_on : cycle.img"
              :alt="cycle.name"
            />
          </span>
          <div class="cycle_name">
            <span>{{ cycle.name }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "CycleItem",
  props: {
    option: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },
  data() {
    return {
      selected_cycle: {},
      cycles: [
        {
          id: 1,
          week: 4,
          name: "4주에 한번",
          img: require("@/assets/img/cycle_manytime_off.svg"),
          img_on: require("@/assets/img/cycle_manytime_on.svg"),
          active: false,
        },
        {
          id: 2,
          week: 8,
          name: "8주에 한번",
          img: require("@/assets/img/cycle_day_off.svg"),
          img_on: require("@/assets/img/cycle_day_on.svg"),
          best: true,
          active: true,
        },
        {
          id: 3,
          week: 16,
          name: "16주에 한번",
          img: require("@/assets/img/cycle_threeday_off.svg"),
          img_on: require("@/assets/img/cycle_threeday_on.svg"),
          active: false,
        },
      ],
    };
  },
  created() {
    // 초기 면도기 일 경우에 주기 선택
    if (this.option.id == 2) {
      this.getCycles.forEach((item) => {
        if (item.active) {
          this.selected_cycle = {
            name: item.name,
            week: item.week,
            best: item.best ? true : false,
          };
          this.$store.commit("changeWeek", item.week);
          this.$store.commit("addOption", [this.selected_cycle, this.option]);
        }
      });
    } else {
      // 초기 면도기 외의 아이템 주기 선택
      this.getCycles.forEach((item, idx) => {
        if (idx === 0) {
          item.active = true;
          this.selected_cycle = {
            name: item.name,
            week: item.week,
            best: item.best ? true : false,
          };
        } else {
          item.active = false;
        }
      });
    }
  },
  computed: {
    // 주기
    getCycles() {
      let result;
      if (this.option.id === 2) {
        result = this.cycles;
      } else {
        result = this.cycles.filter((item) => {
          return item.week >= this.$store.state.currentWeek;
        });
        result.forEach((item, idx) => {
          if (idx === 0) {
            item.active = true;
            this.selected_cycle = {
              name: item.name,
              week: item.week,
              best: item.best ? true : false,
            };
          } else {
            item.active = false;
          }
        });
      }
      return result;
    },
  },
  methods: {
    // 주기 선택시 active 활성화
    toggleCycleList() {
      let cycleItem = document.querySelector(".item_cycle");
      if (
        !cycleItem.parentNode.childNodes[this.idx].classList.contains("active")
      ) {
        this.initClass();
        cycleItem.parentNode.childNodes[this.idx].classList.add("active");
      } else {
        this.initClass();
        cycleItem.parentNode.childNodes[this.idx].classList.remove("active");
      }
    },
    // 주기선택 활성화 전부 지우기
    initClass() {
      let cycleItem = document.querySelectorAll(".item_cycle");
      cycleItem.forEach((tem) => {
        tem.classList.remove("active");
      });
    },
    // 이벤트 버블링 방지
    bubbleGuard(e) {
      e.stopPropagation();
    },
    // 주기 선택
    selected(tg) {
      this.selected_cycle = {};
      // 리필면도기일 경우
      if (this.option.id === 2) {
        this.getCycles.forEach((item) => {
          if (item.id === tg.id) {
            this.selectedLogic(item);
            this.$store.commit("changeWeek", item.week);
          } else {
            item.active = false;
          }
        });
        this.$store.commit("addOption", [this.selected_cycle, this.option]);
      } else {
        //그외 아이템 주기
        this.getCycles.forEach((item) => {
          item.active = false;
        });
        this.getCycles.forEach((item) => {
          if (item.id === tg.id) {
            console.log(item);
            this.selectedLogic(item);
          } else {
            item.active = false;
          }
        });
      }
    },
    // cycle 목록 활성화 및 selected object
    selectedLogic(item) {
      item.active = true;
      let cycleItem = document.querySelectorAll(".item_cycle");
      cycleItem.forEach((tem) => {
        tem.classList.remove("active");
      });
      this.selected_cycle = {
        name: item.name,
        week: item.week,
        best: item.best ? true : false,
      };
    },
  },
};
</script>

<style></style>
