 "use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const subscribe_1 = __importDefault(require("../../events/subscribe"));
const unsubscribe_1 = __importDefault(require("../../events/unsubscribe"));
const fs_extra_1 = require("fs-extra");
function default_1({ api, botData, event }) {
  
  async function refresh() {
   let getData = botData.threads.some(item => item.id == event.threadID);
    if(!getData) return;
    let {
      participantIDs: allMembers,
      threadName: nameThread
    } = await api.getThreadInfo(event.threadID);
    getData.allMem = allMembers;
    getData.name = nameThread;
    return fs_extra_1.writeFileSync(
      "./data.json",
      JSON.stringify(botData, null, "\t")
    );
  }
  
  return async function(event) {
    switch (event.logMessageType) {
      case "log:subscribe":
        await subscribe_1.default({ event, api, botData, refresh });
        break;
      case "log:unsubscribe":
        await unsubscribe_1.default({ event, api, refresh });
        break;
    }
  };
}
exports.default = default_1;
