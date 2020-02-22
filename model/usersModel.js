const data = require("../data/users.js");

function getAll() {
    return data;
}

function insert(user) {
    const id = Date.now();
    user.id = id;
    data.push(user);
    return id;
}

function update(id, updatedUser) {
    const updatedData = data.map((user) => {
        if(user.id === id) {
            return updatedUser;
        } 

        return user
    });

    return updatedData;
}

function getById(id) {
    const user = data.filter(user => user.id === id);
    return user;
}

const User = {
    getAll,
    insert,
    getById,
    update
}

module.exports = User;
