const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({ origin: true }))

app.get('/users', require('./user').list)
app.get('/users/:id', require('./user').get)

const api = express()
api.use('/api', app)

module.exports = functions.region('asia-northeast1').https.onRequest(api)
