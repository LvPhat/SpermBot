"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
exports.name = "ms";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, api, botID, getThread, getUserByLink }) {
  let { threadID, messageID, senderID } = event;
  const timeStart = Date.now();
	return api.sendMessage("", event.threadID, () => api.sendMessage("Ping: " + (Date.now() - timeStart) + "ms", event.threadID, event.messageID));
   }
  
exports.default = default_1;
