<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="main" style="width: 600px;height: 400px;"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        charts: '',
        opinion:['非常不开心','不开心','正常','开心','非常开心'],
        opinionData:[
          {value:335, name:'非常不开心'},
          {value:310, name:'不开心'},
          {value:234, name:'正常'},
          {value:135, name:'开心'},
          {value:1548, name:'非常开心'}
        ]
      }
    },
    methods:{
      drawPie(id){
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },
          legend: {
            orient: 'horizontal',
            bottom: 'bottom',
            data:this.opinion
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '45%'],
              data: this.opinionData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }
    },
    //调用
    mounted(){
      this.$nextTick(function() {
        this.drawPie('main')
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main{
    display: inline-block;
  }
</style>
