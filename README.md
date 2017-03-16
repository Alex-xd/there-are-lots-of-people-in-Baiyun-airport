# there-are-lots-of-people-in-Baiyun-airport

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 项目结构

```
.
├── LICENSE                                         开源协议                                           
├── README.md                                       说明                                   
├── build                                           构建配置
│   ├── webpack.base.conf.js                        \
│   ├── webpack.dev.conf.js                         | webpack配置文件
│   └── webpack.prod.conf.js                        /
├── index.html                                      打包后的主html
├── package.json                                    项目信息
├── postcss.config.js                               postcss配置文件
├── data                                            数据
│   ├── 1.json
│   ├── ...
│   ├── 9.json
│   └── default                                     原始数据备份
│       ├── 1.json
│       ├── ...
│       ├── 9.json
│       └── all.json                                未分割的原始数据
├── dist                                            打包发布文件
├── src                                             源文件
│   ├── api                                         ajax请求封装
│   │   └── index.js
│   ├── components                                  通用组件（模态窗等）
│   ├── image                                       可复用的图片
│   │   ├── 3d.jpg
│   │   └── global.jpg
│   ├── modules                                     业务模块
│   │   └── common                                  通用模块（每个页面都要引入的）
│   │       ├── css
│   │       │   ├── global.scss
│   │       │   ├── index.scss
│   │       │   ├── media-queries.scss
│   │       │   ├── reset.scss
│   │       │   └── variables.scss
│   │       └── index.js
│   └── pages                                       划分页面
│       ├── index                                   Landing页
│       │   ├── index.html
│       │   └── index.js
│       └── main                                    主页面
│           ├── css                                 页面独有css
│           │   ├── index.scss
│           │   └── section                         区块划分
│           │       ├── _control-panel.scss
│           │       └── _main.scss
│           ├── img                                 页面独有图片资源
│           │   └── baiyun-demo.png
│           ├── index.html                              
│           ├── index.js                            页面js入口文件
│           └── js                                  
│               ├── chart.js
│               └── heatmap
│                   ├── index.js
│                   └── tooltips.js
└── yarn.lock                                       推荐使用yarn
```

## 开发

### 开发前准备

`git clone git@github.com:Alex-xd/there-are-lots-of-people-in-Baiyun-airport.git`

`npm install` 或 `yarn install`

`npm run init`

### 本地开发

`npm run dev`

### 提交更改

使用[commitizen](http://commitizen.github.io/cz-cli/)提交更改

提交代码时执行`git add .` & `npm run commit` & `git push`

### 打包发布

`npm run build`


## LICENSE

Apache 2.0