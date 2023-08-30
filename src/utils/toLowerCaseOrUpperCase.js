/*
 * @Author: your name
 * @Date: 2023-08-21 13:48:05
 * @LastEditTime: 2023-08-29 14:21:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\toLowerCaseOrUpperCase.js
 */
const vscode = require('vscode');
import cameCase from './camelCase.js';
import snakeCase from './snakeCase.js';
 //转大小写
export function toLowerCaseOrUpperCase(command) {
  //获取activeTextEditor
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const selection = editor.selection;
    //获取选中单词文本
    const word = document.getText(selection);
    //文本转大小写
    const newWord = translate(command)(word)
    //替换原来文本
    editor.edit((editBuilder) => {
      editBuilder.replace(selection, newWord);
    });
  }
}

function translate(command) {
  const strategy = {
    toLowerCase: (text) => text.toLowerCase(),
    toUpperCase: (text) => text.toUpperCase(),
    toCameCase: (text) => cameCase(text),
    toSnakeCase: (text) => snakeCase(text)
  }
  const fun = strategy[command]
  if(typeof fun  !== 'function') {
    return (word) => word
  }
  return fun;
  
}