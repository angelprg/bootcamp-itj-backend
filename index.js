const express = require("express");
const cors = require("cors")
const postsRouter = require("./src/routes/posts");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
app.use("/posts", postsRouter);
// app.use((error, req, res, next) => {
//   console.log("MIDDLEWARE FUNCTION!");
//   console.error(error);
//   res.status(500).json(error);
// });

const connectDb = () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
};

console.log(process.env.DB_URI);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDb();
});
