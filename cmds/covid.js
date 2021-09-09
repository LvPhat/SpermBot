
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const axios_1 = __importDefault(require("axios"));
const axios = require("axios");
exports.name = 'covid';
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, api }) {
  var { data } = await axios.get("https://meewmeew.info/covid?apikey=Meew_UwbZldigKMeCrqWMiw7UbIPDOfDqOB");
    if (data.success == false) return api.sendMessage(data.error, event.threadID);
    var world = data.world;
    var vn = data.vietnam;
  console.log(vn)
      
}
exports.default = default_1;