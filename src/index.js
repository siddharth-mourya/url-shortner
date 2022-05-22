const express = require("express");
const cors = require("cors");
const URL = require("./models/Url");
require("./db/dbfile");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is awesome! Shortening URLs for ya");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
