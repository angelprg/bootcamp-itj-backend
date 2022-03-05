const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ text: "Hello world" });
});

app.get("/about-us", (req, res) => {
  res.json({ text: "About us" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
