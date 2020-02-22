const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const usersRoute = require("./routes/users.js");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/users", usersRoute);

server.get("/", (req, res) => {
    res.send("<h1>Hello from After Hours API</h1>");
});

module.exports = server;
