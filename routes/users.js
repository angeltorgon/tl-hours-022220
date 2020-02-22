const express = require("express");
const usersRoute = express.Router();
const { userBodyCheck } = require("../middleware/userBodyCheck.js");

const User = require("../model/usersModel.js");

usersRoute.get("/", (req, res) => {
    console.log("userBodyCheck - ", userBodyCheck)
    const users = User.getAll();
    res.status(200).json({data: users});
});

usersRoute.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = User.getById(id);
    res.status(200).json({data: user});
});

usersRoute.post("/", userBodyCheck, (req, res) => {
    const user = req.body
    const id = User.insert(user);
    res.status(200).json({id});
});

usersRoute.put("/:id", (req, res) => {
    const user = req.body;
    const id = parseInt(req.params.id);
    
    const users = User.update(id, user);

    res.status(200).json({users});
});

module.exports = usersRoute;
