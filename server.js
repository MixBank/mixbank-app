const express = require('express')
const path = require('path')

const app = express()

const PORT = 9876

app.listen(PORT, function() {
  console.log('server is running and listening on port', PORT)
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})