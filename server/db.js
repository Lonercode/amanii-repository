require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI)

const db = mongoose.connection
db.on('error', (err) => console.log(`Databse error: ${err}`))
db.once('open', () => console.log('Database successfully connected'))

module.exports = db