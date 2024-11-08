"use client"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authReducer } from "./auth/auth.slice"
import { authApi } from "./auth/auth.api"
import { plantsApi } from "./plants/plants.api"
import { userReducer } from "./user/user.slice"

export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authReducer,
			user: userReducer,
			[authApi.reducerPath]: authApi.reducer,
			[plantsApi.reducerPath]: plantsApi.reducer,
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
	})
}
setupListeners(makeStore().dispatch)

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore["dispatch"]
export type RootState = ReturnType<AppStore["getState"]>
