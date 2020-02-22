const express = require("express");

const usersRoute = express.Router();

usersRoute.get((req, res) => {
    res.status(200).json({message: "Hello from our API"});
});


module.exports = usersRoute;
