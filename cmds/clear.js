"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const fs_extra_1 = require("fs-extra");
exports.name = "clear";
exports.adminRequired = true;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, botData, api, getThread }) {
  const disk = require("diskusage");
  const { free } = await disk.check('/app');
  console.log(free);
}
exports.default = default_1;
