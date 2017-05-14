<template>
  <predictConfirm :visible="visible">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="close">×
      </button>
      <h4 class="modal-title">请确认预测时间</h4>
    </div>
    <div class="modal-body">
      <p>ssssss</p>
    </div>
  </predictConfirm>
</template>

<script>
  import predictConfirm from '@/components/dialog/baseUI';

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
      close() {
        this.visible = false;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>


