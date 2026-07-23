export function SidebarListAction({ icon, children, props }) {
	return (
		<button
			className='inline-flex gap-3 items-center px-2 py-1 rounded-xl text-lg text-gray-400 hover:bg-gray-100 hover:text-black transition-all duration-200 cursor-pointer'
			{...props}
		>
			{icon}
			{children}
		</button>
	)
}
