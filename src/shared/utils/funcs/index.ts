export function formatNumberWithSpaces(num: string | number): string {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export function formatPhoneNumber(phoneNumber: string | number): string {
	if (!phoneNumber) return ""
	return phoneNumber.toString().replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")
}
