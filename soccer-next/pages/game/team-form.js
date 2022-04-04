import React, {useState} from "react" // 상태는 객체, 주소를 갖고 있어야 함 → JSON
import style from "board/style/board-form.module.css"

export default function TeamForm(){
    const [inputs, setInputs] = useState({})
    const {teamId, regionName, teamName, origYyyy, stadiumName, address, tel} = inputs

    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const dataset = {teamId, regionName, teamName, origYyyy, stadiumName, address, tel}
        alert(`등록할 팀 정보 : ${JSON.stringify(dataset)}`)
    }

    return (<>
        <div className={style.container}>
            <form action="">
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="teamId">팀 ID</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="teamId" name="teamId" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="regionName">연고지</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="regionName" name="regionName" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="teamName">팀명</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="teamName" name="teamName" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="origYyyy">창단년도</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="origYyyy" name="origYyyy" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="stadiumName">스타디움 명칭</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="stadiumName" name="stadiumName" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="address">주소</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="address" name="address" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="tel">전화번호</label>
                    </div>
                    <div className={style.col75}>
                        <input className={style.inputText} type="text" id="tel" name="tel" onChange={handleChange}/>
                    </div>
                </div>
                <br/>
                <div className={style.row}>
                    <input className={style.inputSubmit} type="submit" value="Submit" onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    </>)
}