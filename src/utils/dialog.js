/**
 * dialog 会话框插件
 *
 * 使用: this.$dialog(title, content, positive, close, onPositive, onClose)
 */

import dialog from '@/components/dialog';

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default function plugin(Vue) {
    if (plugin.installed) {
        return
    }

    const Component = Vue.extend(dialog);
    const vm = new Component({ el: document.createElement('div') });
    document.body.appendChild(vm.$el);

    function showDialog({ title = '提示', content = '', positiveTxt = '确定', onPositive }) {
        vm.title = title;
        vm.content = content;
        vm.positiveTxt = positiveTxt;
        vm.onPositive = onPositive || function () {
            };
        vm.visible = true
    }

    window.addEventListener('hashchange', () => {
        if (vm.visible) {
            vm.visible = false
        }
    }, false);

    Vue.prototype.$showDialog = showDialog;
}
