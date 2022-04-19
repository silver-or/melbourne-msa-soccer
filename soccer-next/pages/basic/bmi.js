import React, {useState} from "react" // 경량화 (필요한 것만 뽑아냄)
import axios from "axios"
import tableStyles from '../common/styles/table.module.css'

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
        <form action="" onSubmit={handleSubmit} >
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}><h2>BMI</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">이름</label>
                        </td>
                        <td>
                            <input type="text" name="name" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">키</label>
                        </td>
                        <td>
                        <input type="text" name="height" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <div>
                                <label htmlFor="">몸무게</label>
                            </div>
                        </td>
                        <td>
                            <input type="text" name="weight" onChange={handleChange} /><br />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><input type="submit" value="BMI 체크" /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>결과 : <span id="result-span"></span></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </>)
}