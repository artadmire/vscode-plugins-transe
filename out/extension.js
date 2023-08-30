'use strict';

/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end.
 * @param {number} [end=array.length] The end position. A negative index will be treated as an offset from the end.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */
 function slice(array, start, end) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return []
  }
  start = start == null ? 0 : start;
  end = end === undefined ? length : end;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result
}

/*
 * @Author: your name
 * @Date: 2023-08-25 09:35:08
 * @LastEditTime: 2023-08-25 09:35:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\castSlice.js
 */

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  const { length } = array;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : slice(array, start, end)
}

/*
 * @Author: your name
 * @Date: 2023-08-21 16:39:44
 * @LastEditTime: 2023-08-21 16:39:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\ss.js
 */
/** Used to compose unicode character classes. */
const rsAstralRange$2 = '\\ud800-\\udfff';
const rsComboMarksRange$2 = '\\u0300-\\u036f';
const reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f';
const rsComboSymbolsRange$2 = '\\u20d0-\\u20ff';
const rsComboMarksExtendedRange$2 = '\\u1ab0-\\u1aff';
const rsComboMarksSupplementRange$2 = '\\u1dc0-\\u1dff';
const rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2 + rsComboMarksExtendedRange$2 + rsComboMarksSupplementRange$2;
const rsVarRange$2 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
const rsZWJ$2 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
const reHasUnicode = RegExp(`[${rsZWJ$2 + rsAstralRange$2 + rsComboRange$2 + rsVarRange$2}]`);

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string)
}

/*
 * @Author: your name
 * @Date: 2023-08-25 09:38:22
 * @LastEditTime: 2023-08-25 09:38:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\a.js
 */
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
 function asciiToArray(string) {
  return string.split('')
}

/*
 * @Author: your name
 * @Date: 2023-08-21 16:35:53
 * @LastEditTime: 2023-08-21 16:35:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\a.js
 */
/** Used to compose unicode character classes. */
const rsAstralRange$1 = '\\ud800-\\udfff';
const rsComboMarksRange$1 = '\\u0300-\\u036f';
const reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f';
const rsComboSymbolsRange$1 = '\\u20d0-\\u20ff';
const rsComboMarksExtendedRange$1 = '\\u1ab0-\\u1aff';
const rsComboMarksSupplementRange$1 = '\\u1dc0-\\u1dff';
const rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1 + rsComboMarksExtendedRange$1 + rsComboMarksSupplementRange$1;
const rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
const rsAstral = `[${rsAstralRange$1}]`;
const rsCombo$1 = `[${rsComboRange$1}]`;
const rsFitz$1 = '\\ud83c[\\udffb-\\udfff]';
const rsModifier$1 = `(?:${rsCombo$1}|${rsFitz$1})`;
const rsNonAstral$1 = `[^${rsAstralRange$1}]`;
const rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}';
const rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]';
const rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
const reOptMod$1 = `${rsModifier$1}?`;
const rsOptVar$1 = `[${rsVarRange$1}]?`;
const rsOptJoin$1 = `(?:${rsZWJ$1}(?:${[rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|')})${rsOptVar$1 + reOptMod$1})*`;
const rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1;
const rsNonAstralCombo = `${rsNonAstral$1}${rsCombo$1}?`;
const rsSymbol = `(?:${[rsNonAstralCombo, rsCombo$1, rsRegional$1, rsSurrPair$1, rsAstral].join('|')})`;

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
const reUnicode = RegExp(`${rsFitz$1}(?=${rsFitz$1})|${rsSymbol + rsSeq$1}`, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || []
}

/*
 * @Author: your name
 * @Date: 2023-08-21 16:09:20
 * @LastEditTime: 2023-08-21 16:35:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\stringToArray.js
 */

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string)
}

/*
 * @Author: your name
 * @Date: 2023-08-21 14:50:08
 * @LastEditTime: 2023-08-21 16:09:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\s.js
 */

/**
 * Creates a function like `lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return (string) => {
    if (!string) {
      return ''
    }

    const strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    const chr = strSymbols
      ? strSymbols[0]
      : string[0];

    const trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing
  }
}

/*
 * @Author: your name
 * @Date: 2023-08-25 09:36:47
 * @LastEditTime: 2023-08-25 09:37:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\q.js
 */

/**
 * Converts the first character of `string` to upper case.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
const upperFirst = createCaseFirst('toUpperCase');

/*
 * @Author: your name
 * @Date: 2023-08-21 14:19:02
 * @LastEditTime: 2023-08-21 14:19:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\2.js
 */
