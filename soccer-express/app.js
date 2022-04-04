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

var corsOptions = {
  origin : 'http://localhost:3000',
  optionsSuccessStatus : 200
}

mongoose
  .connect(MONGO_URI, {useNewUrlParser : true, useUnifiedTopology : true})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e))

app.listen(PORT,() => {
  console.log({"현재 시간 : " : new Date().toLocaleString()})
})

app.get('/', (req, res) => {
  res.json({"현재 시간 : " : new Date().toLocaleString()})
})

app.get('/api/now', cors(corsOptions), (req, res) => {
  res.json({"now" : new Date().toLocaleString()})
})

app.post("/api/basic/bmi", (req, res) => {
  console.log(`계산된 JSON 값 : ${JSON.stringify(computeBMI(req.body))}`)
  res.json(computeBMI(req.body))
})

app.post("/api/basic/calc", (req, res) => {
  console.log(`계산된 JSON 값 : ${JSON.stringify(calculate(req.body))}`)
  res.json(calculate(req.body))
})

app.post("/api/basic/grade", (req, res) => {
  res.json(getGrade(req.body))
})

app.post("/api/board/write", (req, res) => {
  res.json(req.body)
})

function computeBMI({name, height, weight}){
  let _height = Number(height) / 100
  let _weight = Number(weight)
  let bmi = _weight/Math.pow(_height, 2)
  let output = Math.round(bmi * 100) / 100
  console.log(output)
  const result = {name, height, weight} // 구조화 structuring
  if (output < 18.5)
    result.bmi = "Underweight"
  else if (output <= 25)
    result.bmi = "Normal"
  else if (output <= 30)
    result.bmi = "Obese"
  else
    result.bmi = "Overweight"
  return result
}

function calculate({num1, opcode, num2}){
  let _num1 = Number(num1)
  let _num2 = Number(num2)
  const result = {num1, opcode, num2}
  switch(opcode) {
    case '+' : result.res = _num1 + _num2; break;
    case '-' : result.res = _num1 - _num2; break;
    case '*' : result.res = _num1 * _num2; break;
    case '/' : result.res = _num1 / _num2; break;
    case '%' : result.res = _num1 % _num2; break;
  }
  return result
}

function getGrade({name, kor, eng, math}){
  let _kor = Number(kor)
  let _eng = Number(eng)
  let _math = Number(math)
  let avg = (_kor + _eng +_math) / 3.0
  const result = {name, kor, eng, math}
  if (avg >= 60.0)
    result.res = "합격"
  else
    result.res = "불합격"
  return result
}