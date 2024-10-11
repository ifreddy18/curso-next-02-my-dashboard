import Image from 'next/image'
import { IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from './sidebar-menu-item/SidebarMenuItem'
import { menuItems } from '@/constants'

export const Sidebar = () => {
	return (
		<div
			id="menu"
			style={{ width: '400px' }}
			className="left-0 z-10 min-h-screen w-64 overflow-y-scroll bg-gray-900 text-slate-300"
		>
			<div id="logo" className="my-4 px-6">
				<h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
					<IoLogoReact className="mr-2" />
					<span>Dash</span>
					<span className="text-blue-500">8</span>.
				</h1>
				<p className="text-sm text-slate-500">
					Manage your actions and activities
				</p>
			</div>
			<div id="profile" className="px-6 py-10">
				<p className="text-slate-500">Welcome back,</p>
				<a href="#" className="inline-flex items-center space-x-2">
					<span>
						<Image
							className="h-8 w-8 rounded-full"
							src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
							width={50}
							height={50}
							alt="User avatar"
							priority
						/>
					</span>
					<span className="text-sm font-bold md:text-base">Edward Tompson</span>
				</a>
			</div>
			<div id="nav" className="w-full px-6">
				{/* SidebarMenuItem */}

				{menuItems.map((item) => (
					<SidebarMenuItem key={item.path} {...item} />
				))}
			</div>
		</div>
	)
}
