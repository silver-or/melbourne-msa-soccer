const db = require('../models/index')
const BoardSchema = db.board
exports.write = (req, res) => {
    new BoardSchema(req.body).save(() => {
        res.status(200).json({'result':'ok'})
    })
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
}

exports.boardlist = (req, res) => {
    console.log(`boardController access!`)
    BoardSchema.find()
    .exec((err, boards) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({success:true, boards})
        console.log(boards)
    })
}