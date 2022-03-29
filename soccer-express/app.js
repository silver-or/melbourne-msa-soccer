require('dotenv').config()
const express = require('express') // import // 'express' : key, key는 패키지의 이름. 패키지는 package.json에 있음.
const mongoose = require('mongoose')

const app = express()
const { PORT, MONGO_URI } = process.env

app.get('/', (req, res) => {
  res.json({"현재 시간 : " : new Date().toLocaleString()})
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e))

app.listen(PORT,() => {
  console.log({"현재 시간 : " : new Date().toLocaleString()})
})