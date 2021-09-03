<!--
  @antv/g2 简单应用
  https://g2.antv.vision/zh/docs/manual/getting-started
  后台给出最细粒度的数据，用G2就可以玩出各种各样的展示
-->
<template>
  <div class="g2-view">
    <div id="contianer"></div>
  </div>
</template>

<script>
// import * as d3 from 'd3'
import { Chart } from '@antv/g2'

export default {
  name: "G2Demo",
  async mounted() {
    // const data = await d3.csv('/data/msg.csv');
    // console.log('data => ', data);
    const data = [{"name":"mark","age":27,"height":180,"weight":70,"sex":"male","time":"90后"},
{"name":"mary","age":25,"height":162,"weight":45,"sex":"female","time":"90后"},
{"name":"tony","age":32,"height":175,"weight":80,"sex":"male","time":"80后"},
{"name":"bone","age":31,"height":178,"weight":72,"sex":"male","time":"80后"},
{"name":"nike","age":41,"height":182,"weight":102,"sex":"male","time":"70后"},
{"name":"magie","age":23,"height":168,"weight":58,"sex":"female","time":"90后"}]
// 转格式的工具 https://www.toolnb.com/tools/csvconvert.html

    /** 
     * 1、准备数据
     */
    const chart = new Chart({
      container : 'contianer',
      width: 600,
      height: 300
    });

    chart.data(data)


    /** 
     * 2、可视化语法描述
     */

    // 笛卡尔坐标系
    chart.line() // 折线图
      .position('name*height')


   
    // 根据不同维度对数据进行展示
    // chart.interval() // 柱状图
    //   .position('name*height')
      // .color('weight' , val => {
      //   return val > 100
      //     ? 'red' : 'green'
      // })
      // .size('age') // 数据映射
    

    // // 雷达图
    // chart.area()
    //   .position('name*height')

    // // 极坐标系
    // chart.coordinate('polar')

    /** 
     * 3、渲染
     */
    chart.render()
  },
};

</script>

<style lang="scss" scoped>

</style>