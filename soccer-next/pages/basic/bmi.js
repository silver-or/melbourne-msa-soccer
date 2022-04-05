import React, {useState} from "react" // 경량화 (필요한 것만 뽑아냄)
import axios from "axios"
import {BasicLayout} from "basic/index"

export default function Bmi(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({}) // 세 개로 나뉜 것을 JSON({})으로 합침

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})   
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy + '/api/basic/bmi', inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
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
            </form>
        </BasicLayout>
    </>)
}