const express= require ('express')
const app=express()
const http= require('http')
const cors=require('cors')
const {server}= require('socket.io')



app.use(cors())

const server= http.createServer(app)

const io= new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods: ["GET", "POST"]
    }
})
io.on("connection", (socket)=>{
    console.log(`user id ${socket.id}`)
})

socket.on("disconnect", ()=>{
    console.log(`user ${socket.id} disconnected`)
})

server.listen(3000, ()=>{
    console.log(`server is up on port 3000`)
})