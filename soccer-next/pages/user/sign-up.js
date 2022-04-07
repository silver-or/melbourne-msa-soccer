import axios from "axios"
import React, {useState} from "react"

export default function SignUp(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({}) // 상태를 inputs 라는 이름으로 줌, JSON 내부의 어느 공간에 이름을 준 것. sign-in과 다른 이름이어야 함.

    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy + '/api/user/sign-up', inputs)
        .then(res => {
            alert(`${JSON.stringify(inputs)}`)
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))   
    }

    return (<>
        <h1>회원가입 폼</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label><b>사용자 ID</b></label> <br/>
                <input type="text" name="userId" onChange={handleChange}/> <br/>
                <label><b>비밀번호</b></label> <br/>
                <input type="password" name="pw" onChange={handleChange}/> <br/>
                <label><b>이름</b></label> <br/>
                <input type="text" name="userName" onChange={handleChange}/> <br/>
                <label><b>전화번호</b></label> <br/>
                <input type="text" name="tel" onChange={handleChange}/> <br/>
                <button>회원가입하기</button>
            </div>
            <div><span id="result-span"/></div>
        </form>
    </>)
}