/*
 * @Author: your name
 * @Date: 2023-08-25 10:34:19
 * @LastEditTime: 2023-08-25 10:55:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\vite.config.js
 */
import path from 'path';
// vite.config.js
import { defineConfig } from 'vite'

const baseConfig = {
  root: '',
  base: '/',
  mode: 'development',
  publicDir: 'public',
  resolve:{
    alias:{ // 设置别名
      '@':path.resolve(__dirname,'./src')
    },
    extensions: ['.js'] // 导入时想要省略的扩展名列表
  },
  build:{ 
    // rollup打包配置，具体看rollupAPI
    rollupOptions:{
        output:{
            assetFileNames:'[hash]-[name][extname]'
        }
    },

    // 4kb以下图片打包成base64
    assetsInlineLimit:4096, 

    // 指定输出路径
    outDir:"out", 

    //指定静态资源路径
    assetsDir:"static", 

    //打包前清空文件，默认true
    emptyOutDir:true,

  }
}
const devConfig = {}
const productionConfig = {}

export default defineConfig(({command}) => {
  if(command === 'build') {
    // 生成环境
    return {...baseConfig, ...productionConfig}
  } else {
    // 开发环境
    return {...baseConfig, ...devConfig}
  }
})
