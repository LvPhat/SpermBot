"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const fs_extra_1 = require("fs-extra");
exports.name = 'glitch';
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, api, getThread, botID, threadAdmins, botData }) {
    
    if(event.args.length == 0){
    if (botData.uptime.length == 0) return api.sendMessage('Hiện chưa có project nào được cài đặt uptime.', event.threadID, event.messageID);
    let num = 0;
    let list = '';
    for (const i in botData.uptime){
          list += `\n${num +=1}/ ${botData.uptime[i].replace(botData.uptime[i].slice(8, 13), '*')}`;
    };
      return api.sendMessage(`Hiện có ${botData.uptime.length} project đang cài đặt uptime:\n${list}`, event.threadID, event.messageID);
  };

    if(event.args[0] == 'add'){
     if (!botData.admins.includes(event.senderID)) return api.sendMessage('Quyền lồn biên giới.', event.threadID, event.messageID);
     var project = event.contentMsg.slice(3, event.contentMsg.length)
     if (!project) return api.sendMessage('Hãy nhập project cần uptime !.', event.threadID, event.messageID);
     botData.uptime.push(project)
     api.sendMessage('Done.', event.threadID, event.messageID);
     return fs_extra_1.writeFileSync('./data.json', JSON.stringify(botData, null, '\t'));
    };
    

    if (event.args[0] == "del"){
     if (!botData.admins.includes(event.senderID)) return api.sendMessage('Quyền lồn biên giới.', event.threadID, event.messageID);
     if (isNaN(event.args[1])) return out('Hãy nhập số thứ tự của project cần xóa.');
        let getRule = botData.uptime[parseInt(event.args[1]) - 1];
        if (!getRule) return out(`Không có project mang số thứ tự ${event.args[0]}.`, event.threadID, event.messageID);
        botData.uptime.splice(botData.uptime.indexOf(getRule), 1);
        api.sendMessage(`Đã xóa project có tên: ${getRule.replace(getRule.slice(8,13), '*')}.`, event.threadID, event.messageID);
       return fs_extra_1.writeFileSync('./data.json', JSON.stringify(botData, null, '\t'));
   
    }




}
  
exports.default = default_1;
