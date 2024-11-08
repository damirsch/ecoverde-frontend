import { createApi } from "@reduxjs/toolkit/query/react"
import { createBaseQuery } from "../utils"
import { ChangeUserInfoReq } from "./models/types"
import { User } from "../types"

export const userApi = createApi({
	reducerPath: "user/api",
	baseQuery: createBaseQuery("/user"),
	refetchOnFocus: true,
	endpoints: (build) => ({
		changeUserInfo: build.mutation<null, ChangeUserInfoReq>({
			query: (body) => ({
				url: `/change_info`,
				method: "PATCH",
				body,
			}),
		}),

		getUserProfile: build.query<User, null>({
			query: () => ({
				url: `/`,
				method: "GET",
			}),
		}),
	}),
})

export const { useChangeUserInfoMutation, useGetUserProfileQuery } = userApi
