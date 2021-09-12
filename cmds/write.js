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


}

exports.default = default_1;
