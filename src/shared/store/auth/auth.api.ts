import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ITokensResponse, ISignUpResponse } from "./models/types"
import { getToken } from "../utils"

export const authApi = createApi({
	reducerPath: "auth/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL + "/auth" || "http://localhost:5000/auth",
		credentials: "include",
		prepareHeaders: (headers) => {
			const token = getToken()
			if (token) {
				headers.set("Authorization", `Bearer ${token}`)
			}
			return headers
		},
	}),
	refetchOnFocus: true,
	endpoints: (build) => ({
		signUp: build.mutation<ISignUpResponse, { phone: string }>({
			query: (body) => ({
				url: `/login_doctor`,
				method: "POST",
				body,
			}),
		}),

		signUpUser: build.mutation<ISignUpResponse, { phone: string }>({
			query: (body) => ({
				url: `/login_user`,
				method: "POST",
				body,
			}),
		}),

		checkCall: build.mutation<ITokensResponse, { phone: string }>({
			query: (body) => ({
				url: `/check_call`,
				method: "POST",
				body,
			}),
		}),

		getTimeToCode: build.mutation<{ timeAwait: number }, { phone: string }>({
			query: (body) => ({
				url: `/check_time`,
				method: "POST",
				body,
			}),
		}),

		logout: build.mutation<null, null>({
			query: () => ({
				url: `/logout`,
				method: "GET",
			}),
		}),

		refresh: build.query<{ accessToken: string; refreshToken: string }, null>({
			query: () => ({
				url: `/refresh`,
				method: "GET",
				credentials: "include",
			}),
		}),
	}),
})

export const {
	useSignUpMutation,
	useCheckCallMutation,
	useGetTimeToCodeMutation,
	useLogoutMutation,
	useSignUpUserMutation,
} = authApi