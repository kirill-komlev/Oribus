import { useState } from 'react'
import { Outlet } from 'react-router'
import { TitleContext } from 'shared/contexts/TitleContext'
import { DashboardHeader } from 'widgets/dashboard-header'

export function DashboardLayout() {
	const [title, setTitle] = useState('Dashboard')

	return (
		<TitleContext.Provider value={{ title, setTitle }}>
			{/* 
        Основной контейнер: 
        - h-screen – занимает всю высоту окна (если есть другие элементы сверху, используй h-[calc(100vh-...)]).
        - flex flex-col – вертикальное расположение.
        - bg-white – фон.
      */}
			<div className='h-screen flex flex-col bg-white'>
				{/* Хедер – фиксированная часть (не сжимается) */}
				<DashboardHeader title={title} />

				{/* Разделитель – тоже фиксированная часть */}
				<hr className='border border-gray-200 flex-shrink-0' />

				{/* 
          Контентная область:
          - flex-1 – занимает всё оставшееся пространство.
          - overflow-y-auto – включает вертикальный скролл.
          - scrollbar-thin ... – кастомный скролл (оставлено из твоего кода).
        */}
				<div className='flex-1 pt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent'>
					<Outlet />
				</div>
			</div>
		</TitleContext.Provider>
	)
}
