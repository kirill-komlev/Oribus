/**
 * Искусственная задержка для имитации сетевого ответа.
 * Используется только в режиме разработки (в продакшене можно отключить).
 *
 * @param {number} ms - время задержки в миллисекундах (по умолчанию 500 мс)
 * @returns {Promise} - промис, который резолвится через ms миллисекунд
 *
 * @example
 * // Базовая задержка 500 мс
 * await mockDelay();
 *
 * // Кастомная задержка 2 секунды
 * await mockDelay(2000);
 *
 * // Отключить задержку (например, в продакшене)
 * // Можно использовать переменную окружения: import.meta.env.PROD
 * // if (!import.meta.env.PROD) await mockDelay();
 */
export const mockDelay = (ms = 500) => {
	// Если окружение продакшен – не делаем задержку (опционально)
	// if (import.meta.env.PROD) return Promise.resolve();

	return new Promise(resolve => setTimeout(resolve, ms))
}

// Короткий алиас (опционально)
export const sleep = mockDelay
