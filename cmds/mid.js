"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
exports.name = "fes";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, api, botID, getThread }) {
 let { threadID, messageID, senderID } = event;
    const ms = Date.parse("Sep 20, 2021 17:00:00") - Date.parse(new Date());
    const seconds = Math.floor((ms/1000)%60);
    const minutes = Math.floor((ms/1000/60)%60);
    const hours = Math.floor((ms/(1000*60*60))%24);
    const days = Math.floor(ms/(1000*60*60*24));
   
    const mss = Date.parse("Jan 31, 2022 17:00:00") - Date.parse(new Date());
    const secondss = Math.floor((mss/1000)%60);
    const minutess = Math.floor((mss/1000/60)%60);
    const hourss = Math.floor((mss/(1000*60*60))%24);
    const dayss = Math.floor(mss/(1000*60*60*24));
   

    return api.sendMessage(`Sắp đến TẾT TRUNG THU 2021 rồi! Chỉ còn...\n${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây.\n______________________________\nTẾT NHÂM DẦN(2022) cách chúng ta xa lắm...\n${dayss} ngày ${hourss} tiếng ${minutess} phút ${secondss} giây.`, event.threadID, event.messageID);

}
  
exports.default = default_1;