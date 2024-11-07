import { Service } from "./services/models/types"

export interface Subscribe {
	id: number
	user_id: number
	subscribe_time: SUBSCRIBE_TIME
	start_time: Date
	end_time: Date
}

export interface DoctorInfo {
	id: number
	specialization: string
	gender: string | null
	user_id: number
	path_to_image: string | null
}

export interface Doctor {
	id: number
	name: string
	role: Roles
	name: string
	patronymic: string
	surname: string
	phone: string
	social_network: Socials
	subscribe: Subscribe | null
	doctor_info: DoctorInfo
	favors: Service[]
}

interface Patient {
	id: number
	phone: string
	name: string | null
	surname: string | null
	patronymic: string | null
	city: string | null
}

interface Order {
	id: number
	user_id: number
	patient_id: number | null
	type_order: ORDER_TYPE
	type_favor: SERVICE_TYPE[]
	contact_method: CONTACT_METHOD[]
	payment_method: PAYMENT_METHOD | null
	order_name: string | null
	start_time: string
	end_time: string
	patient: Patient | null
}

export interface Socials {
	telegram?: string
	prodoctorov?: string
	instagram?: string
	vkontakte?: string
}

export interface DoctorSettings {
	id: number
	path_to_image: string
	social_network?: Socials
	user_info?: DoctorInfo
}

export type Roles = "DOCTOR" | "ADMIN"
export type PAYMENT_METHOD = "YOOKASSA" | "CASH" | "CARD"
export type CONTACT_METHOD = "WHATSAPP" | "TELEGRAM" | "CALL"
export type SERVICE_TYPE = "ONLINE" | "INCLINIC" | "INHOUSE"
export type SUBSCRIBE_TIME = "Month_1" | "Month_6" | "Month_12"
export type ORDER_TYPE = "MEET" | "SCHEDULE"
export type ID = string | number
export type SERVICE_STATUS = "BLANK" | "LIVE" | null
