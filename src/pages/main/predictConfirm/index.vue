<template>
  <predictConfirm :visible.sync="visible"
          title="请输入预测时间"
          :onPositive="predict">

  </predictConfirm>
</template>

<script>
  import predictConfirm from '@/components/dialog';

  export default {
    name: 'predict-confirm',
    components: {
      predictConfirm
    },
    props: {
      visible: {
        type: Boolean
      }
    },
    data() {
      return {}
    },
    methods: {
      predict(){
        alert('预测成功！')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>


