import axios from "axios"
import tableStyles from "common/style/table.module.css"
import Link from "next/link"
import {useEffect, useState} from "react"

const Table = ({columns, colspan, data}) => {
    return (
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
                    <td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다.</td>
                </tr>
                : data.map((user) => (
                    <tr className={tableStyles.tr} key={user.userId}>
                        <td className={tableStyles.td}>
                            <Link href={{pathname:`/user/[userId]`, query:{selectedUser: 'test'}}} as={`/user/${user.userId}`}>
                                <a>{user.userId}</a>
                            </Link>
                        </td>
                        <td className={tableStyles.td}>{user.pw}</td>
                        <td className={tableStyles.td}>{user.userName}</td>
                        <td className={tableStyles.td}>{user.tel}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function UserList(){
    const columns = ["userId", "pw", "userName", "tel"]
    const [data, setData] = useState([])
    const proxy = 'http://localhost:5000'
    useEffect(() => {
        axios.get(proxy + '/api/user/list')
        .then(res => {
            setData(res.data.users)
        })
        .catch(err => {})
    }, [])
    return(<>
        <h1>사용자 목록</h1>
        <div className={tableStyles.td}>
            <Table columns={columns} colspan={4} data={data}/>
        </div>
    </>)
}