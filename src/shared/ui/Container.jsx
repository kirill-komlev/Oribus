import { cn } from 'shared/libs/cn/cn'

export function Container({ children, className }) {
	return <div className={cn('mx-6', className)}>{children}</div>
}
