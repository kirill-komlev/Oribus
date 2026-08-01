import { useState } from 'react'
import { ChevronDown, ChevronUp, Ellipsis, Flag, UserRound, EyeOff } from 'lucide-react'
import { TAGS, USERS } from 'shared/configs'
import { Chip, Icon, Tags } from '.'

// Маппинги для пользователей и тегов
const usersMap = new Map(USERS.map(u => [u.id, u.name]))
const tagMap = new Map(TAGS.map(tag => [tag.id, tag]))

// Хелпер для получения тега
const getTagInfo = id => tagMap.get(id) || null

// ============================================================
// Рендер-функции для колонок (всё здесь, без внешних компонентов)
// ============================================================
const cellRenderers = {
	project: row => {
		const tags = row.project.tags || []
		const visibleTags = tags.slice(0, 2)
		const hiddenCount = tags.length - 2

		return (
			<div className='flex items-center gap-3'>
				<div
					className='truncate'
					title={row.project.text}
				>
					{row.project.text}
				</div>
				{tags.length > 0 && (
					<div className='flex flex-none gap-1'>
						{visibleTags.map(id => {
							const info = getTagInfo(id)
							return info ? (
								<Tags
									key={id}
									color={info.color}
									label={info.name}
								/>
							) : null
						})}
						{hiddenCount > 0 && (
							<div className='relative group'>
								<Tags
									color='gray'
									label={`+${hiddenCount}`}
								/>
								<div className='absolute hidden -top-8 left-1/2 transform -translate-x-1/2 group-hover:flex items-center gap-1 bg-white p-1 shadow-md rounded-md'>
									{tags.slice(2).map(id => {
										const info = getTagInfo(id)
										return info ? (
											<Tags
												key={id}
												color={info.color}
												label={info.name}
											/>
										) : null
									})}
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		)
	},

	assignees: row => {
		const userIds = row.assignees || []
		return (
			<div className='flex items-center'>
				{userIds.map(id => (
					<div
						key={id}
						className='group relative p-1 -mr-2 text-xs bg-gray-200 rounded-full border-2 border-white'
					>
						<UserRound
							className='text-gray-700'
							size={20}
						/>
						<div className='absolute hidden -top-8 left-1/2 transform -translate-x-1/2 w-max px-2 py-1 rounded-2xl bg-gray-200 group-hover:block'>{usersMap.get(id)}</div>
					</div>
				))}
			</div>
		)
	},

	due_date: row => <span>{row.due_date}</span>,

	priority: row => {
		const colorMap = {
			High: 'text-red-500',
			Medium: 'text-yellow-500',
			Normal: 'text-green-500',
		}
		const color = colorMap[row.priority] || 'text-gray-500'
		return (
			<div className='flex gap-2 items-center truncate'>
				<Flag
					size={20}
					className={color}
				/>
				{row.priority}
			</div>
		)
	},
}

// ============================================================
// Основной компонент Table
// ============================================================
export function Table({ data, status, columns, totalSpans = 5 }) {
	const [open, setOpen] = useState(true)

	return (
		<div className='p-4 bg-white rounded-2xl'>
			<div className='px-4 flex items-center justify-between'>
				<div className='flex gap-2 items-center'>
					<button
						onClick={() => setOpen(!open)}
						className='cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-all'
					>
						{open ? (
							<Icon
								icon={ChevronUp}
								size='large'
							/>
						) : (
							<Icon
								icon={ChevronDown}
								size='large'
							/>
						)}
					</button>
					<Chip
						status={status}
						count={data.length}
					/>
				</div>
				<button className='cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-all'>
					<Icon
						icon={Ellipsis}
						size='large'
					/>
				</button>
			</div>

			{open ? (
				<OpenTable
					data={data}
					columns={columns}
					totalSpans={totalSpans}
				/>
			) : (
				<HiddenTable dataLength={data.length} />
			)}
		</div>
	)
}

// ============================================================
// Развёрнутая таблица
// ============================================================
function OpenTable({ data, columns, totalSpans }) {
	return (
		<div className='mt-2 overflow-hidden border border-gray-200 rounded-2xl bg-white'>
			<div
				className='grid border-b border-gray-200 bg-gray-50'
				style={{ gridTemplateColumns: `repeat(${totalSpans}, minmax(0, 1fr))` }}
			>
				{columns.map(col => (
					<div
						key={col.key}
						className='px-4 py-2'
						style={{ gridColumn: `span ${col.span || 1}` }}
					>
						{col.label}
					</div>
				))}
			</div>

			<div className='divide-y divide-gray-200'>
				{data.map((row, index) => (
					<TableRow
						key={index}
						row={row}
						columns={columns}
						totalSpans={totalSpans}
					/>
				))}
			</div>
		</div>
	)
}

// ============================================================
// Строка таблицы
// ============================================================
function TableRow({ row, columns, totalSpans }) {
	return (
		<div
			className='grid'
			style={{ gridTemplateColumns: `repeat(${totalSpans}, minmax(0, 1fr))` }}
		>
			{columns.map(col => {
				const renderFn = cellRenderers[col.key]
				const content = renderFn ? renderFn(row) : (row[col.key] ?? '')
				return (
					<div
						key={col.key}
						className='p-4 truncate'
						style={{ gridColumn: `span ${col.span || 1}` }}
					>
						{content}
					</div>
				)
			})}
		</div>
	)
}

// ============================================================
// Свёрнутое состояние
// ============================================================
function HiddenTable({ dataLength }) {
	return (
		<div className='mt-2 px-4 py-3 flex items-center gap-3 border border-gray-200 rounded-2xl bg-white'>
			<Icon
				icon={EyeOff}
				size='small'
				className='text-gray-500'
			/>
			<p className='text-gray-500'>{dataLength} tasks are hidden in this view</p>
		</div>
	)
}
