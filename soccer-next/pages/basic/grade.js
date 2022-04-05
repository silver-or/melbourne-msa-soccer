import React, {useState} from "react"
import {BasicLayout} from "basic";
import axios from "axios";

export default function Grade(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy + '/api/basic/grade', inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))
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