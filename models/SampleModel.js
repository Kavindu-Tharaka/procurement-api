const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  tagname: {
    type: String,
    trim: true,
    required: [true, "Tag Name is Mandatory!"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Tag = mongoose.model("tag", tagSchema);
module.exports = Tag;
