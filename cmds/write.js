"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
exports.name = "write";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
const axios = require("axios");
const fs = require("fs");
async function default_1({
  event,
  api,
  botID,
  getThread,
  getUserByLink,
  getInfo
}) {
  const handwritten = require('handwritten.js')
  const rawtext = event.contentMsg;
  handwritten(rawtext).then((converted) => {
    converted.pipe(fs.createWriteStream(__dirname + "/ct.pdf"))
    var img = [];
    img.push(fs.createReadStream(__dirname + "/ct.pdf"));
    var msg = {
      body: ``,
      attachment: img
    };
  api.sendMessage(msg, event.threadID)
  });

}

exports.default = default_1;
