"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
exports.name = "stas";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
var getTime = require("time-stamp");
async function default_1({ event, api, botID, getThread }) {
  var axios = require("axios");
  let { threadID, messageID, senderID } = event;
  const node = process.version;
  api.sendMessage(
}

exports.default = default_1;
