import React, {useState} from "react"
import {BasicLayout} from "basic";

export default function Counter(){
  const [count, setCount] = useState(0)
  return (<>
    <BasicLayout>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button> <br/>
        <button onClick={() => setCount(count - 1)}>-</button> <br/>
        <div>{count}</div>
      </div>
    </BasicLayout>
  </>)
}