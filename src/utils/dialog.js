/**
 * dialog 会话框插件
 *
 * 组件内使用: this.$dialog(title, content, positive, onPositive)
 */

import dialog from '@/components/dialog';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

plugin.installed = false;
export default function plugin(Vue) {
  if (plugin.installed) {
    return
  }

  const Component = Vue.extend(dialog);
  const vm = new Component({ el: document.createElement('div') });
  document.body.appendChild(vm.$el);

  function showDialog({ type = 'text', title = '', content = '', positiveText = '确定', onPositive }) {
    vm.type = type;
    vm.title = title;
    vm.content = content;
    vm.positiveText = positiveText;
    vm.onPositive = onPositive || function () {
      };
    vm.visible = true;
  }

  window.addEventListener('hashchange', () => {
    if (vm.visible) {
      vm.visible = false
    }
  }, false);

  Vue.prototype.$showDialog = showDialog;
  plugin.installed = true;
}


