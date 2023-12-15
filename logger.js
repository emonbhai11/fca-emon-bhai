'use strict';
/* eslint-disable linebreak-style */

const chalk = require('chalk');
const gradient = require('gradient-string');
var isHexcolor = require('is-hexcolor');
var getText = function(/** @type {string[]} */ ...Data) {
	var Main = (Data.splice(0,1)).toString();
		for (let i = 0; i < Data.length; i++) Main = Main.replace(RegExp(`%${i + 1}`, 'g'), Data[i]);
	return Main;
};
/**
 * @param {any} obj
 */
function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

module.exports = {
	Normal: function(/** @type {string} */ Str, /** @type {() => any} */ Data ,/** @type {() => void} */ Callback) {
		if (isHexcolor(global.Fca.Require.FastConfig.MainColor) != true) {
			this.Warning(getText(global.Fca.Require.Language.Index.InvaildMainColor,global.Fca.Require.FastConfig.MainColor),process.exit(0));
		}
		console.log(gradient('orange', 'yellow')(`${global.Fca.Require.FastConfig.MainName || '[ FCA-PROJECT-ABDULLA ]'} > `) + Str);
		if (getType(Data) == 'Function' || getType(Data) == 'AsyncFunction') {
			return Data();
		}
		if (Data) {
			return Data;
		}
		if (getType(Callback) == 'Function' || getType(Callback) == 'AsyncFunction') {
			Callback();
		}
		else return Callback;
	},
	Warning: function(/** @type {unknown} */ str, /** @type {() => void} */ callback) {
		console.log(gradient('orange', 'yellow')('[ FCA-WARNING ] > ') + chalk.yellow(str));
		if (getType(callback) == 'Function' || getType(callback) == 'AsyncFunction') {
			callback();
		}
		else return callback;
	},
	Error: function(/** @type {unknown} */ str, /** @type {() => void} */ callback) {
		if (!str) {
			console.log(gradient('orange', 'yellow')('[ FCA-ERROR ] > ') + chalk.red("Already Faulty, Please Contact: Facebook.com/Lazic.Kanzu"));
		}
		console.log(gradient('orange', 'yellow')('[ FCA-ERROR ] > ') + chalk.red(str));
		if (getType(callback) == 'Function' || getType(callback) == 'AsyncFunction') {
			callback();
		}
		else return callback;
	},
	Success: function(/** @type {unknown} */ str, /** @type {() => void} */ callback) {
		console.log(chalk.hex('#9900FF').bold(`${global.Fca.Require.FastConfig.MainName || '[ FCA-PROJECT-ABDULLA ]'} > `) + chalk.green(str));
		if (getType(callback) == 'Function' || getType(callback) == 'AsyncFunction') {
			callback();
		}
		else return callback;
	},
	Info: function(/** @type {unknown} */ str, /** @type {() => void} */ callback) {
		console.log(chalk.hex('#9900FF').bold(`${global.Fca.Require.FastConfig.MainName || '[ FCA-PROJECT-ABDULLA ]'} > `) + chalk.blue(str));
		if (getType(callback) == 'Function' || getType(callback) == 'AsyncFunction') {
			callback();
		}
		else return callback;
	}
};
