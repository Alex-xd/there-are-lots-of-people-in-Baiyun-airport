# 机场人流量分布预测系统  Vue Web应用

线上预览： [baiyun.alexxd.com](baiyun.alexxd.com)

## 0.所需素材

- 图标 [戳这里](https://material.io/icons/#ic_pause_circle_outline)

- 样式和组件模板 [戳这里](http://fezvrasta.github.io/bootstrap-material-design/bootstrap-elements.html)

- echarts模板 [戳这里](http://echarts.baidu.com/examples.html)


## 项目结构

```
.
├── LICENSE
├── README.md
├── build       // webpack基本配置
├── config      // webpack自定义配置
├── data        // 所需静态数据（模拟）
├── dist        // 打包文件
├── build.sh    // 自动打包发布脚本
├── index.html  // html模板
├── package.json    // 项目依赖配置
├── src         // 源文件
│   ├── App.vue     // 根组件
│   ├── api         // 接口
│   ├── assets      // 需要一起打包的资源
│   │   ├── fonts
│   │   └── img
│   ├── components  // 通用组件
│   │   ├── dialog  // 会话弹窗
│   │   └── leftPanel   // 左侧面板UI组件
│   ├── main.js     // 项目入口文件
│   ├── pages       // 业务组件
│   │   ├── login   // 登录页
│   │   ├── logout  // 登出页
│   │   └── main    // 主页面
│   │       ├── index.vue   // 入口组件
│   │       ├── leftPanels  // 左侧面板
│   │       │   ├── ctrlPanel   // 控制面板
│   │       │   └── sectionDetails  // 区域详情
│   │       └── rightPanel  // 右侧面板
│   ├── router  // 路由
│   ├── store   // 状态管理
│   ├── styles  // 通用样式
│   └── utils   // 常用业务逻辑封装
│       ├── auth.js
│       ├── constants.js
│       ├── dialog.js
│       ├── formateDate.js
│       ├── globalConfig.js
│       ├── heatmapTooltips.js
│       ├── node-handleFiles.js
│       └── storage.js
├── static  // 不打包的资源
│   ├── sw-toolbox.js
│   ├── sw.js
│   └── vendor  // 外部库
├── test    // 测试
└── yarn.lock   // 推荐使用yarn
```

## 开发

### 开发前准备

`ssh://git@code.varbee.com:2222/diffusion/18/there-are-lots-of-people-in-baiyun-airport.git`

下载依赖

**`yarn install`** 或  `npm install`

初始化

`npm run init`

### 开发

`npm run dev`

### 提交更改

使用[commitizen](http://commitizen.github.io/cz-cli/)提交更改


```
git add .
npm run commit    # 提交commit
arc diff [要比较的commit版本号]    # 提交代码评审单，等待评审
git push    # 评审通过即可push
```

### 打包发布

仅打包

`npm run build`

打包同时发布上线

`npm run dist`


## LICENSE
Apache 2.0
