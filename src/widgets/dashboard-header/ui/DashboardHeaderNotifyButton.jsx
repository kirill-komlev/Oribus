import { Goal, Video, Bell, MoreHorizontal } from 'lucide-react'

const iconMap = {
	Goal,
	Video,
	Bell,
	MoreHorizontal,
}

export function DashboardHeaderNotifyButton({ icon, value, ...props }) {
	const IconComponent = iconMap[icon] || MoreHorizontal

	return (
		<div className='relative'>
			<IconComponent
				size={40}
				strokeWidth={1.5}
				className='p-2 border-2 border-gray-200 rounded-full transition-all hover:cursor-pointer hover:bg-gray-100'
				{...props}
			></IconComponent>
			{value && <div className='absolute right-0 top-0 bg-red-500 w-4 h-4 rounded-full text-[10px] text-white text-center '>{value}</div>}
		</div>
	)
}
