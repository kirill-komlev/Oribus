import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useTabStore = create(
	persist(
		set => ({
			activeTab: 0, // значение по умолчанию
			setActiveTab: tab => set({ activeTab: tab }),
		}),
		{
			name: 'tasks-tab-storage', // ключ в sessionStorage
			storage: createJSONStorage(() => sessionStorage), // используем sessionStorage (по умолчанию localStorage)
		},
	),
)
