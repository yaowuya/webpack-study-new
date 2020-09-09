# webpack-study-new

更加详细的webpack学习

[尚硅谷2020最新版Webpack5实战教程(从入门到精通)](https://www.bilibili.com/video/BV1e7411j7T5)

创建 src 下的 js 等文件后，不需要配置 webpack.config.js 文件，在命令行就可以编译打包。

指令：

* 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
  webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 整体打包环境，是开发环境
* 生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
  webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 整体打包环境，是生产环境

结论：

1. webpack 本身能处理 js/json 资源，不能处理 css/img 等其他资源
2. 生产环境和开发环境将 ES6 模块化编译成浏览器能识别的模块化，但是不能处理 ES6 的基本语法转化为 ES5（需要借助 loader）
3. 生产环境比开发环境多一个压缩 js 代码
<<<<<<< HEAD

### 笔记

1. `package.json`中，`browserslist`的环境配置，取决于`webpack.config.js`中配置的`process.env.NODE_ENV = 'development'`
2. vscode配置eslint时，第一个时全局下载eslint包，`npm i -g eslint`,第二个时要在项目中初始化eslint配置文件`eslint --init`

# webpack性能优化

* 开发环境性能优化
* 生产环境性能优化

## 开发环境性能优化

* 优化打包构建速度
  * HMR(模块热替换，`devServer`的配置项`hot`设为`true`，此时，要在`entry`中加上`index.html`,因为热替换导致不能热更新)
* 优化代码调试
  * source-map

## 生产环境性能优化

* 优化打包构建速度
  * oneOf
  * babel缓存
  * 多进程打包
  * externals
  * dll
* 优化代码运行的性能
  * 缓存(hash-chunkhash-contenthash)
  * tree shaking
  * code split
  * 懒加载/预加载
  * pwa
=======
>>>>>>> 99b66cc10789364ca0252361fe2eaae1a828c133
