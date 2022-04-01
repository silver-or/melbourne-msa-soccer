import React, {useState} from "react"
import {BasicLayout} from "basic/index"

export default function Bmi(){
    const [inputs, setInputs] = useState({}) // 세 개로 나뉜 것을 JSON({})으로 합침
    const {name, height, weight} = inputs; // Object Destructuring (구조 분해 할당) // 꺼내면서 객체에 이름 부여
    const [bmi, setBmi] = useState(0.0)
    const [result, setResult] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setInputs({...inputs, [name] : value})   
    }

    const handleSubmit = e => {
        e.preventDefault()
        const dataset = {name, height, weight}
        alert(`데이터셋 출력 : ${JSON.stringify(dataset)}`)
    }
    
    return (<BasicLayout>
        <h1>Bmi</h1>
        <form>
            <div>
                <label><b>이름</b></label> <br/>
                <input type="text" name="name" onChange={handleChange}/> <br/>
                <label><b>키</b></label> <br/>
                <input type="text" name="height" onChange={handleChange}/> <br/>
                <label><b>몸무게</b></label> <br/>
                <input type="text" name="weight" onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleSubmit}>BMI 지수 체크하기</button> &nbsp;
                <button>취소</button>
            </div>
        </form>
        <div>{result}</div>
    </BasicLayout>)
}