require('dotenv').config()
// imports
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const authRoute = require('./routes/authroute')
const postRoute = require('./routes/postRoutes')

app.use(express.json())

app.use(cors())
// routes:
app.use('/auth', authRoute)
app.use('/product', postRoute)


// server init:
const port = process.env.PORT || 5000
app.listen(port , ()=> console.log(`server running on port ${port}`))

// connecting to database:
mongoose
  .connect(process.env.URL)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.error("Error connecting to database:", err));

