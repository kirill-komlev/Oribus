import { Route, Routes } from 'react-router'

import { PAGE_CONFIG } from '../../configs/page-config'

import { DashboardLayout } from '../../layouts/dashboard-layout/DashboardLayout'

import { DashboardPage } from '../../pages/dashboard/DashboardPage'

export function Router() {
	return (
		<Routes>
			{/* Публичные маршруты */}
			<Route element={<DashboardLayout />}>
				<Route
					path={PAGE_CONFIG.dashboard}
					element={<DashboardPage />}
				/>
				<Route
					path={PAGE_CONFIG.inbox}
					element={<DashboardPage />}
				/>
				<Route
					path={PAGE_CONFIG.comments}
					element={<DashboardPage />}
				/>
				<Route
					path={PAGE_CONFIG.tasks}
					element={<DashboardPage />}
				/>
				<Route
					path={PAGE_CONFIG.teamSettings}
					element={<DashboardPage />}
				/>

				<Route
					path={`${PAGE_CONFIG.workSpace}/:workSpace`}
					element={<DashboardPage />}
				/>

				<Route
					path={`${PAGE_CONFIG.channel}/:channel`}
					element={<DashboardPage />}
				/>

				<Route
					path={`${PAGE_CONFIG.directMessage}/:directMessage`}
					element={<DashboardPage />}
				/>
			</Route>
		</Routes>
	)
}
