const sizes = { small: 20, medium: 24, large: 28 }
const strokes = { light: 1, normal: 1.5, bold: 2 }

export const Icon = ({ icon: IconComponent, size = 'medium', stroke = 'normal', ...props }) => (
	<IconComponent
		size={sizes[size]}
		strokeWidth={strokes[stroke]}
		{...props}
	/>
)
