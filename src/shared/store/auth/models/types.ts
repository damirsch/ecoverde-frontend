export interface ISignUpRequest {
	phone: string
	code: string
	timestamp?: number
}

export interface ISignUpResponse {
	phone_to_auth: string
}

export interface ITokensResponse {
	accessToken: string
	refreshToken: string
}
