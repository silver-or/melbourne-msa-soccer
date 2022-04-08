import axios from "axios"
import tableStyles from "common/style/table.module.css"
import {useEffect, useState} from "react"

const Table = ({columns, colspan, data}) => {
    return (
        <table className={tableStyles.table}>
            <thead>
                <tr className={tableStyles.tr}>
                    {columns.map((column) => (
                        <th key={column} className={tableStyles.td}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? 
                <tr className={tableStyles.tr}>
                    <td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다.</td>
                </tr>
                : data.map((board) => (
                    <tr className={tableStyles.tr} key={board.passengerId}>
                        <td className={tableStyles.td}>{board.passengerId}</td>
                        <td className={tableStyles.td}>{board.name}</td>
                        <td className={tableStyles.td}>{board.teamId}</td>
                        <td className={tableStyles.td}>{board.subject}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function BoardList(){
    const columns = ["passengerId", "name", "teamId", "subject"]
    const [data, setData] = useState([])
    const proxy = 'http://localhost:5000'
    useEffect(() => {
        axios.get(proxy + '/api/board/list')
        .then(res => {
            setData(res.data.boards)
        })
        .catch(err => {})
    }, [])
    return(<>
        <h1>게시글 목록</h1>
        <div className={tableStyles.td}>
            <Table columns={columns} colspan={4} data={data}/>
        </div>
    </>)
}