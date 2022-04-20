import React, {useState} from "react"
import axios from "axios"
import tableStyles from '../common/styles/table.module.css'

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
        axios.post(proxy + `/basic/calc`, inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))
    }

    return (<>
        <form>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th><h2>계산기</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">num1</label>
                            <input name="num1" type="text" onChange={handleChange}/>
                            <br/>

                            <label htmlFor="">연산자</label>
                            <select name="opcode" onChange={handleChange}>
                                <option value="+">+</option>
                                <option value="-">-</option>
                                <option value="*">*</option>
                                <option value="/">/</option>
                                <option value="%">%</option>
                            </select>
                            <br/>

                            <label htmlFor="">num2</label>
                            <input name="num2" type="text" onChange={handleChange} /><br />
                            <br/>
                            
                            <button onClick={handleSubmit}>계산하기</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </>)
}