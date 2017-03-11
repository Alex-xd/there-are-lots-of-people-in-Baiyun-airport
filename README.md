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
├── src                                             开发源文件
│   ├── api                                         api数据层
│   │   └── index.js
│   ├── assets                                      静态资源
│   │   ├── css                                     css文件
│   │   │   ├── components                          css组件
│   │   │   ├── font-awesome.min.scss               字体图标
│   │   │   ├── fonts                               字体
│   │   │   │   ├── FontAwesome.otf
│   │   │   │   ├── fontawesome-webfont.eot
│   │   │   │   ├── fontawesome-webfont.svg
│   │   │   │   ├── fontawesome-webfont.ttf
│   │   │   │   ├── fontawesome-webfont.woff
│   │   │   │   └── fontawesome-webfont.woff2
│   │   │   ├── global.scss                         css全局属性
│   │   │   ├── index.scss                          集中导入所有css
│   │   │   ├── media-queries.scss                  媒体查询
│   │   │   ├── reset.scss                          样式重置
│   │   │   ├── sections                            按业务划分的区块css
│   │   │   └── variables.scss                      全局变量
│   │   ├── image                                   图片
│   │   └── lib                                     外部依赖库（使用npm安装后软连接到此目录）
│   │       └── echarts.js                  
│   ├── index.html                                  源HTML文件
│   └── main.js                                     项目入口
├── static                                          打包生成的静态资源
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