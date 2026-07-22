import { PlusCircle } from 'lucide-react'

import { useTabStore } from 'stores/tabStore'

import { cn } from 'libs/cn/cn'

export function Tabs({ tabs }) {
	const tab = useTabStore(state => state.tab)
	const selectTab = useTabStore(state => state.selectTab)

	return (
		<div className='flex items-center -mb-0.5'>
			<div className='inline-flex items-center'>
				{tabs.map((item, index) => (
					<div
						key={`tab-${index}`}
						className={cn(
							'inline-flex gap-2 items-center px-4 py-6',
							'text-gray-500 cursor-pointer border-b-2 border-gray-200 hover:border-gray-300 hover:text-gray-600 hover:bg-gray-50 transition-all',
							tab == item.index && 'border-b-black text-black hover:border-b-black hover:text-black',
						)}
						onClick={() => selectTab(item.index)}
					>
						{item.icon}
						{item.name}
					</div>
				))}
				<div className='px-4 py-6'>
					<PlusCircle
						size={20}
						strokeWidth={1.5}
						className=' text-gray-500 hover:text-gray-600 transition-all cursor-pointer'
					/>
				</div>
			</div>
		</div>
	)
}
