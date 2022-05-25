const mongoose = require("mongoose");

const connectionUrl = process.env.DATABASE_URL;

mongoose.connect(
  connectionUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("connected to mongodb");
    }
  }
);
