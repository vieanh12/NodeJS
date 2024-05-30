const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const message = 'Hello World'
  res.send(message)
})

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}')
})