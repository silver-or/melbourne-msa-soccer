import React, {useState} from "react"
import styled from 'styled-components'
import style from 'styles/basic/counter.module.css'
import {useSelector, useDispatch} from 'react-redux'

export default function Home() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('0')
  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button> <br/>
      <button onClick={() => setCount(count - 1)}>-</button> <br/>
      <div>{count}</div>
    </div>
  )
}