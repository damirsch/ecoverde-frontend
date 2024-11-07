import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Doctor } from "../types"

interface DoctorState {
	doctor: Doctor | undefined
}

const getInitialState = (): DoctorState => {
	return {
		doctor: undefined,
	}
}

const initialState: DoctorState = getInitialState()

export const doctorSlice = createSlice({
	name: "doctor",
	initialState,
	reducers: {
		setDoctor(state, action: PayloadAction<Doctor | undefined>) {
			state.doctor = action.payload
		},
	},
})

export const { setDoctor } = doctorSlice.actions
export const doctorReducer = doctorSlice.reducer
