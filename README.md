# 目录介绍
  m 目录是移动端对应路由的文件
# run
  pnpm install
  npm run dev

# build
  - npm run generate  打包SSG
  - npm run build  打包SSR

# 下载elment
  nuxt官网
  图标不可用
  ```js
  app.vue 执行如下代码
  import * as ElementPlusIconsVue from '@element-plus/icons-vue'
  // 注册图标
  const nuxtApp = useNuxtApp()
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component)
  }
  ```
# less
  pnpm add less less-loader
  直接用

# 自适应
  使用 postcss-px-to-viewport 实现css自适应效果 vw方案 只是过渡方案既然浏览器vw支持已经很好了就使用vw方案
  - 下载 pnpm install postcss-px-to-viewport 
  nuxt.config.ts配置

# 生产环境端口号
  PORT=3005 node .output/server/index.mjs

# pm2 运行命令
  ```js
  // 新建一个ecosystem.config.js，放到项目的根目录
  module.exports = {
    apps: [
      {
        name: 'NuxtAppName',  // 设置启动项目名称
        port: '3005',// 端口
        exec_mode: 'cluster',//应用程序的执行模式。可以是 cluster（多进程模式）或 fork（单进程模式）
        instances: 'max', //在 cluster 模式下，应用程序运行的实例数量。max 表示根据可用 CPU 核心数创建尽可能多的实例。
        script: './server/index.mjs',//应用程序的脚本路径。这是启动应用程序的主要入口
      }
    ]
  }
  // 运行项目
  pm2 start ecosystem.config.js
  //设置自动重启
  pm2 startup
  ```