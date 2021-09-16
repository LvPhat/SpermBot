"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const axios_1 = __importDefault(require("axios"));
const axios = require("axios")
const cheerio_1 = __importDefault(require("cheerio"));
const fs_extra_1 = require("fs")
exports.name = "code";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, api }) {
  if (event.args[0] == 'edit'){
  var newCode = event.contentMsg.slice((event.args[1].length + event.args[0].length), event.contentMsg.length);
  fs_extra_1.writeFile(event.args[1], newCode,  function(err) {
   api.sendMessage("ok", event.threadID)
  })
  }
  
  
  else if(event.args[0] == 'read'){
  var data =  await fs_extra_1.readFile(`${__dirname}/${event.args[1]}.js`,'utf-8',(err, data) => {
  if(err) return api.sendMessage(`Đã xảy ra lỗi khi đọc lệnh "${event.args[1]}"`, event.threadID, event.messageID)
    api.sendMessage(data, event.threadID, event.messageID)
  })
 }

}
exports.default = default_1;
