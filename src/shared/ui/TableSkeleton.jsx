import { cn } from 'shared/libs'

/**
 * Скелетон таблицы, имитирующий структуру с колонками.
 * @param {number} rows - количество строк-скелетонов
 * @param {number} totalSpans - общее количество колонок сетки (сумма span всех колонок)
 * @param {number} columnsCount - количество отображаемых колонок (заголовков). По умолчанию 4.
 * @param {string} className - дополнительные классы
 */
export const TableSkeleton = ({ rows = 5, totalSpans = 5, columnsCount = 4, className }) => {
	return (
		<div className={cn('p-4 bg-white rounded-2xl animate-pulse', className)}>
			<div className='px-4 flex items-center justify-between'>
				<div className='flex gap-2 items-center'>
					<div className='w-9 h-9 bg-gray-200 rounded-full' />
					<div className='w-24 h-6 bg-gray-200 rounded-full' />
					<div className='w-6 h-6 bg-gray-200 rounded-full' />
				</div>
				<div className='w-9 h-9 bg-gray-200 rounded-full' />
			</div>

			<div className='mt-2 overflow-hidden border border-gray-200 rounded-2xl bg-white'>
				{/* Заголовки */}
				<div
					className='grid border-b border-gray-200 bg-gray-50'
					style={{ gridTemplateColumns: `repeat(${totalSpans}, minmax(0, 1fr))` }}
				>
					{Array.from({ length: columnsCount }).map((_, index) => {
						// Первая колонка занимает 2, остальные по 1
						const span = index === 0 ? 2 : 1
						return (
							<div
								key={index}
								className='px-4 py-2'
								style={{ gridColumn: `span ${span}` }}
							>
								<div className='h-6 bg-gray-200 rounded w-3/4' />
							</div>
						)
					})}
				</div>

				{/* Строки */}
				<div className='divide-y divide-gray-200'>
					{Array.from({ length: rows }).map((_, rowIndex) => (
						<div
							key={rowIndex}
							className='grid'
							style={{ gridTemplateColumns: `repeat(${totalSpans}, minmax(0, 1fr))` }}
						>
							{Array.from({ length: columnsCount }).map((_, colIndex) => {
								const span = colIndex === 0 ? 2 : 1
								return (
									<div
										key={colIndex}
										className='p-4 truncate'
										style={{ gridColumn: `span ${span}` }}
									>
										<div className='h-8 bg-gray-200 rounded w-full' />
									</div>
								)
							})}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
