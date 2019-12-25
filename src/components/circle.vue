<template>
  <div class="parent-element-center">
    <svg :width="diameterShow" :height="diameterShow" :viewbox="viewbox">
      <circle
        :cx="size"
        :cy="size"
        :r="raduisActual"
        :stroke-width="strokeWidthOuter"
        stroke="#fff"
        fill="none"
      ></circle>
      <circle
        v-if="rates"
        :text="text"
        :cx="size"
        :cy="size"
        :r="raduisActual"
        :stroke-width="strokeWidth"
        :stroke="strokeColor"
        fill="none"
        :transform="transform"
        :stroke-dasharray="strokeDasharray"
        stroke-linecap="round"
        style="transition: all ease 0.5s"
      ></circle>
    </svg>
    <div class="element-center" :style="textStyle">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: 'circleRound',
  props: {
    sizeOuter: {
      default: 45
    },
    // 圆环外圈的直径
    size: {
      default: 60
    },
    // outer
    strokeWidthOuter: {
      default: 16
    },
    // 圆环的小宽度
    strokeWidth: {
      default: 10
    },
    // 圆环的颜色
    strokeColor: {
      default: "#f19709"
    },
    // 圆环显示的百分比 这边是小数
    rate: {
      default: 0.5
    },
    // 圆环里面的文字 这里的文字如果跟rate息息相关 可以放到computed计算
    text: {
      default: 56
    },
    // 圆环里面的文字的fontSize大小
    textSize: {
      default: 24
    }
  },
  data() {
    return {

    }
  },
  computed: {
    rates() {
      // this.rate = Number((this.text / 60).toFixed(2))
      return Number((this.text / 60).toFixed(2))
    },
    raduisActual() {
      return this.size - this.strokeWidth;
    },
    diameterShow() {
      return 2 * this.size;
    },
    viewbox() {
      return `0 0 ${this.diameterShow} ${this.diameterShow}`;
    },
    strokeDasharray() {
      const perimeter = Math.PI * 2 * this.raduisActual;
      const showLength = this.rates * perimeter - 3;
      return `${showLength} 1000`;
    },
    transform() {
      return `matrix(0, -1, 1, 0, 0, ${this.diameterShow})`;
    },
    textStyle() {
      let res = {};
      res.fontSize = `${this.textSize}px`;
      return res;
    }
  }
};
</script>
<style scoped>
.parent-element-center {
  position: relative;
  display: inline-block;
}
.element-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: bold;
}
</style>
