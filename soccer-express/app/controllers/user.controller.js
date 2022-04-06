const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res) => {
    new UserSchema({
        userId : req.body.userId,
        pw : req.body.pw,
        userName : req.body.userName,
        tel : req.body.tel
    }).save(() => {
        res.status(200).json({'result':'ok'})
    })
}