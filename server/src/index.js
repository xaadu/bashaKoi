const express = require('express')
const app = express()

const apiRoutes = require('./routers')
app.use('/api', apiRoutes)


const host = "0.0.0.0"
const port = 5000
app.listen(port, host, () => {
    console.log(`bashaKoi app listening at http://localhost:${port}`)
})
