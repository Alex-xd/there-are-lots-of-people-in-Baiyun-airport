<template>
  <transition name="dialog">
    <div class="modal" v-show="visible" draggable="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="close">×
            </button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body">
            <p v-if="type==='text'">{{content}}</p>

            <div v-else-if="type==='time'" class="form-group label-floating is-empty">
              <label class="control-label" for="focusedInput1">日/月/年&nbsp;&nbsp;小时/分钟</label>
              <input class="form-control" id="focusedInput1" type="datetime-local"
                     v-model="time"
                     @keyup.enter="positive">
            </div>

            <div v-else-if="type==='file'" class="form-group is-fileinput">
              <label for="inputFile" class="col-md-2 control-label">选择文件</label>
              <div class="col-md-10">
                <input type="text" readonly="" class="form-control" placeholder="浏览文件...">
                <input type="file" id="inputFile" multiple="">
              </div>
            </div>

            <slot v-else-if="type==='custom'"></slot>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="positive">{{positiveText}}</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { unixToTime } from '@/utils/formateDate';

  //  TODO：添加可拖动功能
  export default {
    name: 'dialog',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      visible: {
        type: Boolean
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      positiveText: {
        type: String,
        default: '确定'
      },
      onPositive: {
        type: Function,
        default: function () {
        }
      }
    },
    data(){
      return {
        time: ''
      }
    },
    methods: {
      positive() { // TODO:用策略模式重构下这部分
        if (this.type === 'time') {
          const unixTime = Date.parse(this.time);
          if (unixTime > this.$const.time.start && unixTime < this.$const.time.end) {
            this.onPositive({ time: unixTime });
            this.close();
          } else if (!this.time) {
            // TODO:写一个toast代替alert
            alert('请输入时间');
          } else {
            alert(`很抱歉! 没有找到${unixToTime(unixTime)}分的数据`);
          }
        } else {
          this.onPositive();
          this.close();
        }
      },
      close() {
        this.visible = false;
      }
    },
    created(){
      const vm = this;
      window.document.addEventListener('keyup', (e) => {
        if (e.which === 27) {
          vm.close();
        }
      }, false);
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    z-index: 9999999;
    display: block;
  }

  .modal-dialog {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .dialog-enter-active,
  .dialog-leave-active {
    transition: transform .4s, opacity .4s;
  }

  .dialog-enter {
    opacity: 0;
    transform: scale(0.5);
  }

  .dialog-leave-active {
    opacity: 0;
    transform: scale(1.5);
  }

  .is-empty {
    input::-webkit-datetime-edit-fields-wrapper {
      display: none;
    }
  }

  .is-focused {
    input::-webkit-datetime-edit-fields-wrapper {
      display: inline-block;
    }
  }
</style>

