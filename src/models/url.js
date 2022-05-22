const mongoose = require("mongoose");

const URLSchema = mongoose.Schema(
  {
    urlShortCode: String,
    actualURL: String,
    shortenedUrl: String
  },
  {
    timestamps: true
  }
);
const URL = mongoose.model("URL", URLSchema);
module.exports = URL;
