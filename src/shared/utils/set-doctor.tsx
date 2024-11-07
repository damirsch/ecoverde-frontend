"use client"
import { useAppDispatch } from "@/shared/hooks/redux"
import { useEffect } from "react"
import { useGetDoctorSettingsQuery } from "../store/doctor/doctor.api"
import { setDoctor } from "../store/doctor/doctor.slice"

const SetDoctor = () => {
	const { data } = useGetDoctorSettingsQuery(null)

	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(setDoctor(data))
	}, [data, dispatch])

	return null
}

export default SetDoctor
