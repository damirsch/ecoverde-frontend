import { createApi } from "@reduxjs/toolkit/query/react"
import { createBaseQuery } from "../utils"
import { ChangeUserInfoReq } from "./models/types"
import { User } from "../types"

export const userApi = createApi({
	reducerPath: "user/api",
	baseQuery: createBaseQuery("/user"),
	tagTypes: ["UserInfo", "UserImage"],
	refetchOnFocus: true,
	endpoints: (build) => ({
		changeUserInfo: build.mutation<null, ChangeUserInfoReq>({
			query: (body) => ({
				url: `/change_info`,
				method: "PATCH",
				body,
			}),
			invalidatesTags: ["UserInfo"],
		}),

		getUserProfile: build.query<User, number | string>({
			query: (id) => ({
				url: `${id}/user_info`,
				method: "GET",
			}),
			providesTags: ["UserInfo"],
		}),
	}),
})

export const { useChangeUserInfoMutation, useGetUserProfileQuery } = userApi
