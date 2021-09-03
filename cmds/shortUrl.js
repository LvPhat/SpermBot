"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
exports.name = "shorturl";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, botData, api }) {
   if (event.type != "message_reply")
   return api.sendMessage(
      "Bạn cần reply vào đường link cần rút gọn.",
      event.threadID,
      event.messageID
    ); 
  var linkNew = await require("tinyurl").shorten(event.contentMsg || event.messageReply.body);
  api.sendMessage(linkNew, event.threadID, event.messageID);
}
exports.default = default_1;
