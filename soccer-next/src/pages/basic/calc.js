import React, { useState } from "react";

export default function Calc () {
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1, opcode, num2} = inputs;

    const onChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target; // name : 키 값
        setInputs({...inputs, [name] : value})
    }

    const onClick = (e) => {
        e.preventDefault()
        switch (opcode) {
            case '+' : setResult(num1 + opcode + num2 + " = " + (Number(num1) + Number(num2))); break;
            case '-' : setResult(num1 + opcode + num2 + " = " + (Number(num1) - Number(num2))); break;
            case '*' : setResult(num1 + opcode + num2 + " = " + (Number(num1) * Number(num2))); break;
            case '/' : setResult(num1 + opcode + num2 + " = " + (Number(num1) / Number(num2))); break;
            case '%' : setResult(num1 + opcode + num2 + " = " + (Number(num1) % Number(num2))); break;
            default : setResult("올바른 연산자가 아닙니다."); break;
        }
    }
    
    return (<>
        <h1>계산기</h1>
        <form>
            <label><b>num1</b></label> <br/>
            <input name="num1" onChange={onChange}/> <br/>
            <label><b>연산자</b></label> <br/>
            <select name="opcode" onChange={onChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select> <br/>
            <label><b>num2</b></label> <br/>
            <input name="num2" onChange={onChange}/> <br/>
            <div>
                <button onClick={onClick}>계산하기</button> &nbsp;
                <button>취소</button>
            </div>
        </form>
        <div>{result}</div>
    </>)
}