import { CalendarDays, CircleAlert, Clock, Ellipsis, LayoutDashboard, ListChecks, Plus, Settings, SquareActivity, Users } from 'lucide-react'

import { useTabStore } from 'features/task-tabs'
import { useListTasks } from 'features/tasks'
import { useTitle } from 'shared/hooks'
import { Button, CircleButton, Container, Table, Tab, TabList, Icon, TableSkeleton } from 'shared/ui'

// Описание вкладок страницы
const tabs = [
	{
		value: 0,
		label: 'List view',
		icon: (
			<Icon
				icon={ListChecks}
				size='small'
			/>
		),
	},
	{
		value: 1,
		label: 'Board view',
		icon: (
			<Icon
				icon={LayoutDashboard}
				size='small'
			/>
		),
	},
	{
		value: 2,
		label: 'Calendar view',
		icon: (
			<Icon
				icon={CalendarDays}
				size='small'
			/>
		),
	},
	{
		value: 3,
		label: 'Timeline view',
		icon: (
			<Icon
				icon={Clock}
				size='small'
			/>
		),
	},
]

export function TasksPage() {
	useTitle('Tasks')
	const { activeTab, setActiveTab } = useTabStore()

	// Данные для List View – пока только она работает
	const { data, isLoading, isError } = useListTasks()
	const columns = data?.columns || []
	const tasks = data?.tasks || []

	// Группируем задачи по статусу для разных секций
	const shippedTasks = tasks.filter(t => t.status === 'shipped')
	const reviewTasks = tasks.filter(t => t.status === 'review')
	const inDevelopmentTasks = tasks.filter(t => t.status === 'inDevelopment')
	const inDesignTasks = tasks.filter(t => t.status === 'inDesign')

	// Рендер контента в зависимости от выбранной вкладки
	const renderContent = () => {
		if (activeTab === 0) {
			if (isLoading) {
				return (
					<Container className='p-2 flex flex-col gap-4 bg-gray-50 rounded-2xl'>
						<TableSkeleton
							rows={4}
							totalSpans={5}
							columnsCount={4}
						/>
						<TableSkeleton
							rows={4}
							totalSpans={5}
							columnsCount={4}
						/>
						<TableSkeleton
							rows={4}
							totalSpans={5}
							columnsCount={4}
						/>
						<TableSkeleton
							rows={4}
							totalSpans={5}
							columnsCount={4}
						/>
					</Container>
				)
			}

			if (isError) {
				return <Container className='p-4 text-red-500'>Ошибка загрузки данных. Попробуйте позже.</Container>
			}

			return (
				<Container className='p-2 flex flex-col gap-4 bg-gray-50 rounded-2xl'>
					<Table
						data={shippedTasks}
						status='shipped'
						columns={columns}
						totalSpans={5}
					/>
					<Table
						data={reviewTasks}
						status='review'
						columns={columns}
						totalSpans={5}
					/>
					<Table
						data={inDevelopmentTasks}
						status='inDevelopment'
						columns={columns}
						totalSpans={5}
					/>
					<Table
						data={inDesignTasks}
						status='inDesign'
						columns={columns}
						totalSpans={5}
					/>
				</Container>
			)
		}

		// Остальные вкладки пока заглушки
		if (activeTab === 1) return <Container>Board view content</Container>
		if (activeTab === 2) return <Container>Calendar view content</Container>
		if (activeTab === 3) return <Container>Timeline view content</Container>
		return null
	}

	return (
		<>
			<div className='border-b-2 border-gray-200'>
				<Container>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col gap-1'>
							<div className='flex items-center gap-2'>
								<div className='text-2xl font-medium'>Oripio - Design Tasks</div>
								<Icon
									icon={CircleAlert}
									size='small'
									className='text-gray-500 cursor-pointer'
								/>
							</div>
							<div className='text-lg text-gray-500'>Manage projects by assigning owners, setting timelines, and tracking progress.</div>
						</div>
						<div className='flex gap-2 items-center'>
							<Button>
								<Icon
									icon={SquareActivity}
									size='small'
								/>
								Activity
							</Button>
							<Button>
								<Icon
									icon={Users}
									size='small'
								/>
								Member
							</Button>
							<CircleButton>
								<Icon
									icon={Ellipsis}
									size='small'
								/>
							</CircleButton>
						</div>
					</div>
					<div className='mt-2 flex items-center justify-between'>
						<TabList>
							{tabs.map(tab => (
								<Tab
									key={tab.value}
									value={tab.value}
									label={tab.label}
									icon={tab.icon}
									active={activeTab === tab.value}
									onClick={setActiveTab}
								/>
							))}
						</TabList>

						<div className='inline-flex gap-2 items-center justify-between'>
							<Button size='large'>
								<Icon icon={Settings} />
								Customize
							</Button>
							<Button
								size='large'
								variant='primary'
							>
								<Icon icon={Plus} />
								New Project
							</Button>
						</div>
					</div>
				</Container>
			</div>

			<div className='my-4'>{renderContent()}</div>
		</>
	)
}
