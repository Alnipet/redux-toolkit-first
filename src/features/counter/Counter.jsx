import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCount} from './counterSlice'

export const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const facts = useSelector((state) => state.counter.facts)
  const dispatch = useDispatch()

  const factsList = facts.slice(0, count).map((el, i) => {
    return (
      <li key={i}>{el}</li>
    )
  })

	return (
		<div>
			<input type="number" min={0} max={5} value={count} onChange={(e) => dispatch(setCount(e.target.value))}/>
			<ul>{factsList}</ul>
		</div>
	)
}
