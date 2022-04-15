import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux" // react와 redux 연결, action이 될 이벤트를 던짐
import { todoActions } from "../../redux/reducers/todoReducer.ts"

export default function Todo() {
    const [task, setTask] = useState({
        userid: '', task: '', complete: ''
    })
    const dispatch = useDispatch()
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setTask({...task, [name] : value})
    }
    return (
        <div className="todoapp stack-large">
            <h1>일정 등록</h1>
            <form onSubmit={e => {
                e.preventDefault()
                alert('진행 1 : 일정 등록 버튼 클릭')
                dispatch(todoActions.addTaskRequest(task))
                setTask({
                    userid: '', task: '', complete: ''
                })
                // alert(JSON.stringify(task))
            }}>
                <label><b>사용자ID</b></label> &nbsp;
                <input type="text" name='userid' onChange={handleChange} /> <br/>
                <label><b>일정명</b></label>  &nbsp;
                <input
                    id="task"
                    name="task"
                    type="text"
                    className="input input__lg"
                    autoComplete="off"
                    onChange={handleChange}
                /> 
                <br/>
                <label><b>완료여부</b></label> &nbsp;
                <input type="checkbox" id="complete" name="complete" onChange={handleChange}/>
                <br/>
                <button type="submit" className="btn btn__primary btn__lg">추가하기</button>
            </form>
            {/* <div className="filters btn-group stack-exception">
                <button type="button" className="btn toggle-btn" aria-pressed="true">
                    <span className="visually-hidden">Show </span>
                    <span>all</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Active</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Completed</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
            </div> */}
            {/**
            <h2 id="list-heading">
                3 tasks remaining
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                <li className="todo stack-small">
                    <div className="c-cb">
                        <input  id="todo-0" type="checkbox" defaultChecked={false} onChange={()=>{
                            setCheck(!check)
                        }}/>
                        <label className="todo-label" htmlFor="todo-0">
                            운동 24시간 하기
                        </label>
                        { check ? <Image class="rotate-center"
                        style={{ visibility: "visible", float: "right" }}
                        src="/vercel.svg" width="64" height="64"  />
                        :<Image
                        style={{ width: '6%', visibility: "hidden", float: "right" }}
                        src="/vercel.svg" width="64" height="64"  />}
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">
                            Edit <span className="visually-hidden">Eat</span>
                        </button>
                        <button type="button" className="btn btn__danger">
                            Delete <span className="visually-hidden">Eat</span>
                        </button>
                    </div>
                </li>
            </ul>*/}
        </div>
    );
}