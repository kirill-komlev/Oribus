import { cn } from 'shared/libs'

export function Container({ children, className }) {
	return <div className={cn('mx-6', className)}>{children}</div>
}
