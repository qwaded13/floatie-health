const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

let server = express();
server.use(bodyParser.json());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send("hello, world");
});

let port = 3000;

server.listen(port, () => {
  console.log(`Server listening on http://localhost:3000`);
});
