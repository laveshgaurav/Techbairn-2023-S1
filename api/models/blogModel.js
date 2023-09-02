const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  userId: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: User,
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  like: {
    type: Array,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
