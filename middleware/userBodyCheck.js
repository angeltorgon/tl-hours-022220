const userBodyCheck = (req, res, next) => {
    const user = req.body;
    if(user && user.name && user.age) {
        next();
    } else {
        res.status(400).json({message: "Missing required fields."});
    }
};

module.exports = {
    userBodyCheck,
};
