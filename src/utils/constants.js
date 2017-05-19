/**
 * 业务常量
 */

module.exports = {
  /**
   * 过去两小时~未来4小时的数据起始、结束和间隔时间
   */
  time: {
    start: 1473836400000,    // 2016/09/14 15:00
    end: 1473857400000, // 2016/09/14 20:50
    delta: 600000   // 10分钟
  },

  interval: 1500, // 刷新间隔

  /**
   * 地图宽高
   * 单位：px
   */
  heatmapSize: {
    width: 2308,
    height: 1800
  },

  /**
   * 各区域人数临界值设定
   * IMPORTANT: 如果要改动这里的值，则defaultData中的数据也要重新生成，因为各区域的state取决于这里的临界值
   * 执行 npm run data 生成新的defaultData.json，并且要手动上传到cdn，相关api： src/api/index.js => getInitialData()
   */
  sectionSettings: {
    T1: {
      warning: 1800,
      danger: 2200
    },
    W1: {
      warning: 700,
      danger: 900
    },
    W2: {
      warning: 750,
      danger: 700
    },
    W3: {
      warning: 650,
      danger: 700
    },
    WC: {
      warning: 1200,
      danger: 1400
    },
    E1: {
      warning: 800,
      danger: 1000
    },
    E2: {
      warning: 600,
      danger: 800
    },
    E3: {
      warning: 700,
      danger: 1000
    },
    EC: {
      warning: 2000,
      danger: 2400
    }
  },

  measures: {
    1: [
      '建议登机口2号旅客换至登机口13号登机',
      '建议登机口4号旅客换至登机口1号登机',
      '建议登机口2号旅客换至登机口5号登机',
      '建议登机口7号旅客换至登机口9号登机',
      '建议登机口6号旅客换至登机口10号登机',
      '建议登机口4号旅客换至登机口2号登机',
    ],
    2: [
      '需要机场调度人员',
      '建议增设登机口，并将登机口2号旅客换至登机口13号登机'
    ]
  }
};
