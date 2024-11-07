import { ru } from "date-fns/locale"

export const customRuLocale = {
	...ru,
	localize: {
		...ru.localize,
		month: (n: number) => {
			const nominativeMonths = [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь",
			]
			return nominativeMonths[n]
		},
	},
}
