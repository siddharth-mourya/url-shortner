const mongoose = require("mongoose");

const connectionUrl =
  "mongodb+srv://<username>:<password>@cluster0.lswp6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  ssl: true,
  sslValidate: true,
  sslCA: `${__dirname}/cacertificate.crt`
});
