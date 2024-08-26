const express = require('express')

const server = express()

server.get('https://hiring.reachinbox.xyz/api/v1/onebox/list',(request, response) => {
    response.send(response)
})
server.listen(3000, () => console.log("running server"));
