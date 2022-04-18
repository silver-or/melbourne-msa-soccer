import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../common/styles/table.module.css'
import { todoActions } from '../../redux/reducers/todoReducer.ts'
export default function AddTodo() {
    const [todo, setTodo] = useState({
        userid: 'laura817', task:'', completed:'F'
    })
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const handleChange = e =>{
      e.preventDefault()
      const {name, value} = e.target;
      setTodo({...todo, [name]: value})
    }

    return (
        <form onSubmit={e => {
            e.preventDefault()
            alert('진행 1: 등록하기 버튼 클릭')
            dispatch(todoActions.addTaskRequest(todo))
            setTodo({
                userid: '', task: '', completed: ''
            })
        }}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}><h2>Todo 리스트</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>할 일 등록</label></td>
                        <td>
                            <input
                                type="text"
                                id="task"
                                className="input input__lg"
                                name="task"
                                autoComplete="off"
                                onChange={handleChange}
                            />
                            <button type="submit" style={{marginLeft:"20px"}} className="btn btn__primary btn__lg">Add</button>
                        </td>
                    </tr>
                    <tr>
                    <td>할 일 목록</td>
                    <td>
                        {data.length == 0 ? 
                        <div>현재 등록된 일정이 없습니다.</div>
                        : data.map((todo) => (
                            <div key={todo.userid}>
                                <div key={todo.task}></div>
                            </div>
                        ))}
                    </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}