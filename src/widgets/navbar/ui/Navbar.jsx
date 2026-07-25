import { Calendar, ChartLine, House, ListChecks, LogOut, Settings, Sparkles, Users } from 'lucide-react'

import { NavbarLink } from './NavbarLink'

import { Icon, LogoIcon } from 'shared/ui'
import { PAGE_CONFIG } from 'shared/configs'

export function Navbar() {
	return (
		<nav className='p-4 flex flex-col gap-4 items-center border-r-2 border-gray-200 h-screen'>
			<LogoIcon
				fill='#ffffff'
				className='w-12 h-12 p-2 rounded-2xl bg-gray-900 stroke-gray-900'
			/>
			<hr className='w-full border border-gray-100' />
			<div className='flex flex-col gap-4 items-center'>
				<NavbarLink to={PAGE_CONFIG.dashboard}>
					<Icon icon={House} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Icon icon={ListChecks} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Icon icon={Users} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Icon icon={Calendar} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Icon icon={ChartLine} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Icon icon={Sparkles} />
				</NavbarLink>
			</div>

			<div className='mt-auto flex flex-col gap-4 items-center'>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Icon icon={Settings} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Icon icon={LogOut} />
				</NavbarLink>
			</div>
		</nav>
	)
}
