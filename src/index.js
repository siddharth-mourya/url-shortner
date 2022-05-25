import express from "express";
import cors from "cors";
import { connectDatabase } from "./db/dbfile.js";
import urlRouter from "./router/url-shortner.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlRouter);

connectDatabase();

app.get("/", (req, res) => {
  res.send("This is awesome! Shortening URLs for ya");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
