import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const getInitialState = () => {
	const isAuth = false
	return {
		isAuth: !!isAuth,
	}
}

const initialState = getInitialState()

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload
		},
	},
})

export const { setIsAuth } = authSlice.actions
export const authReducer = authSlice.reducer
