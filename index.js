const express = require("express");
const postsRouter = require("./src/routes/posts");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/posts", postsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
