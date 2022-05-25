import mongoose from "mongoose";

export const connectDatabase = () => {
  const connectionUrl = process.env.DATABASE_URL;
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
};
