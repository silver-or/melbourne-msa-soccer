import React, {useState} from "react"
import {BasicLayout} from "basic";

export default function Grade(){
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const dataset = {name, kor, eng, math}
        alert(`데이터셋 출력 : ${JSON.stringify(dataset)}`)
    }
    
    return (<>
        <BasicLayout>
            <h1>성적표</h1>
            <form>
                <div>
                    <label><b>이름</b></label> <br/>
                    <input name="name" onChange={handleChange}/> <br/>
                    <label><b>국어 성적</b></label> <br/>
                    <input name="kor" onChange={handleChange}/> <br/>
                    <label><b>영어 성적</b></label> <br/>
                    <input name="eng" onChange={handleChange}/> <br/>
                    <label><b>수학 성적</b></label> <br/>
                    <input name="math" onChange={handleChange}/>
                </div>
                <div>
                    <button onClick={handleSubmit}>결과 확인하기</button> &nbsp;
                    <button>취소</button>
                </div>
            </form>
        </BasicLayout>
    </>)
}