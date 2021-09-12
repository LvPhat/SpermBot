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
const GIFEncoder = require('gif-encoder-2')
const { createCanvas } = require('canvas')
const { writeFile } = require('fs')
const path = require('path')
 
const size = 200
const half = size / 2
 
const canvas = createCanvas(size, size)
const ctx = canvas.getContext('2d')
 
function drawBackground() {
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, size, size)
}
 
const encoder = new GIFEncoder(size, size)
encoder.setDelay(500)
encoder.start()
 
drawBackground()
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, half, half)
encoder.addFrame(ctx)

 
drawBackground()
ctx.fillStyle = '#FFFF00'
ctx.fillRect(0, 0, half, half)
encoder.addFrame(ctx)
 
drawBackground()
ctx.fillStyle = '#00ff00'
ctx.fillRect(half, 0, half, half)
encoder.addFrame(ctx)
 
drawBackground()
ctx.fillStyle = '#0000ff'
ctx.fillRect(half, half, half, half)
encoder.addFrame(ctx)
 
drawBackground()
ctx.fillStyle = '#ffff00'
ctx.fillRect(0, half, half, half)
encoder.addFrame(ctx)
 
encoder.finish()
 
const buffer = encoder.out.getData()
 
writeFile(path.join(__dirname, 'beginner.gif'), buffer, error => {
  // gif drawn or error
  console.log(error)
})
 var img = [];
    img.push(fs.createReadStream(__dirname + "/beginner.gif"));

    var msg = {
      body:"",
      attachment: img
    };
  api.sendMessage(msg, event.threadID)
}

exports.default = default_1;
