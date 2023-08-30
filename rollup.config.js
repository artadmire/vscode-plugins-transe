/*
 * @Author: your name
 * @Date: 2023-08-25 10:34:19
 * @LastEditTime: 2023-08-29 16:15:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\vite.config.js
 */
module.exports = {
  input:'./src/extension.js', // 入口文件
  output:{
    file:'./out/extension.js', // 输出文件
    format: 'cjs', // 输出格式 amd / es / cjs / iife / umd / system
    name:'func',  // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
    sourcemap:true  // 生成bundle.js.map文件，方便调试
  }
}