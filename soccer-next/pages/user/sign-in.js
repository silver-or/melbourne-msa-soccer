import React, {useState} from "react"

export default function SignIn(){
    const [inputs, setInputs] = useState({})
    const {userId, pw} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       const dataset = {userId, pw}
       alert(`데이터셋 출력 : ${JSON.stringify(dataset)}`)
    }
    
    return (<>
        <h1>로그인 폼</h1>
        <div>
            <label><b>UserId</b></label> <br/>
            <input type="text" name="userId" onChange={handleChange}/> <br/>
            <label><b>Password</b></label> <br/>
            <input type="password" name="pw" onChange={handleChange}/> <br/>
            <button onClick={handleSubmit}>Login</button> <br/>
            <label>
                <input type="checkbox"/> Remember me
            </label>
        </div>
        <div>
            <button>Cancel</button> &nbsp;
            <span>Forgot<a>password?</a></span>
        </div>
    </>)
}