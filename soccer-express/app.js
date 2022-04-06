require('dotenv').config() // 전역, dotenv : 환경
var cors = require('cors')
const express = require('express') // import // 'express' : key, key는 패키지의 이름. 패키지는 package.json에 있음.
const mongoose = require('mongoose')
const app = express()
const {PORT, MONGO_URI} = process.env

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
const APP = './app/routes'
// require(`${APP}/admin.route`)({url : '/api/admin', app})
require(`${APP}/basic.route`)({url : '/api/basic', app})
require(`${APP}/board.route`)({url : '/api/board', app})
// require(`${APP}/game.route`)({url : '/api/game', app})
// require(`${APP}/todo.route`)({url : '/api/todo', app})
require(`${APP}/user.route`)({url : '/api/user', app})

var corsOptions = {
  origin : 'http://localhost:3000',
  optionsSuccessStatus : 200
}

app.listen(PORT, () => {
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
})

mongoose
  .connect(MONGO_URI, {useNewUrlParser : true, useUnifiedTopology : true})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e))

app.get('/', (req, res) => {
  res.json({"현재 시간 : " : new Date().toLocaleString()})
})

app.get('/api/now', cors(corsOptions), (req, res) => {
  res.json({"now" : new Date().toLocaleString()})
})