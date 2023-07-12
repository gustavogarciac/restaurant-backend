const express = require("express")
const server = express()
require('dotenv').config()
const routes = require("./routes")

server.use(express.json())
server.use(routes)

const PORT = process.env.PORT || 3333
server.listen(PORT, () => console.log(`🚀 Servidor inicializado em http:localhost/${PORT}`))