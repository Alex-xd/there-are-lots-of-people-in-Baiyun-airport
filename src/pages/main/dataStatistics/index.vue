<template>
  <transition name="slide">
    <div class="panel panel-default right-panel" draggable="true" v-show="visible">
      <div class="panel-heading">
        <span v-if="isSingleOneData">{{data.timeStamp | unixToTime}} 分历史数据</span>
        <span v-else>未来1小时分布预测和预警 （ {{data.timeStamp | unixToTime}} ）</span>
      </div>

      <div class="panel-body">
        <div id="J_echart-bars"></div>
        <ul v-if="!isSingleOneData" class="measures">
          <li v-for="section in data.sectionInfo"
              v-show="section.state > 0"
              @click="showMeasure(section)"
              :class="[section.state == 2 ? 'danger' : 'warning']"
          ><i class="material-icons">priority_high</i></li>
        </ul>
        <div id="J_echart-radar"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import constant from '@/utils/constants';

  const dangerLine = [];
  for (const key in constant.sectionSettings) {
    if (constant.sectionSettings.hasOwnProperty(key)) {
      dangerLine.push(constant.sectionSettings[key].danger);
    }
  }

  export default {
    name: 'rightPanel',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        barsChart: null,
        radarChart: null,
      }
    },
    computed: {
      data(){
        if (this.$store.state.singleOne) {
          return this.$store.state.singleOneData;
        } else if (this.$store.state.data) {
          return this.$store.getters.fur1hourData;
        }
        return {
          timeStamp: 0
        }
      },
      isSingleOneData(){
        return this.$store.state.singleOne;
      }
    },
    methods: {
      showMeasure(section){
        // 随机挑一个建议措施拿出来
        const measures = this.$const.measures[section.state];
        const randomMeasure = measures[Math.floor(Math.random() * measures.length)];

        this.$showDialog({
          title: Number(section.state) === 1 ? '预警' : '警告！',
          content: randomMeasure
        })
      }
    },
    watch: {
      data(newVal){
        const data = [];
        for (const key in newVal.sectionInfo) {
          if (newVal.sectionInfo.hasOwnProperty(key)) {
            data.push(newVal.sectionInfo[key].pNum);
          }
        }
        // 更新📈
        if (this.barsChart) {
          this.barsChart.setOption({
            series: [{
              data: data
            }]
          });
        }
        if (this.radarChart) {
          this.radarChart.setOption({
            series: {
              data: [
                {
                  value: dangerLine,
                  name: '警戒值'
                },
                {
                  value: data,
                  name: '预测人数'
                }
              ]
            }
          });
        }
      }
    },
    mounted(){
      this.barsChart = this.$echarts.init(document.querySelector('#J_echart-bars'));
      this.radarChart = this.$echarts.init(document.querySelector('#J_echart-radar'));

      this.barsChart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['T1', 'W1', 'W2', 'W3', 'WC', 'E1', 'E2', 'E3', 'EC'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '人流预测',
            type: 'bar',
            barWidth: '60%',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      });

      this.radarChart.setOption({
        tooltip: {},
        legend: {
          data: ['警戒值', '预测人数']
        },
        radar: {
          indicator: [
            { name: 'T1 主航站楼', max: 2500 },
            { name: 'W1 西一', max: 2500 },
            { name: 'W2 西二', max: 2500 },
            { name: 'W3 西三', max: 2500 },
            { name: 'WC 西侧通道', max: 2500 },
            { name: 'E1 东一', max: 2500 },
            { name: 'E2 东二', max: 2500 },
            { name: 'E3 东三', max: 2500 },
            { name: 'EC 东侧通道', max: 2500 },
          ],
          center: ['50%', '55%'],
          radius: 100,
          splitNumber: 3,
          shape: 'circle',
          name: {
            textStyle: {
              color: '#262626'
            }
          },
        },
        series: [{
          type: 'radar',
          data: [
            {
              value: dangerLine,
              name: '警戒值'
            },
            {
              value: [0, 0, 0, 0, 0, 0, 0, 0, 0],
              name: '预测人数'
            }
          ]
        }]
      })
    }
  }
</script>

<style lang="scss" scoped>

  $boxShadowDeep: -8px 14px 17px 0 rgba(0, 0, 0, 0.2), 9px 5px 20px 0 rgba(0, 0, 0, 0.19);
  $boxShadowNormal: 0 0 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);

  .right-panel {
    position: fixed;
    z-index: 99999;
    top: 70px;
    right: 10px;
    width: 700px;
    height: 450px;
    box-shadow: $boxShadowDeep;
    transition: box-shadow .8s ease-in-out;
    &:hover {
      box-shadow: $boxShadowNormal;
    }
    .measures {
      position: absolute;
      top: 384px;
      width: 242px;
      margin: 0;
      left: 64px;
      > li {
        position: absolute;
        top: 0;
        font-size: 18px;
        cursor: pointer;
        @for $i from 0 through 8 {
          &:nth-child(#{$i+1}) {
            left: 26.8px * $i;
          }
        }
      }
    }
  }

  .danger {
    color: #B62626;
  }

  .warning {
    color: #FFA91B;
  }

  #J_echart-bars {
    position: relative;
    float: left;
    width: 300px;
    height: 330px;
  }

  #J_echart-radar {
    float: right;
    margin-top: 10px;
    width: 350px;
    height: 330px;
    z-index: 99999;
  }

  .slide-enter,
  .slide-leave-active {
    transform: rotateX(-90deg) translate3d(0, 50px, 0);
  }

  .slide-enter-active,
  .slide-leave-active {
    perspective: 1000px;
    transform-origin: 50% 0;
    transition: all .4s ease-in-out !important;
  }
</style>

