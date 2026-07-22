import { ChevronDown, UserRound } from 'lucide-react'

export function DashboardHeaderProfileButton() {
	return (
		<div className='relative mr-6 cursor-pointer'>
			<div className='bg-purple-500 text-white p-2 ml-2 rounded-full hover:bg-purple-600 transition-all'>
				<UserRound />
				<ChevronDown
					size={20}
					className='absolute top-2.5 -right-6 text-black'
				/>
			</div>
		</div>
	)
}
