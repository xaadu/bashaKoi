const router = require('express').Router()
const homedb = require('../db/homes')

router.get('/', async (req, res) => {
    const result = await homedb.all()
    res.json({'data': result})
})

module.exports = router
