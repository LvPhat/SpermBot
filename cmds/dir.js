"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const fs = require('fs-extra'); 
exports.name = 'file';
exports.adminRequired = true;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, api }) {
   let { threadID, messageID, senderID, args } = event;
   if (!args[0]) return api.sendMessage("Tải lên data/appstate ?", threadID, messageID);
   
   if (args[0] == 'data'){
   fs.copySync('./data.json', './newData.json');
    var path = "./newData.json"
    api.sendMessage({
    attachment: fs.createReadStream(path),
    body: 'Hệ thống đã tạo thành công file data.json !'}, event.threadID,() => fs.unlinkSync(path), event.messageID);
    }
   

    if (args[0] == 'appstate'){
   fs.copySync('./account.json', './newAppstate.json');
    var pathh = "./newAppstate.json"
    api.sendMessage({
    attachment: fs.createReadStream(pathh),
    body: 'Hệ thống đã tạo thành công file appstate.json !'}, event.threadID,() => fs.unlinkSync(pathh), event.messageID);
    }
}
  
exports.default = default_1;