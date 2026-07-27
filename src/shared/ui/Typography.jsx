// shared/ui/typography/Typography.jsx
import { cn } from 'shared/libs/cn'

/**
 * Маппинг вариантов -> HTML-тег и классы Tailwind.
 * Добавь или измени под свой дизайн-систему.
 */
const variantMap = {
	// Заголовки
	h1: { tag: 'h1', className: 'text-4xl font-bold tracking-tight' },
	h2: { tag: 'h2', className: 'text-3xl font-bold tracking-tight' },
	h3: { tag: 'h3', className: 'text-2xl font-bold tracking-tight' },
	h4: { tag: 'h4', className: 'text-xl font-bold' },
	h5: { tag: 'h5', className: 'text-lg font-semibold' },
	h6: { tag: 'h6', className: 'text-base font-semibold' },

	// Текст
	text: { tag: 'p', className: 'text-base text-gray-900' }, // обычный параграф
	subtitle: { tag: 'p', className: 'text-sm text-gray-600' }, // подзаголовок
	caption: { tag: 'span', className: 'text-xs text-gray-500' }, // подпись
	overline: { tag: 'span', className: 'text-xs uppercase tracking-wider text-gray-500' }, // капс надпись
}

/**
 * Универсальный компонент для текста.
 *
 * @param {string} variant - вариант отображения (h1, h2, ..., text, subtitle, caption, overline)
 * @param {string} className - дополнительные классы Tailwind
 * @param {string|ReactNode} children - содержимое
 * @param {string} as - переопределить HTML-тег (например, 'p' вместо 'h1')
 * @param {object} props - остальные пропсы (data-*, onClick, id, ...)
 */
export const Typography = ({ variant = 'text', className, children, as, ...props }) => {
	// Получаем настройки для выбранного варианта (если нет – fallback на 'text')
	const { tag: defaultTag, className: defaultClassName } = variantMap[variant] || variantMap.text

	// Используем переданный тег или стандартный из маппинга
	const Component = as || defaultTag

	return (
		<Component
			className={cn(defaultClassName, className)}
			{...props}
		>
			{children}
		</Component>
	)
}

Typography.displayName = 'Typography'
