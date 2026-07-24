import { Calendar, ChartLine, House, ListChecks, LogOut, Settings, Sparkles, Users } from 'lucide-react'

import Logo from '/icons/logo.png'

import { PAGE_CONFIG } from 'shared/configs/page-config'

import { NavbarLink } from './NavbarLink'
import { LogoIcon } from 'shared/ui/icon'

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
					<House strokeWidth={1.5} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<ListChecks strokeWidth={1.5} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Users strokeWidth={1.5} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Calendar strokeWidth={1.5} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<ChartLine strokeWidth={1.5} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Sparkles strokeWidth={1.5} />
				</NavbarLink>
			</div>

			<div className='mt-auto flex flex-col gap-4 items-center'>
				<NavbarLink to={PAGE_CONFIG.none}>
					<Settings strokeWidth={1.5} />
				</NavbarLink>
				<NavbarLink to={PAGE_CONFIG.none}>
					<LogOut strokeWidth={1.5} />
				</NavbarLink>
			</div>
		</nav>
	)
}
