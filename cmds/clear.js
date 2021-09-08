"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const fs_extra_1 = require("fs-extra");
exports.name = "stas";
exports.adminRequired = true;
exports.threadAdminRequired = false;
exports.location = __filename;
const secondsToHms_1 = __importDefault(require("../declare/modules/secondsToHms"));
async function default_1({ event, botData, api, getThread }) {
  function byte2mb(bytes) {
  //const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)}`;
 }
  const disk = require("diskusage");
  const { free } = await disk.check('/app');
  const { cpu, time, cpuTemperature, currentLoad, memLayout, diskLayout, mem, osInfo } = require('systeminformation');
  var { uptime } = await time();
  const pidusage = await require('pidusage')(process.pid)
  
  const ramF = 512 - byte2mb(pidusage.memory) 
  const diskF = free / 1024
  var msg = `GLITCH\n_______________\n`
  api.sendMessage( + "MB", event.threadID)
}
exports.default = default_1;
