const mongoose = require("mongoose");

const connectionUrl =
  "mongodb+srv://sid:1234qwer@cluster0.lswp6.mongodb.net/url-shortner?retryWrites=true&w=majority";

mongoose.connect(
  connectionUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (!err) {
      console.log("connected to mongodb");
    }
  }
);
