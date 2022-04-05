import React, {useState} from "react"
import axios from "axios"
import {BasicLayout} from "basic";

export default function Calc(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({opcode : '+'})

    const handleChange = (e) => {
        e.preventDefault() // original HTML 을 막아야 React 작동
        const {name, value} = e.target // name : 키 값
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy + `/api/basic/calc`, inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))
    }

    return (<>
        <BasicLayout>
            <h1>계산기</h1>
            <form>
                <label><b>num1</b></label> <br/>
                <input name="num1" onChange={handleChange}/> <br/>
                <label><b>연산자</b></label> <br/>
                <select name="opcode" onChange={handleChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="%">%</option>
                </select> <br/>
                <label><b>num2</b></label> <br/>
                <input name="num2" onChange={handleChange}/> <br/>
                <div>
                    <button onClick={handleSubmit}>계산하기</button> &nbsp;
                    <button>취소</button>
                </div>
            </form>
        </BasicLayout>
    </>)
}