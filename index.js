const server = require('./api/server.js');



const PORT = 3333;
server.listen(PORT, (req, res) => {
    console.log(`
        *** Hello, this server is listening on port ${PORT} ***
    `)
})