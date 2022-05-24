const router = require('express').Router()

router.get("/", (req, res) => {
    res.render('index', {title: "Parki Narodowe Wielkiej Brytanii"})
})

router.get('/park/:parkId', (req, res) => {
    res.render('park', {title: 'Park', parkId: req.params.parkId})
})


module.exports = router