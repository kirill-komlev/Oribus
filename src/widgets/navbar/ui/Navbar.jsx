import { Calendar, ChartLine, House, ListChecks, LogOut, Settings, Sparkles, Users } from 'lucide-react'

import Logo from '/icons/logo.png'

import { PAGE_CONFIG } from 'shared/configs/page-config'

import { NavbarLink } from './NavbarLink'

export function Navbar() {
	return (
		<nav className='p-4 flex flex-col gap-4 items-center border-r-2 border-gray-200'>
			<img
				src={Logo}
				alt='Oripio Design'
				className='w-12 h-12'
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
