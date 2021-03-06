const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.resolve( __dirname,'index.html' ))
})

app.get('/render', (req, res) => {
    res.render('index')
})

app.listen( process.env.PORT || 3001 )