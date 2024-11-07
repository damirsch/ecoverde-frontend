import { PAYMENT_METHOD } from "@/shared/store/types"

type PaymentNames = "Перевод на карту" | "Наличные" | "Юкасса"

type IComparedPayment = {
	[key in PAYMENT_METHOD]: PaymentNames
}

export const comparedPayment: IComparedPayment = {
	CARD: "Перевод на карту",
	CASH: "Наличные",
	YOOKASSA: "Юкасса",
}
