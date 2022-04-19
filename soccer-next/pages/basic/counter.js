import React, {useState} from "react"
import tableStyles from '../common/styles/table.module.css'

export default function Counter(){
  const [count, setCount] = useState(0)
  return (<>
    <table className={tableStyles.table}>
      <thead>
          <tr>
              <th><h2>Counter</h2></th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button style={{width:100}} onClick={() => setCount(count+1)}> + </button> &nbsp;
            <button style={{width:100}} onClick={() => setCount(count-1)}> - </button>
          </td>
        </tr>
        <tr><td><h3>결과: {count}</h3></td></tr>
      </tbody>
    </table>
  </>)
}