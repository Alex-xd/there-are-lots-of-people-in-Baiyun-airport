<template>
  <leftPanelBaseUI>
    <li class="active" slot="breadcrumb">
      <span>控制面板</span>
      <span v-if="isSingleOneData" class="history-time">{{data.timeStamp | unixToTime}} 分历史数据</span>
    </li>

    <template v-for="(value, key, index) in data.sectionInfo" slot="main">
      <listItem :section="value" :key="key" @click.native="showDetails(key)"></listItem>
      <div v-if="index < 8" class="my-list-group-separator"></div> <!--最后一项不渲染-->
    </template>
  </leftPanelBaseUI>
</template>

<script>
  import leftPanelBaseUI from '@/components/leftPanelBaseUI';
  import listItem from './listItem';

  export default {
    name: 'ctrlPanel',
    components: {
      leftPanelBaseUI,
      listItem
    },
    data(){
      return {
        isRotating: false
      }
    },
    computed: {
      // 获取当前时间下的对应数据 {points,sectionInfo,timeStamp}
      data(){
        if (this.$store.state.singleOne) {
          return this.$store.state.singleOneData;
        } else if (this.$store.state.data) {
          return this.$store.getters.curData;
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
      showDetails(section){
//        TODO:平滑运动到指定位置
        const PAGEWIDTH = document.body.scrollWidth;
        const PAGEHEIGHT = document.body.scrollHeight;
        switch (section) {
          case 'T1' :
            window.scrollTo(PAGEWIDTH / 5, PAGEHEIGHT / 4);
            break;
          case 'W1' :
            window.scrollTo(0, 0);
            break;
          case 'W2' :
            window.scrollTo(0, PAGEHEIGHT / 4);
            break;
          case 'W3' :
            window.scrollTo(0, PAGEHEIGHT);
            break;
          case 'WC' :
            window.scrollTo(0, PAGEHEIGHT / 4);
            break;
          case 'E1' :
            window.scrollTo(PAGEWIDTH, 0);
            break;
          case 'E2' :
            window.scrollTo(PAGEWIDTH / 2, PAGEHEIGHT / 4);
            break;
          default:
            break;
        }

        if (this.$store.state.singleOne) {
          this.$showDialog({ title: '很抱歉，单个时间点的数据无法显示人流量变化曲线。' });
          return;
        }
        this.$router.push({ name: 'sectionDetails', params: { section: section } });
      }
    }

  }
</script>

<style lang="scss" scoped>

  .history-time {
    position: relative;
    left: 60px;
    color: lighten(#777, 10%);
  }

  // 分割线
  .my-list-group-separator {
    content: "";
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

</style>