/** Used to compose unicode character classes. */
const rsAstralRange = '\\ud800-\\udfff';
const rsComboMarksRange = '\\u0300-\\u036f';
const reComboHalfMarksRange = '\\ufe20-\\ufe2f';
const rsComboSymbolsRange = '\\u20d0-\\u20ff';
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff';
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff';
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
const rsDingbatRange = '\\u2700-\\u27bf';
const rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff';
const rsMathOpRange = '\\xac\\xb1\\xd7\\xf7';
const rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
const rsPunctuationRange = '\\u2000-\\u206f';
const rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
const rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
const rsVarRange = '\\ufe0e\\ufe0f';
const rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
const rsApos = "['\u2019]";
const rsBreak = `[${rsBreakRange}]`;
const rsCombo = `[${rsComboRange}]`;
const rsDigit = '\\d';
const rsDingbat = `[${rsDingbatRange}]`;
const rsLower = `[${rsLowerRange}]`;
const rsMisc = `[^${rsAstralRange}${rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange}]`;
const rsFitz = '\\ud83c[\\udffb-\\udfff]';
const rsModifier = `(?:${rsCombo}|${rsFitz})`;
const rsNonAstral = `[^${rsAstralRange}]`;
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
const rsUpper = `[${rsUpperRange}]`;
const rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
const rsMiscLower = `(?:${rsLower}|${rsMisc})`;
const rsMiscUpper = `(?:${rsUpper}|${rsMisc})`;
const rsOptContrLower = `(?:${rsApos}(?:d|ll|m|re|s|t|ve))?`;
const rsOptContrUpper = `(?:${rsApos}(?:D|LL|M|RE|S|T|VE))?`;
const reOptMod = `${rsModifier}?`;
const rsOptVar = `[${rsVarRange}]?`;
const rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join('|')})${rsOptVar + reOptMod})*`;
const rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])';
const rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])';
const rsSeq = rsOptVar + reOptMod + rsOptJoin;
const rsEmoji = `(?:${[rsDingbat, rsRegional, rsSurrPair].join('|')})${rsSeq}`;

const reUnicodeWords = RegExp([
  `${rsUpper}?${rsLower}+${rsOptContrLower}(?=${[rsBreak, rsUpper, '$'].join('|')})`,
  `${rsMiscUpper}+${rsOptContrUpper}(?=${[rsBreak, rsUpper + rsMiscLower, '$'].join('|')})`,
  `${rsUpper}?${rsMiscLower}+${rsOptContrLower}`,
  `${rsUpper}+${rsOptContrUpper}`,
  rsOrdUpper,
  rsOrdLower,
  `${rsDigit}+`,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWords)
}

/*
 * @Author: your name
 * @Date: 2023-08-21 14:15:40
 * @LastEditTime: 2023-08-21 14:19:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\words.js
 */

const hasUnicodeWord = RegExp.prototype.test.bind(
  /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
);

/** Used to match words composed of alphanumeric characters. */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function asciiWords(string) {
  return string.match(reAsciiWord)
}

/**
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern) {
  if (pattern === undefined) {
    const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    return result || []
  }
  return string.match(pattern) || []
}

/*
 * @Author: your name
 * @Date: 2023-08-21 14:09:22
 * @LastEditTime: 2023-08-21 14:09:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\getTag.js
 */
const toString$1 = Object.prototype.toString;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString$1.call(value)
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value) {
  const type = typeof value;
  return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
}

/*
 * @Author: your name
 * @Date: 2023-08-21 13:57:28
 * @LastEditTime: 2023-08-21 14:14:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\toString.js
 */

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
function toString(value) {
  if (value == null) {
    return ''
  }
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return `${value.map((other) => other == null ? other : toString(other))}`
  }
  if (isSymbol(value)) {
    return value.toString()
  }
  const result = `${value}`;
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}

/*
 * @Author: your name
 * @Date: 2023-08-21 14:48:23
 * @LastEditTime: 2023-08-25 09:38:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\camelCase.js
 */

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
const camelCase = (string) => (
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => {
    word = word.toLowerCase();
    return result + (index ? upperFirst(word) : word)
  }, '')
);

/*
 * @Author: your name
 * @Date: 2023-08-21 13:51:10
 * @LastEditTime: 2023-08-21 13:51:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\snakeCase.js
 */

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @see camelCase, lowerCase, kebabCase, startCase, upperCase, upperFirst
 * @example
 *
 * snakeCase('Foo Bar')
 * // => 'foo_bar'
 *
 * snakeCase('fooBar')
 * // => 'foo_bar'
 *
 * snakeCase('--FOO-BAR--')
 * // => 'foo_bar'
 *
 * snakeCase('foo2bar')
 * // => 'foo_2_bar'
 */
const snakeCase = (string) => (
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result + (index ? '_' : '') + word.toLowerCase()
  ), '')
);

/*
 * @Author: your name
 * @Date: 2023-08-21 13:48:05
 * @LastEditTime: 2023-08-29 14:21:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vscode-plugins\demo\src\utils\toLowerCaseOrUpperCase.js
 */
const vscode$1 = require('vscode');
 //转大小写
function toLowerCaseOrUpperCase(command) {
  //获取activeTextEditor
  const editor = vscode$1.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const selection = editor.selection;
    //获取选中单词文本
    const word = document.getText(selection);
    //文本转大小写
    const newWord = translate(command)(word);
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
    toCameCase: (text) => camelCase(text),
    toSnakeCase: (text) => snakeCase(text)
  };
  const fun = strategy[command];
  if(typeof fun  !== 'function') {
    return (word) => word
  }
  return fun;
  
}

/*
 * @Author: Gaoxm
 * @Date: 2023-08-21 09:46:31
 * @LastEditTime: 2023-08-29 16:55:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \transe\extension.js
 */


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
  let cameCase = vscode.commands.registerCommand('extension.toCameCase',toCameCase);
  let snakeCase = vscode.commands.registerCommand('extension.toSnakeCase',toSnakeCase);
  
  context.subscriptions.push(lowerCase);
  context.subscriptions.push(upperCase);
  context.subscriptions.push(cameCase);
  context.subscriptions.push(snakeCase);

}

 
// this method is called when your extension is deactivated
function deactivate() {}

 
module.exports = {
  activate,
  deactivate
};
//# sourceMappingURL=extension.js.map
