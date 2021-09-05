"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
exports.name = "refresh";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
const fs_extra_1 = require("fs-extra");
async function default_1({ event, api, botID, getThread, botData }) {
  let { threadID, messageID, senderID, args } = event;
   let {
    participantIDs: allMembers,
    threadName: name,
    userInfo: info
  } = await api.getThreadInfo(event.threadID);
  var member = allMembers;
  const valueToRemove = botID;
  const filteredItems = member.filter(item => item !== valueToRemove);
  getThread.allMem = filteredItems;
  getThread.name = name;
  getThread.infoUser = info;
  fs_extra_1.writeFileSync("./data.json", JSON.stringify(botData, null, "\t"));
  api.sendMessage("Đã làm mới dữ liệu của nhóm.", threadID, messageID )
 }
  
  
exports.default = default_1;