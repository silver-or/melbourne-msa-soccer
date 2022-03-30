import React, {useState} from "react"

export default function Bmi () {
    const [inputs, setInputs] = useState({}) // 세 개로 나뉜 것을 JSON({})으로 합침
    const {name, height, weight} = inputs; // Object Destructuring (구조 분해 할당) // 꺼내면서 객체에 이름 부여
    const [bmi, setBmi] = useState(0.0)
    const [result, setResult] = useState('')

    const onChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})   
    }

    const onClick = (e) => {
        e.preventDefault() // HTML이 default
        setBmi(Number(weight) / (Number(height) * Number(height)) * 10000)
        if (bmi >= 35) {setResult(name + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 고도비만")}
        else if (bmi >= 30) {setResult(name + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 중도비만")}
        else if (bmi >= 25) {setResult(name + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 경도비만")}
        else if (bmi >= 23) {setResult(name + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 과체중")}
        else if (bmi >= 18.5) {setResult(name + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 정상")}
        else {setResult(name + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 저체중")}
    }
    
    return (< >
        <h1>Bmi</h1>
        <form>
            <div>
                <label><b>이름</b></label> <br/>
                <input type="text" name="name" onChange={onChange}/> <br/>
                <label><b>키</b></label> <br/>
                <input type="text" name="height" onChange={onChange}/> <br/>
                <label><b>몸무게</b></label> <br/>
                <input type="text" name="weight" onChange={onChange}/>
            </div>
            <div>
                <button onClick={onClick}>BMI 지수 체크하기</button> &nbsp;
                <button>취소</button>
            </div>
        </form>
        <div>{result}</div>
    </>)
}