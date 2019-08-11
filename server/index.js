const server = require("./server");

let port = 3000;

server.listen(port, () => {
  console.log(`Server listening on http://localhost:3000`);
});
