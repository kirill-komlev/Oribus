import { Bell, Goal, Video } from 'lucide-react'

import { DashboardHeaderProfileButton } from './DashboardHeaderProfileButton'
import { DashboardHeaderSearchInput } from './DashboardHeaderSearchInput'

import { Badge, Container, Icon } from 'shared/ui'

const baseStyles = 'w-10 h-10 p-2 border-2 border-gray-200 rounded-full transition-all hover:cursor-pointer hover:bg-gray-100 '

export function DashboardHeader({ title }) {
	return (
		<Container className='py-4 flex items-center justify-between h-12 box-content'>
			<h3 className='text-xl'>{title}</h3>
			<div className='flex gap-2 items-center'>
				<DashboardHeaderSearchInput />
				<div className='flex gap-2 items-center'>
					<Badge>
						<Icon
							icon={Goal}
							className={baseStyles}
						/>
					</Badge>
					<Badge>
						<div className='relative'>
							<Icon
								icon={Video}
								className={baseStyles}
							/>
						</div>
					</Badge>
					<Badge value={2}>
						<Icon
							icon={Bell}
							className={baseStyles}
						/>
					</Badge>
				</div>
				<DashboardHeaderProfileButton />
			</div>
		</Container>
	)
}
