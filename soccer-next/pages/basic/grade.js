import React, {useState} from "react"
import {BasicLayout} from "basic";

export default function Grade(){
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs;
    const [result, setResult] = useState('')

    const onChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})
    }

    const onClick = (e) => {
        e.preventDefault()
        setResult("이름 : " + name + ", " + 
        "국어 점수 : " + kor + ", " +
        "영어 점수 : " + eng + ", " +
        "수학 점수 : " + math + ", " +
        "총점 : " + (Number(kor) + Number(eng) + Number(math)))
    }
    
    return (<BasicLayout>
        <h1>성적표</h1>
        <form>
            <div>
                <label><b>이름</b></label> <br/>
                <input name="name" onChange={onChange}/> <br/>
                <label><b>국어 성적</b></label> <br/>
                <input name="kor" onChange={onChange}/> <br/>
                <label><b>영어 성적</b></label> <br/>
                <input name="eng" onChange={onChange}/> <br/>
                <label><b>수학 성적</b></label> <br/>
                <input name="math" onChange={onChange}/>
            </div>
            <div>
                <button onClick={onClick}>결과 확인하기</button> &nbsp;
                <button>취소</button>
            </div>
        </form>
        <div>{result}</div>
    </BasicLayout>)
}