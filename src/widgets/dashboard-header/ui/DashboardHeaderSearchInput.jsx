import { Search } from 'lucide-react'

export function DashboardHeaderSearchInput() {
	return (
		<div className='relative mr-4'>
			<Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none' />
			<input
				type='text'
				placeholder='Search'
				className='pl-9 pr-3 py-1.5 bg-gray-50 border-2 border-gray-200 rounded-4xl transition-all outline-0 hover:bg-gray-100 focus:bg-gray-50 focus:border-gray-300'
			/>
		</div>
	)
}
