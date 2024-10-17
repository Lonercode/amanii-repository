const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, envFile)})
const app = require('./app')
const db = require('./db')
const port = process.env.PORT

app.listen(port, () => console.log(`Server listening on port ${port}`))