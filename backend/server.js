const http = require("http");
const app = require("./src/app");

const server = http.createServer(app);

server.listen(process.env.PORT || 8000);
