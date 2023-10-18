const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Mongoose
mongoose.connect('mongodb+srv://glonghini:jReGztbNVrCi9gbi@main-cluster.zarws0n.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Routes
app.use('/', require('./routes/routes'))

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log("Server running on port:", PORT))