"use client"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authReducer } from "./auth/auth.slice"
import { authApi } from "./auth/auth.api"
import { adminApi } from "./admin/admin.api"
import { doctorApi } from "./doctor/doctor.api"
import { doctorReducer } from "./doctor/doctor.slice"
import { servicesApi } from "./services/services.api"
import { scheduleApi } from "./schedule/schedule.api"
import { appointmentReducer } from "./appointment/appointment.slice"

export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authReducer,
			doctor: doctorReducer,
			appointment: appointmentReducer,
			[authApi.reducerPath]: authApi.reducer,
			[adminApi.reducerPath]: adminApi.reducer,
			[doctorApi.reducerPath]: doctorApi.reducer,
			[servicesApi.reducerPath]: servicesApi.reducer,
			[scheduleApi.reducerPath]: scheduleApi.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				authApi.middleware,
				adminApi.middleware,
				doctorApi.middleware,
				servicesApi.middleware,
				scheduleApi.middleware
			),
	})
}
setupListeners(makeStore().dispatch)

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore["dispatch"]
export type RootState = ReturnType<AppStore["getState"]>
