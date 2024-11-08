"use client"
import { useAppDispatch } from "@/shared/hooks/redux"
import { useEffect } from "react"
import { useGetUserProfileQuery } from "../store/user/user.api"
import { setUser } from "../store/user/user.slice"

const SetDoctor = () => {
	const { data } = useGetUserProfileQuery(null)

	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(setUser(data))
	}, [data, dispatch])

	return null
}

export default SetDoctor
