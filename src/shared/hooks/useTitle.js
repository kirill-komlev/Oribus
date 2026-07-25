import { useContext, useEffect } from 'react'

import { TitleContext } from 'shared/contexts'

export function useTitle(title) {
	const { setTitle } = useContext(TitleContext)

	useEffect(() => {
		setTitle(title)
	}, [title, setTitle])
}
