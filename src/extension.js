/*
 * @Author: Gaoxm
 * @Date: 2023-08-21 09:46:31
 * @LastEditTime: 2023-08-25 20:50:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \demo\extension.js
 */
import { toLowerCaseOrUpperCase } from './utils/toLowerCaseOrUpperCase'


const vscode = require('vscode');
 
function toLowerCase() {
  toLowerCaseOrUpperCase('toLowerCase');
}
 
function toUpperCase() {
  toLowerCaseOrUpperCase('toUpperCase');
}

function toCameCase() {
  toLowerCaseOrUpperCase('toCameCase');
}
function toSnakeCase() {
  toLowerCaseOrUpperCase('toSnakeCase');
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let lowerCase = vscode.commands.registerCommand('extension.toLowerCase',toLowerCase);
  let upperCase = vscode.commands.registerCommand('extension.toUpperCase',toUpperCase);
  let cameCase = vscode.commands.registerCommand('extension.cameCase',toCameCase);
  let snakeCase = vscode.commands.registerCommand('extension.snakeCase',toSnakeCase);
  
  context.subscriptions.push(lowerCase);
  context.subscriptions.push(upperCase);
  context.subscriptions.push(cameCase);
  context.subscriptions.push(snakeCase);

}
 

 
// this method is called when your extension is deactivated
function deactivate() {}
 
module.exports = {
  activate,
  deactivate,
};