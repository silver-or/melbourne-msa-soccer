import React, {useState} from 'react';

export default function Login () {
    const [inputs, setInputs] = useState({})
    const {userId, pw} = inputs;
    const [result, setResult] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})
    }

    const handleClick = (e) => {
       e.preventDefault()
       setResult("userId : " + userId + ", " + "pw : " + pw)
    }
    
    return (<>
        <h1>로그인 폼</h1>
        <div>
            <label><b>UserId</b></label> <br/>
            <input type="text" name="userId" onChange={handleChange}/> <br/>
            <label><b>Password</b></label> <br/>
            <input type="password" name="pw" onChange={handleChange}/> <br/>
            <button onClick={handleClick}>Login</button> <br/>
            <label>
                <input type="checkbox"/> Remember me
            </label>
        </div>
        <div>
            <button>Cancel</button> &nbsp;
            <span>Forgot<a>password?</a></span>
        </div>
        <div>{result}</div>
    </>)
}