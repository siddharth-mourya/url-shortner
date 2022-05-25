const express = require("express");
const cors = require("cors");
require("./db/dbfile");

const app = express();
app.use(cors());
app.use(express.json());
app.use(require('./router/url-shortner'))

app.get("/", (req, res) => {
  res.send("This is awesome! Shortening URLs for ya");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
