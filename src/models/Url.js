import mongoose from "mongoose";

const URLSchema = mongoose.Schema(
  {
    urlShortCode: String,
    actualUrl: String,
    shortenedUrl: String,
  },
  {
    timestamps: true,
  }
);
export const Url = mongoose.model("Url", URLSchema, "Url");
