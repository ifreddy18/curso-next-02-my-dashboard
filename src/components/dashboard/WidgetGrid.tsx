'use client'

import { IoCartOutline } from 'react-icons/io5'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'

const widgetItems = [
	{
		href: '/dashboard/counter',
		icon: <IoCartOutline size={70} className="text-blue-600" />,
		title: 'Value',
		subtitle: 'Products in cart',
		label: 'Counter',
	},
]

export const WidgetGrid = () => {

	const isCart = useAppSelector(state => state.counter.count)


	return (
		<div className="flex flex-wrap justify-center p-2">
			{widgetItems.map((item) => (
				<SimpleWidget {...item} title={`${isCart}`} />
			))}
		</div>
	)
}
