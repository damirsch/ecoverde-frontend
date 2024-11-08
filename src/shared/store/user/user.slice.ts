import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../types"

interface UserState {
	user: User | undefined
}

const getInitialState = (): UserState => {
	return {
		user: undefined,
	}
}

const initialState: UserState = getInitialState()

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User | undefined>) {
			state.user = action.payload
		},
	},
})

export const { setUser } = userSlice.actions
export const userReducer = userSlice.reducer
