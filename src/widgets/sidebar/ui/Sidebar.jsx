import { Icon } from 'shared/ui'
import { CircleDashed, ClipboardList, CodeXml, Ellipsis, Hash, LayoutGrid, MessageSquareMore, Pencil, Plus, Settings, UserRound } from 'lucide-react'

import { SidebarListLink } from './SidebarListLink'
import { SidebarListTitle } from './SidebarListTitle'
import { SidebarList } from './SidebarList'
import { SidebarListAction } from './SidebarListAction'
import { PAGE_CONFIG } from 'shared/configs'

const mainMenuList = [
	{
		to: PAGE_CONFIG.inbox,
		icon: <Icon icon={LayoutGrid} />,
		text: 'Inbox',
	},
	{
		to: PAGE_CONFIG.comments,
		icon: <Icon icon={MessageSquareMore} />,
		text: 'Assigned Comments',
	},
	{
		to: PAGE_CONFIG.tasks,
		icon: <Icon icon={ClipboardList} />,
		text: 'My Tasks',
	},
	{
		to: PAGE_CONFIG.teamSettings,
		icon: <Icon icon={Settings} />,
		text: 'Team Settings',
	},
]

const workSpacesList = [
	{
		to: `${PAGE_CONFIG.workSpace}/W23954736`,
		icon: (
			<Icon
				icon={Pencil}
				stroke='bold'
				className='p-0.5 bg-blue-500 rounded'
				color='#ffffff'
			/>
		),
		text: 'Design Team',
	},
	{
		to: `${PAGE_CONFIG.workSpace}/W89023456`,
		icon: (
			<Icon
				icon={CodeXml}
				stroke='bold'
				className='p-0.5 bg-green-500 rounded'
				color='#ffffff'
			/>
		),
		text: 'Development Deck',
	},
	{
		to: `${PAGE_CONFIG.workSpace}/W12353467`,
		icon: (
			<Icon
				icon={CircleDashed}
				stroke='bold'
				className='p-0.5 bg-purple-500 rounded'
				color='#ffffff'
			/>
		),
		text: 'Innovation Lab',
	},
]

const channelsList = [
	{
		to: `${PAGE_CONFIG.channel}/C12353467`,
		icon: <Icon icon={Hash} />,
		text: 'Welcome',
	},
	{
		to: `${PAGE_CONFIG.channel}/C23353467`,
		icon: <Icon icon={Hash} />,
		text: 'General',
		comment: 'AS Oripio',
	},
]

const messagesList = [
	{
		to: `${PAGE_CONFIG.directMessage}/DM1235346`,
		icon: (
			<Icon
				icon={UserRound}
				stroke='bold'
				className='p-0.5 bg-taupe-500 rounded-2xl'
				color='#ffffff'
			/>
		),
		text: 'eren-jaeger@gmail.com',
	},
	{
		to: `${PAGE_CONFIG.directMessage}/DM2335346`,
		icon: (
			<Icon
				icon={UserRound}
				stroke='bold'
				className='p-0.5 bg-red-500 rounded-2xl'
				color='#ffffff'
			/>
		),
		text: 'mikasa-ackerman@gmail.com',
	},
	{
		to: `${PAGE_CONFIG.directMessage}/DM3435346`,
		icon: (
			<Icon
				icon={UserRound}
				stroke='bold'
				className='p-0.5 bg-yellow-500 rounded-2xl'
				color='#ffffff'
			/>
		),
		text: 'armin-arlert@gmail.com',
	},
]

export function Sidebar() {
	return (
		<div className='h-screen flex flex-col max-w-72 w-auto'>
			<div className='px-6 py-4 shrink-0'>
				<h3 className='font-semibold text-xl'>Oripio Design</h3>
				<h5 className='text-sm text-gray-600'>Team Plan</h5>
			</div>
			<hr className='w-full border border-gray-200 shrink-0' />

			<div className='pt-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent'>
				<div className='flex flex-col gap-4'>
					<SidebarList>
						<SidebarListTitle>Main Menu</SidebarListTitle>
						{mainMenuList.map((item, index) => (
							<SidebarListLink
								key={`sidebar-link-main-menu-${index}`}
								to={item.to}
								icon={item.icon}
								comment={item.comment}
							>
								{item.text}
							</SidebarListLink>
						))}
						<SidebarListAction icon={<Icon icon={Ellipsis} />}>More</SidebarListAction>
					</SidebarList>

					<SidebarList>
						<SidebarListTitle>Work Spaces</SidebarListTitle>
						{workSpacesList.map((item, index) => (
							<SidebarListLink
								key={`sidebar-link-work-spaces-${index}`}
								to={item.to}
								icon={item.icon}
								comment={item.comment}
							>
								{item.text}
							</SidebarListLink>
						))}
						<SidebarListAction icon={<Icon icon={Plus} />}>New Space</SidebarListAction>
					</SidebarList>

					<SidebarList>
						<SidebarListTitle>Channels</SidebarListTitle>
						{channelsList.map((item, index) => (
							<SidebarListLink
								key={`sidebar-link-channels-${index}`}
								to={item.to}
								icon={item.icon}
								comment={item.comment}
							>
								{item.text}
							</SidebarListLink>
						))}
						<SidebarListAction icon={<Icon icon={Plus} />}>Add Channel</SidebarListAction>
					</SidebarList>

					<SidebarList>
						<SidebarListTitle>Direct Messages</SidebarListTitle>
						{messagesList.map((item, index) => (
							<SidebarListLink
								key={`sidebar-link-direct-messages-${index}`}
								to={item.to}
								icon={item.icon}
								comment={item.comment}
							>
								{item.text}
							</SidebarListLink>
						))}
						<SidebarListAction icon={<Icon icon={Plus} />}>New Message</SidebarListAction>
					</SidebarList>
				</div>
			</div>
		</div>
	)
}
