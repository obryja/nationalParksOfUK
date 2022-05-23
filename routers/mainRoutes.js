const router = require('express').Router()

router.get("/", (req, res) => {
    res.render('index', {title: "Parki Narodowe Wielkiej Brytanii"})
})

module.exports = router