/**
 * 业务常量
 */

module.exports = {
    // 过去两小时~未来4小时的数据起始、结束和间隔时间
    time: {
        start: 1473836400000,    // 2016/09/14 15:00
        end: 1473857400000, // 2016/09/14 20:50
        delta: 600000   // 10分钟
    },

    // 地图宽高（单位px）
    heatmapSize: {
        width: 2308,
        height: 1800
    },

    // 各区域人数临界值设定  ps：如果要改动这里，则defaultData中的数据也要重新生成
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

};
