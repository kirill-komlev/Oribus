import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useTabStore = create(
	persist(
		set => ({
			tab: 0,
			selectTab: tabIndex => set(() => ({ tab: tabIndex })),
		}),
		{
			name: 'tab-storage',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
)
