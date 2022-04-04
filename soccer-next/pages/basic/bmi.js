import React, {useState} from "react" // 경량화 (필요한 것만 뽑아냄)
import axios from "axios"
import {BasicLayout} from "basic/index"

export default function Bmi(){
    const [inputs, setInputs] = useState({}) // 세 개로 나뉜 것을 JSON({})으로 합침
    const {name, height, weight} = inputs // Object Destructuring (구조 분해 할당) // 꺼내면서 객체에 이름 부여

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})   
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/basic/bmi', inputs)
        .then(res => {
            const bmi = res.data
            document.getElementById('result-span').innerHTML = `
                <h3>이름 : ${bmi.name}</h3>
                <h3>키 : ${bmi.height} cm</h3>
                <h3>몸무게 : ${bmi.weight}kg</h3>
                <h3>BMI결과 : ${bmi.bmi}</h3>
            `
        })
        .catch(err => alert(err))
    }
    
    return (<>
        <BasicLayout>
            <h1>Bmi</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label><b>이름</b></label> <br/>
                    <input type="text" name="name" onChange={handleChange}/> <br/>
                    <label><b>키</b></label> <br/>
                    <input type="text" name="height" onChange={handleChange}/> <br/>
                    <label><b>몸무게</b></label> <br/>
                    <input type="text" name="weight" onChange={handleChange}/>
                </div>
                <div>
                    <input type="submit" value="BMI 체크"/> &nbsp;
                    <button>취소</button>
                </div>
                <div>결과 : <span id="result-span"/></div>
            </form>
        </BasicLayout>
    </>)
}