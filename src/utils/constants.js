/**
 * 业务常量
 */

export default {
    // 热图模拟数据的起始、结束和间隔时间
    timeRange: {
        start: 1476428400000,   // 2016/09/14 15:00
        end: 1476479100000,     // 2016/09/15 05:50
        delta: 60000            // 10分钟
    },

    // 地图全画幅基础宽高
    heatmapSize: {
        width: 2308,
        height: 1800
    },

    // 各区域临界值设定
    sectionSettings: {
        T1: {
            warning: 200,
            danger: 600
        },
        W1: {
            warning: 200,
            danger: 400
        },
        W2: {
            warning: 200,
            danger: 400
        },
        W3: {
            warning: 200,
            danger: 400
        },
        WC: {
            warning: 200,
            danger: 400
        },
        E1: {
            warning: 200,
            danger: 400
        },
        E2: {
            warning: 200,
            danger: 400
        },
        E3: {
            warning: 200,
            danger: 400
        },
        EC: {
            warning: 200,
            danger: 400
        }
    }

}
