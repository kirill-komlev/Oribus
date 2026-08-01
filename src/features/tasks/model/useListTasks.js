import { useQuery } from '@tanstack/react-query'
import { fetchListTasks } from '../api'

/**
 * Хук для получения задач List View.
 * Кэширует данные на 5 минут, легко заменяется на реальный API.
 */
export const useListTasks = () => {
	return useQuery({
		queryKey: ['tasks', 'list'],
		queryFn: fetchListTasks,
		staleTime: 5 * 60 * 1000,
	})
}
