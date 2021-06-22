const express = require('express')
const app = express()
const host = "0.0.0.0"
const port = 5000

app.get('/api', (req, res) => {
    res.json({'message': 'Welcome To bashaKoi!'})
})

app.listen(port, host, () => {
    console.log(`bashaKoi app listening at http://localhost:${port}`)
})
