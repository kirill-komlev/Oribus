export function Badge({ value, children }) {
	return (
		<div className='relative'>
			{children}
			{value && <div className='absolute right-0 top-0 bg-red-500 w-4 h-4 rounded-full text-[10px] text-white text-center '>{value >= 99 ? '99' : value}</div>}
		</div>
	)
}
