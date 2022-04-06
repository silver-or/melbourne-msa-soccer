const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res) => {
    const {userId, pw, userName, tel} = req.body
    console.log(`userId 값 : ${userId}`)
    console.log(`pw 값 : ${pw}`)
    console.log(`userName 값 : ${userName}`)
    console.log(`tel 값 : ${tel}`)
    const user = new UserSchema({
        userId, pw, userName, tel
    })
    user.save(() => {
        res.status(200).json({'result':'ok'})
    })
}