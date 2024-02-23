const mongoose = require("mongoose");
const messageModel = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "USer" },
  content: { type: String, trim: true },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "USer" },
});

const Message = mongoose.model("Message",messageModel)
module.exports = Message

