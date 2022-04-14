import axios from "axios"
import tableStyles from "../common/styles/table.module.css"
import Link from "next/link"
import {useEffect, useState} from "react"

const Table = ({columns, colspan, data}) => (<>
    <table className={tableStyles.table}>
        <thead>
            <tr className={tableStyles.tr}>
                {columns.map((column, index) => (
                    <th key={index} className={tableStyles.td}>{column}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.length == 0 ? 
            <tr className={tableStyles.tr}>
                <td colSpan={colspan} className={tableStyles.td}>일정이 없습니다.</td>
            </tr>
            : data.map((todo) => (
                <tr className={tableStyles.tr} key={todo.label}>
                    <td className={tableStyles.td}>
                        <a>{todo.label}</a>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</>)

export default function TodoList(){
    const columns = ["label"]
    const [data, setData] = useState([])
    const proxy = 'http://localhost:5000'
    useEffect(() => {
        axios.get(proxy + '/api/todo/list')
        .then(res => {
            setData(res.data.todos)
        })
        .catch(err => {})
    }, [])
    return(<>
        <h1>스케줄 목록</h1>
        <h2 id="list-heading">
            {data.length} tasks remaining
        </h2>
        <div className={tableStyles.td}>
            <Table columns={columns} colspan={1} data={data}/>
        </div>
    </>)
}