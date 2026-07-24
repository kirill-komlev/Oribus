import { TAG_COLORS } from 'shared/configs/tag-colors'
import { cn } from 'shared/libs/cn'

export function Tags({ color, label }) {
	const styles = TAG_COLORS[color] || TAG_COLORS.blue

	return <div className={cn('px-1.5 py-1 rounded-full text-xs cursor-default', styles.bg, styles.text, styles.hover)}>{label}</div>
}
