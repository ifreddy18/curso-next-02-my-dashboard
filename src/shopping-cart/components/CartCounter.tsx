'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import {
	addOne,
	initCounterState,
	resetCount,
	substractOne,
} from '@/store/counter/counterSlice'
import { useEffect } from 'react'

const buttonStyle =
	'mr-2 flex w-[100px] items-center justify-center rounded-xl p-2 text-white transition-all bg-gray-900 hover:bg-gray-600'

interface Props {
	value?: number
}

export interface CounterResponse {
	methor: string
	count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
	const data = await fetch('/api/counter').then((res) => res.json())
	console.log({ data })
	return data
}

export const CartCounter = ({ value = 0 }: Props) => {
	//? useState
	// const [count, setCount] = useState(10)
	// const increment = () => setCount(count + 1)
	// const decrement = () => setCount(count - 1)

	//? Redux
	const count = useAppSelector((state) => state.counter.count)
	const dispatch = useAppDispatch()

	const increment = () => dispatch(addOne())
	const decrement = () => dispatch(substractOne())

	// useEffect(() => {
	// 	dispatch(initCounterState(value))
	// }, [dispatch, value])

	useEffect(() => {
		getApiCounter().then(data => dispatch(initCounterState(data.count)))
	}, [dispatch])


	return (
		<>
			<span className="text-9xl">{count}</span>

			<div className="flex">
				<button onClick={() => decrement()} className={`${buttonStyle}`}>
					-1
				</button>
				<button onClick={() => increment()} className={`${buttonStyle}`}>
					+1
				</button>
			</div>
		</>
	)
}
