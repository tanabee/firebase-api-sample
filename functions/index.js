const { initializeApp } = require('firebase-admin/app')

initializeApp()

exports.api = require('./api')
