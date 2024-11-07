import { CONTACT_METHOD } from "@/shared/store/types"

type CommunicationNames = "Звонок" | "WhatsApp" | "Telegram"

type IComparedCommunication = {
	[key in CONTACT_METHOD]: CommunicationNames
}

export const comparedCommunication: IComparedCommunication = {
	CALL: "Звонок",
	TELEGRAM: "Telegram",
	WHATSAPP: "WhatsApp",
}
