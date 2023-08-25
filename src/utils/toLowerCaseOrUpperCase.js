/*
 * @Author: your name
 * @Date: 2023-08-21 13:48:05
 * @LastEditTime: 2023-08-21 13:48:05
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\toLowerCaseOrUpperCase.js
 */
const vscode = require('vscode');


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
    const newWord = command == 'toLowerCase' ? word.toLowerCase() : word.toUpperCase();
    //替换原来文本
    editor.edit((editBuilder) => {
      editBuilder.replace(selection, newWord);
    });
  }
}
