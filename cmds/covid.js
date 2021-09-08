
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const axios_1 = __importDefault(require("axios"));
const axios = require("axios")
exports.name = 'covid';
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, api }) {
    var { data } = await axios.get("https://meewmeew.info/covid?apikey=" + "Meew_ZrqeAktMqdILbLDR8KLXnQDMUsZYX7");
    if (data.success == false) return api.sendMessage(data.error, event.threadID);
    var world = data.world;
    var vn = data.vietnam;
  console.log(vn)
    //     return api.sendMessage(
    //     '====== Thế Giới ======\n' +
    //     `😷 Nhiễm: ${nhiemtg}\n` +
    //     `💚 Hồi phục: ${hoiphuctg} (${pthoiphuctg}%)\n` +
    //     `💀 Tử vong: ${chettg} (${ptchettg}%)\n` +
    //     '====== Việt Nam ======\n' +
    //     `😷 Nhiễm: ${nhiemvn}\n` +
    //     `💉 Đang điều trị: ${dieutrivn} (${ptdieutrivn}%)\n` +
    //     `💚 Hồi phục: ${hoiphucvn} (${pthoiphucvn}%)\n` +
    //     `💀 Tử vong: ${chetvn} (${ptchetvn}%)\n\n` +
    //     `Tin tức: ${news.vietnam}\n` +
    //     `Cập nhật: ${data.time}`, event.threadID
    // );
}
exports.default = default_1;
