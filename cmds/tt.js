"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const fs_extra_1 = require("fs-extra");
exports.name = "tt";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({
  event,
  botData,
  api,
  getThread,
  botID,
  threadAdmins
}) {
    let { threadID, messageID, senderID, args } = event;
    function out(data) {
    api.sendMessage(data, threadID, messageID);
  }
    var IDs = Object.keys(event.mentions);
    var all = getThread.allMem;
    let msg = "";
    let num = 0;
    let rank = [];
   
   if(!all) return out("Nhóm này chưa có trong data.");
   for (let id of all) {
   var count = 0
   var name = "Người dùng Facebook"
   !getThread.infoUser.some(item => item.id == id) ? "" : name = getThread.infoUser.find(item => item.id == id).name;
   !getThread.dataUser[id] ? "" : count = getThread.dataUser[id].count
   rank.push({
    id: id,
    count: count,
    name: name
  });
}
   await rank.sort((a, b) => b.count - a.count);


  
  

if (args[0] == "reset") {
    if (!threadAdmins.includes(senderID)) return out("Quyền lồn biên giới.");
    if (getThread) {
      var allMembers = getThread.allMem;
      let data = {};
      allMembers.forEach(i => {
        data[i] = {
          count: 0
        };
      });
      getThread.dataUser = data;
      fs_extra_1.writeFileSync(
        "./data.json",
        JSON.stringify(botData, null, "\t")
      );
      out("Đã reset dữ liệu đếm tin nhắn của nhóm.");
    }
  }

  if(IDs.length != 0){
    var msg_2 = ""
    for (let i in IDs){
        var name = event.mentions[IDs[i]];
        let top = rank.findIndex(info => parseInt(info.id) == IDs[i]) + 1;
        msg_2 += name +
            " đã có " +
            getThread.dataUser[IDs[i]].count +
            " tin nhắn ở nhóm và xếp thứ " +top+".\n";
    }
    return out(msg_2);
  }else if(event.args[0] == "all"){
      for (var i = 0; i < all.length; i++) {
          let getUser = rank[i];
          msg += `\n${i + 1}/ ${getUser.name}: ${getUser.count} tin nhắn.`;
        }
        try {
          out(msg);
        } catch (e) {
          out("Không thể xem tt vào lúc này !");
        }
  }else{
      let top = rank.findIndex(info => parseInt(info.id) == senderID) + 1;
      var msg_1 = "Bạn đã có " + getThread.dataUser[senderID].count + " tin nhắn ở nhóm và xếp thứ "+top+".\n";
      return out(msg_1);
  }
}
exports.default = default_1;
