import { Outlet } from 'react-router'

import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

export function MainLayout() {
	return (
		<div className='h-screen w-full max-w-screen grid grid-cols-[auto_auto_1fr] overflow-hidden bg-gray-50'>
			<Navbar />
			<Sidebar />
			<Outlet />
		</div>
	)
}
