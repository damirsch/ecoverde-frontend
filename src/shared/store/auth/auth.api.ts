import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IRegistrationResponse } from "./models/types"
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
		sign: build.mutation<IRegistrationResponse, { phone: string }>({
			query: (body) => ({
				url: `/login`,
				method: "POST",
				body,
			}),
		}),

		signUp: build.mutation<IRegistrationResponse, { phone: string }>({
			query: (body) => ({
				url: `/login`,
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

export const { useSignUpMutation, useLogoutMutation } = authApi
