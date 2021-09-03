<!--
  @antv/g2 dataSet 计算平均身高
  https://g2.antv.vision/zh/docs/manual/dataset/overview
-->
<template>
  <div class="g2-view">
    <div id="contianer"></div>
  </div>
</template>

<script>
// import * as d3 from 'd3'
import { Chart } from '@antv/g2'
import { DataSet } from '@antv/data-set'

export default {
  name: "G2DataSet",
  async mounted() {
    // const data = await d3.csv('/data/msg.csv');
    // console.log('data => ', data);
    const data = [{"name":"mark","age":27,"height":180,"weight":70,"sex":"male","time":"90后"},
{"name":"mary","age":25,"height":162,"weight":45,"sex":"female","time":"90后"},
{"name":"tony","age":32,"height":175,"weight":80,"sex":"male","time":"80后"},
{"name":"bone","age":31,"height":178,"weight":72,"sex":"male","time":"80后"},
{"name":"nike","age":41,"height":182,"weight":102,"sex":"male","time":"70后"},
{"name":"magie","age":23,"height":168,"weight":58,"sex":"female","time":"90后"}]


    /** 
     * 计算平均值
     */

    // const ds = new DataSet();
    // const dv = ds.createView()
    //     .source(data)
    //     .transform({
    //       type: 'aggregate',
    //       fields: ['height', 'weight'], // 统计字段集
    //       operations: ['mean', 'mean'], // 统计操作集
    //       as: ['avgHeight', 'avgWeight'],
    //     }); // 聚合：算数计算

    // // 统计结果以 JSON 数组的格式存储在 dv.rows 中
    // const { avgHeight, avgWeight } = dv.rows[0];

    // // 174.16666666666666 71.16666666666667
    // console.log(avgHeight, avgWeight);


    /** 
     * 根据性别算人数
     */

    const ds = new DataSet();
    const dv = ds.createView()
        .source(data)
        .transform({
          as: ['number'],
          groupBy: ['sex'], // 统计字段集
          operations: ['count'], // 统计操作
          type: 'aggregate' 
        }); // 聚合：算数计算
    console.log('data-view => ', dv);

    

    const chart = new Chart({
      container : 'contianer',
      width: 600,
      height: 300
    });

    chart.data(dv.rows)

    chart.interval()
      .adjust('stack')
      .position('number')
      .color('sex')
    
    chart.coordinate('theta')
    chart.render()
  },

};

</script>

<style lang="scss" scoped>

</style>