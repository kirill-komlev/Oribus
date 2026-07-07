import { Outlet } from 'react-router'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'

export function DashboardLayout() {
	return (
		<div className='h-screen w-full max-w-screen grid grid-cols-[auto_auto_1fr] overflow-hidden bg-gray-50'>
			<Navbar />
			<Sidebar />
			<div className='overflow-y-auto p-4 m-2 bg-white border border-gray-200 rounded-2xl'>
				<Outlet />
			</div>
		</div>
	)
}
