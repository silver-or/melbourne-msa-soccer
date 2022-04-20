export default function BasicService(){
  const calcBmi = (payload) => {
    const {name, height, weight} = payload
    let _height = Number(height) / 100
    let _weight = Number(weight)
    let bmi = _weight / Math.pow(_height, 2)
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
    console.log(`계산 결과 : ${JSON.stringify(result)}`)
    return result
  }

  const calculate = (payload) => {
    const {num1, opcode, num2} = payload
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

  return {
    getBmi(req, _res){
      const {name, height, weight} = req.body
      console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
      console.log(`이름 : ${name}`)
      console.log(`키 : ${height}`)
      console.log(`몸무게 : ${weight}`)
      const json = calcBmi({name, height, weight})
      console.log(`계산 결과 : ${JSON.stringify(json)}`)
      return json
    },

    getCalc(req, _res){
      const {num1, opcode, num2} = req.body
      console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
      const json = calculate({num1, opcode, num2})
      console.log(`계산 결과 : ${JSON.stringify(json)}`)
      return json
    }
  }
}