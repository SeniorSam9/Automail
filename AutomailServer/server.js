const express = require("express");
const server = express();
const logger = require("morgan");
server.use(logger("tiny"));
const port = process.env.PORT || 3200;

server.get("/", (req, res) => {
  res.send();
});

server.listen(port, () => {
  console.log(`⚡ Server is listening on port: ${port}!`);
});
