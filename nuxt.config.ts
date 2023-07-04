import postcsspxtoviewport from 'postcss-px-to-viewport'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },// 页面最下面的控制台
  devServer: {
    port: 3005,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "这里是tilte",
      meta: [
        {
          name: "description",
          content:"这里是描述",
        },
        {
          name: "Keywords",
          content:
            "儿童、智慧校园、数字教育、现代化幼儿园、智慧教育、AR、VR、全息、元宇宙、儿童科技玩具、学前教育、智能游戏、儿童空间设计、MI、VI、IP、SI、视频拍摄",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    },
  },
  modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ },
  vite:{
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 750, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['el-'], // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
            landscape: false // 是否处理横屏情况
          })
        ]
      }
    }

  }
 
});

