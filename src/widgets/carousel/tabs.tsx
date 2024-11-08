import { PLANT_TYPE } from "@/shared/store/types"
import classNames from "classnames"
import { Dispatch, SetStateAction } from "react"

export default function PlantTab({
	currentTab,
	setCurrentTab,
}: {
	currentTab: PLANT_TYPE | null
	setCurrentTab: Dispatch<SetStateAction<PLANT_TYPE | null>>
}) {
	return (
		<div
			className={classNames(
				"transition-all duration-700 left-0 z-[999] absolute bg-slate-500 w-screen h-screen",
				currentTab ? "top-0" : "top-full"
			)}
		>
			<p
				className='flex flex-col justify-center items-center h-full text-4xl text-white'
				onClick={() => setCurrentTab(null)}
			>
				{currentTab}
			</p>
		</div>
	)
}
