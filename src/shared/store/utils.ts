import Cookies from "js-cookie"
import { ACCESS_TOKEN } from "../utils/constants/tokens"
import { BaseQueryApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query"
import { authApi } from "./auth/auth.api"

export const getToken = () => {
	if (typeof window !== "undefined") {
		return Cookies.get(ACCESS_TOKEN)
	}
	return null
}

export const createBaseQuery = (baseUrl: string) => {
	return fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL + baseUrl,
		credentials: "include",
		prepareHeaders: (headers) => {
			const token = getToken()
			if (token) {
				headers.set("Authorization", `Bearer ${token}`)
			}
			return headers
		},
	})
}

export const baseQueryWithReauth = async (
	args: string | FetchArgs,
	api: BaseQueryApi,
	extraOptions: object,
	baseUrl: string
) => {
	const baseQuery = createBaseQuery(baseUrl)
	let result = await baseQuery(args, api, extraOptions)

	if (result.error && result.error.status === 401) {
		const refreshResult = await api.dispatch(authApi.endpoints.refresh.initiate(null))
		if (refreshResult.data?.accessToken) {
			Cookies.set(ACCESS_TOKEN, refreshResult.data.accessToken || "")
			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(authApi.endpoints.logout.initiate(null))
		}
	}

	return result
}
