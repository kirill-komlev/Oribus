import axios from 'axios'
import { mockDelay } from 'shared/libs'

/**
 * Получение задач для вкладки "List View".
 * Сейчас используется мок-файл из public, позже заменим на реальный эндпоинт.
 */
export const fetchListTasks = async () => {
	// Имитация сетевой задержки (для демонстрации скелетонов)
	await mockDelay(1000)

	const response = await axios.get('/mocks/listTasks.json')
	return response.data // { columns, tasks }
}
