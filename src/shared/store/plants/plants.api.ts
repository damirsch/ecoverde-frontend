import { createApi } from "@reduxjs/toolkit/query/react"
import { createBaseQuery } from "../utils"
import { PLANT_TYPE } from "../types"

export const plantsApi = createApi({
	reducerPath: "plants/api",
	baseQuery: createBaseQuery("/plants"),
	refetchOnFocus: true,
	endpoints: (build) => ({
		getOnePlant: build.query<{ type: PLANT_TYPE; id: string; image_irl: string }, string>({
			query: (id) => ({
				url: `/${id}`,
				method: "GET",
			}),
		}),

		getAllPlants: build.query<{ type: PLANT_TYPE; id: string; image_url: string }, null>({
			query: () => ({
				url: `/`,
				method: "GET",
			}),
		}),
	}),
})

export const { useGetAllPlantsQuery } = plantsApi
