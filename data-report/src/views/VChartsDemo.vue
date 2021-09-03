<!--
  不需要再编写宽高
  不需要获取echarts实例
-->
<template>
  <div class="vue-chart-view">
    <v-charts :options="data"></v-charts>
  </div>
</template>

<script>
export default {
  name: "VChartsDemo",
  data() {
    return {
      data: {
        xAxis: {
          type: "category",
        },
        yAxis: {},
        series: [
          {
            type: "line",
            data: [100, 200, 150],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>