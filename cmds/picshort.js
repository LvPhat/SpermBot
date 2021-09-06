"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const fs_extra_1 = require("fs-extra");
exports.name = "picshort";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
function default_1({ event, botData, api, getThread, threadAdmins }) {
  if (event.type !== "message_reply")
    return api.sendMessage("Sai format", event.threadID, event.messageID);
  if (
    !event.messageReply.attachments ||
    event.messageReply.attachments.length == 0
  )
    return api.sendMessage("Sai format", event.threadID, event.messageID);
  if (event.messageReply.attachments.length > 1)
    return api.sendMessage(`Sai format`, event.threadID, event.messageID);
  if (event.contentMsg.length == 0)
    return api.sendMessage(`?`, event.threadID, event.messageID);
  let sI = event.contentMsg,
    sO = event.messageReply.attachments[0].url;
  if (getThread.shortcut.some(item => item.sI == sI))
    return api.sendMessage(
      "Shortcut này đã tồn tại.",
      event.threadID,
      event.messageID
    );
  getThread.shortcut.push({ sI, sO });
  api.sendMessage(`Đã thêm: ${sI}.`, event.threadID, event.messageID);

  return fs_extra_1.writeFileSync(
    "./data.json",
    JSON.stringify(botData, null, "\t")
  );
}
exports.default = default_1;
