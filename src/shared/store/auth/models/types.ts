export interface IRegistrationRequest {
	phone: string
	code: string
	timestamp?: number
}

export interface IRegistrationResponse {
	phone_to_auth: string
}

export interface ITokensResponse {
	accessToken: string
	refreshToken: string
}
