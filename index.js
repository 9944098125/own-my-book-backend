const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

async function connectDB() {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB Data Base");
  } catch (err) {
    throw err;
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Data Base disconnecting...");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB Data Base connecting...");
});

app.use("/api/users", userRoute);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  connectDB();
  console.log(`App is now running on ${port}`);
});
