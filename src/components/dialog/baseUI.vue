<template>
  <div class="modal" :class="{show:visible}">
    <div class="modal-dialog">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialog-baseUI',
    props: {
      visible: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    z-index: 99999;
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
</style>

