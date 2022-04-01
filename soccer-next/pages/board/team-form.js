import React, {useState} from "react";
import style from "board/style/board-form.module.css"

export default function TeamForm(){
    const [inputs, setInputs] = useState({})
    const {passengerId, name, teamId, subject} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setInputs({...inputs, [name] : value})   
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert(`등록할 게시글 : ${JSON.stringify(subject)}`)
    }
    
    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <htmlForm action="">
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="passengerId">게시글 작성자 ID</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="passengerId" name="passengerId" placeholder="게시글 작성자 ID 입력" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label htmlFor="name">게시글 작성자 이름</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="name" name="name" placeholder="게시글 작성자 이름 입력" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label htmlFor="team">응원팀</label>
                    </div>
                    <div className={style.col75}>
                        <select id="teamId" name="teamId" onChange={handleChange}>
                            <option value="">응원팀 선택</option>
                            <option value="K09">Fc seoul</option>
                            <option value="K02">Suwon Samseong blue wings</option>
                            <option value="K04">Incheon United</option>
                        </select>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label htmlFor="subject">게시글 내용</label>
                    </div>
                    <div className={style.col75}>
                        <input type="textarea" id="subject" name="subject" style={{height:200 + "px"}} onChange={handleChange}/>
                    </div>
                </div>
                <br/>
                <div className={style.row}>
                    <input className={style.inputSubmit} type="submit" value="Submit" onClick={handleSubmit}/>
                </div>
            </htmlForm>
        </div>
    </>)
}









