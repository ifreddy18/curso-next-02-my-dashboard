import { CartCounter } from '@/shopping-cart'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Counter page',
	description: 'A simple counter',
}

export default function CounterPage() {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<h1>Counter Page</h1>
			<span>Products in the shop car</span>

			<CartCounter value={20}/>
		</div>
	)
}
