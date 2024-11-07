import { SERVICE_TYPE } from "@/shared/store/types"

type ServiceNames = "Консультация в клинике" | "Онлайн консультация" | "Вызов на дом"

type IComparedService = {
	[key in SERVICE_TYPE]: ServiceNames
}

export const comparedService: IComparedService = {
	INCLINIC: "Консультация в клинике",
	INHOUSE: "Вызов на дом",
	ONLINE: "Онлайн консультация",
}
