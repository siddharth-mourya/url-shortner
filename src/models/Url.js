const mongoose = require("mongoose");

const URLSchema = mongoose.Schema(
  {
    urlShortCode: String,
    actualUrl: String,
    shortenedUrl: String
  },
  {
    timestamps: true
  }
);
const Url = mongoose.model("Url", URLSchema, 'Url');
module.exports = Url;
