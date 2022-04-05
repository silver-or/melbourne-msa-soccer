// 사용자에게 유의미한 data를 받아서 dataset 만들기
import React, {useState} from "react";
import axios from "axios"
import style from "board/style/board-form.module.css"

export default function BoardForm(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => { // e는 argument → 변하지 않음, 변한다면 e.preventDefault(), e.target이 제대로 작동되지 않을 수 있음
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})   
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy + '/api/board/write', inputs) // param은 callback → 상태 (inputs) 변경
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))
    }

    return(<>
        <div className={style.container}>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="passengerId">PassengerId</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="passengerId" name="passengerId" placeholder="사용자 ID 입력" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="name">Name</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="name" name="name" placeholder="사용자 이름 입력" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="team">Team</label>
                    </div>
                    <div className={style.col75}>
                        <select id="teamId" name="teamId" onChange={handleChange}>
                            <option value="K09" selected>서울 FC서울</option>
                            <option value="K04">인천 유나이티드</option>
                            <option value="K02">수원 삼성블루윙즈</option>
                        </select>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="subject">Subject</label>
                    </div>
                    <div className={style.col75}>
                        <textarea className={style.inputText} id="subject" name="subject" style={{height:200 + "px"}} onChange={handleChange}/>
                    </div>
                </div>
                <br/>
                <div className={style.row}>
                    <input className={style.inputSubmit} type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    </>)
}