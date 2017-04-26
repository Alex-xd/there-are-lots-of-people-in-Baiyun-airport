/**
 * 数据存储
 */

export default {
    // 存储localStorage
    setStore: (name, content) => {
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
    },

    // 获取localStorage
    getStore: name => {
        if (!name) return;
        return window.localStorage.getItem(name);
    },

    // 删除localStorage
    removeStore: name => {
        if (!name) return;
        window.localStorage.removeItem(name);
    },

    // 检测浏览器是否是隐私模式
    isSecretBrowse: () => {
        if (window.localStorage) {
            return false
        }
        const testKey = 'test';
        try {
            window.localStorage.setItem(testKey, '1');
            window.localStorage.removeItem(testKey);
            return false
        } catch (err) {
            return true
        }
    }
}



