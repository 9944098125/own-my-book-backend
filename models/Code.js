const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const CodeModel = mongoose.model("CodeModel", codeSchema);

module.exports = CodeModel;
