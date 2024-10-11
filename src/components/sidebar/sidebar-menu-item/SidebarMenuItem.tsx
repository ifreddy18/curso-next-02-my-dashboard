'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './SidebarMenuItem.module.css'

interface Props {
	path: string
	icon: JSX.Element
	title: string
	subtitle: string
}

export const SidebarMenuItem = ({ path, icon, title, subtitle }: Props) => {
	const currentPath = usePathname()

	return (
		<Link
			href={path}
			className={`${style.link} ${currentPath === path && style['active-link']}`}
		>
			<div>{icon}</div>
			<div className="flex flex-col">
				<span className="text-lg font-bold leading-5 text-white">{title}</span>
				<span className="hidden text-sm text-white/50 md:block">
					{subtitle}
				</span>
			</div>
		</Link>
	)
}
