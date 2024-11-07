"use client"
import { useAppDispatch } from "@/shared/hooks/redux"
import { setIsAuth } from "@/shared/store/auth/auth.slice"
import { useCookies } from "next-client-cookies"
import { useEffect } from "react"

const CheckAuth = () => {
	const cookies = useCookies()

	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(setIsAuth(cookies.get("isAuth") === "true"))
	}, [cookies, dispatch])

	return null
}

export default CheckAuth
