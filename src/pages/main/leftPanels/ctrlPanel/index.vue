<template>
  <leftPanelBaseUI>
    <template slot="breadcrumb">
      <li class="active">控制面板</li>
    </template>

    <template slot="main">
      <section class="content">
        <template v-for="(value, key, index) in sectionInfo">
          <listItem :section="value" :key="key" @click.native="showDetails(key)"></listItem>
          <div v-if="index < 8" class="my-list-group-separator"></div> <!--最后一项不渲染-->
        </template>
      </section>
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
      // 获取当前时间下的各区域数据
      sectionInfo(){
        if (this.$store.state.data) {
          return this.$store.getters.curData.sectionInfo;
        }
      }
    },
    methods: {
      showDetails(section){
        const PAGEWIDTH = document.body.scrollWidth;
        const PAGEHEIGHT = document.body.scrollHeight;
        switch (section) {
          case 'T1' : window.scrollTo(PAGEWIDTH / 5, PAGEHEIGHT / 4);
            break;
          case 'W1' : window.scrollTo(0, 0);
            break;
          case 'W2' : window.scrollTo(0, PAGEHEIGHT / 4);
            break;
          case 'W3' : window.scrollTo(0, PAGEHEIGHT);
            break;
          case 'WC' : window.scrollTo(0, PAGEHEIGHT / 4);
            break;
          case 'E1' : window.scrollTo(PAGEWIDTH, 0);
            break;
          case 'E2' : window.scrollTo(PAGEWIDTH / 2, PAGEHEIGHT / 4);
            break;
          default: break;
        }

        this.$router.push({name: 'sectionDetails', params: {section: section}});
      }
    }

  }
</script>

<style lang="scss" scoped>
  .content {
    overflow: auto;
    height: 650px;
    padding: 12px 15px 15px 15px;

    // 分割线
    .my-list-group-separator {
      content: "";
      width: 80%;
      margin: 0 auto;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
  }
</style>
