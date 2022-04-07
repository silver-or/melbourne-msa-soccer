// mongoose 연결
require('dotenv').config()
const {MONGO_URI} = process.env
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {} // 빈 땅에 db라는 이름을 줌
db.mongoose = mongoose
db.url = MONGO_URI
db.user = require('./user.model')(mongoose)

module.exports = db