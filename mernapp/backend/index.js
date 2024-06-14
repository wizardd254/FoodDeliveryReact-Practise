const express = require("express");
const app = express();
const cors = require("cors");

const mongoDB = require("./db");
const port = 5000;

mongoDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use(cors());

app.use("/api", require("./routes/CreateUser"));

app.use("/api", require("./routes/DisplayData"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
