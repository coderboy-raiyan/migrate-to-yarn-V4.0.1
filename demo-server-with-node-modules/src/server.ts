import mongoose from "mongoose";
import app from "./app";

const PORT = 5000;

const bootstrap = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server connection failed");
  }
};

bootstrap();
