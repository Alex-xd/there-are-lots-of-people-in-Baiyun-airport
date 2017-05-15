<template>
  <div class="modal" :class="{show:visible}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="close">×
          </button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
          <p class="dialog-body"><span v-for="(item, index) in content"><input class="dialog-input" type="text" v-model="time[index]">{{item}}</span></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="positive">{{positiveTxt}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'time-dialog',
    props: {
      visible: {
        type: Boolean
      },
      title: {
        type: String,
        default: '提示'
      },
      content: {
        type: Array,
        default: () => {
          return ['年', '月', '日']
        }
      },
      positiveTxt: {
        type: String,
        default: '确定'
      },
      onPositive: {
        type: Function,
        default: function () {
          return this.time;
        }
      },
      result: {
        type: Array
      },
      finish: {
        type: Boolean
      }
    },
    data() {
      return {
        time: []
      }
    },
    methods: {
      positive() {
        this.$emit('update:result', this.time);
        this.$emit('update:finish', true);
        this.close();
      },
      close() {
        this.$emit('update:visible', false);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    z-index: 999999999;
  }

  .modal-dialog {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .dialog-enter-active, .dialog-leave-active {
    opacity: 1;
    transform: scale(1);
    transition: transform .4s, opacity .4s;
  }

  .dialog-enter, .dialog-leave {
    opacity: 0;
    transform: scale(1.5);
  }

  .dialog-body{
    text-align: center;
  }

  .dialog-input{
    width: 100px;
    border-left: none;
    border-right: none;
    border-top: none;
    padding-left: 10px;
  }
</style>

