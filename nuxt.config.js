module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    // 配置vue文件页面的公用默认信息，也可以在每个vue文件中单独设置
    meta: [
      { charset: 'utf-8' },
      { name: '测试', content: 'width=device-width, initial-scale=1' },
      // hid作用是区分meta内容的唯一性，不设置可能会造成子页面的head不覆盖父组件的内容
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    // 设置网页的ico图标 储存在static中
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' }
    ]
  },
  // css选项用于为页面引入公用的css文件  后面引入的css会覆盖前面的  
  css: [
    // 引入普通的css文件
    '~assets/assets.css',
    // 引入less或sass文件  需要声明预处理器的类型
    {src: '~assets/test.less', lang: 'less'},
    // 如果引入了ui库    需要在此处引入对应的css文件  
    // 'element-ui/lib/theme-chalk/index.css',
    'iview/dist/styles/iview.css',
    // 
  ],
  /*
  ** Customize the progress bar color
  */
 // loading是用来控制页面跳转时加载进度条   可以修改进度条的颜色    也可以指定为一个组件     
  loading: { color: '#000' },               // 修改颜色
  //  loading: '~components/loading.vue',   // 指定为一个组件
  //  loading: false,                       // 变为禁用
  /*
  ** Build configuration
  */
  // plugins用来引入需要用到的组件  每个插件都需要在plugins文件夹中新建简单的配置文件    然后再在这里引入
  plugins: [
    // {src: '~plugins/element-UI.js', ssr: true},
    {src: '~plugins/iview.js', ssr: true}
  ],


  // build中包含了很多webpack的选项   可以根据项目的需求来进行构建配置
  build: {
    // vendor引入第三方模块  开启ssr的插件、ui库不能放在vendor中
    // vendor: ['axios','lodash'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

