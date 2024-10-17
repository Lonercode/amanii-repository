const express = require('express')
const app = express()
const userRoutes = require('./routes/resources.routes')
const cors = require('cors')
const corsOrigin ={
    origin:'http://localhost:5173' ,
    credentials:true,            
    optionSuccessStatus:200,
    methods: ["POST", 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
  }
app.use(cors(corsOrigin))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/v1', userRoutes)

module.exports = app