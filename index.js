const server = require("./server.js");


const port = 5000

server.listen(port, (req, res) => {
    console.log(`Listening on port: ${port}`);
});


