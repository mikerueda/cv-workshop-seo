const express = require('express')
const prerender = require('prerender-node')
const path = require('path')
const port = 8080
  
const server = express()

server.use(express.static(path.join(__dirname, 'build')))
server.use(prerender)

server.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

server.listen(port, ()=>{
  console.log(`running like a campeona on ${port}`)
})