const Park = require('../db/schemas').Park

getAllParks = async (req, res) => {
    try{
        res.status(202).send(JSON.stringify(
            await Park.find().lean()
        ))
    } catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

getPark = async (req, res) => {
    try {
        if(!req.body.id)  return res.sendStatus(400)

        res.status(202).send(JSON.stringify(
            await Park.findById(req.body.id).lean()
        ))
    } catch(err) {
        res.sendStatus(500)
        console.log(err) 
    }
}

module.exports = {
    getAllParks,
    getPark,
}