const router = require('express').Router()

router.get('/', async (req, res) => {
    res.json({'message': 'Welcome To bashaKoi!'})
})

const homesRoutes = require('./homes')
router.use('/homes', homesRoutes)

module.exports = router
