import axios from "axios"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./shared/utils/constants/tokens"

function isDesktop(userAgent: string) {
	const desktopDevices = [/Windows NT/i, /Macintosh/i, /Linux/i]
	const mobileDevices = [
		/Android/i,
		/iPhone/i,
		/iPad/i,
		/iPod/i,
		/BlackBerry/i,
		/Windows Phone/i,
		/Mobile/i,
		/Opera Mini/i,
		/IEMobile/i,
	]

	const isMobile = mobileDevices.some((deviceRegex) => deviceRegex.test(userAgent))
	return !isMobile && desktopDevices.some((deviceRegex) => deviceRegex.test(userAgent))
}

export async function middleware(req: NextRequest) {
	// const { pathname } = req.nextUrl
	// const refreshToken = req.cookies.get(REFRESH_TOKEN)?.value
	// const isInPathname = (s: string) => pathname.startsWith(s)
	// const userAgent = req.headers.get("user-agent") || ""

	// if (
	// 	isInPathname("/auth") ||
	// 	isInPathname("/settings") ||
	// 	isInPathname("/admin") ||
	// 	isInPathname("/desktop") ||
	// 	isInPathname("/appointment") ||
	// 	pathname === "/"
	// ) {
	// 	if (isDesktop(userAgent) && !isInPathname("/desktop")) {
	// 		return NextResponse.redirect(new URL("/desktop", req.url))
	// 	} else if (!isDesktop(userAgent) && isInPathname("/desktop") && pathname !== "/") {
	// 		return NextResponse.redirect(new URL("/", req.url))
	// 	} else if (isDesktop(userAgent) && isInPathname("/desktop")) {
	// 		return NextResponse.next()
	// 	}
	// 	try {
	// 		const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/refresh", {
	// 			withCredentials: true,
	// 			headers: {
	// 				Cookie: `refreshToken=${refreshToken}`,
	// 			},
	// 		})
	// 		const accessToken = res.data[ACCESS_TOKEN]
	// 		const setCookieHeader = res.headers["set-cookie"]
	// 		if (!setCookieHeader) {
	// 			return NextResponse.next()
	// 		}
	// 		if (isInPathname("/auth") || pathname === "/") {
	// 			const response = NextResponse.redirect(new URL("/settings", req.url))
	// 			response.cookies.set("isAuth", "true")
	// 			return response
	// 		}
	// 		const response = NextResponse.next()
	// 		response.cookies.set(ACCESS_TOKEN, accessToken || "")
	// 		response.cookies.set("isAuth", "true")
	// 		return response
	// 	} catch (e) {
	// 		if (!isInPathname("/auth") && pathname !== "/" && !isInPathname("/appointment")) {
	// 			const response = NextResponse.redirect(new URL("/", req.url))
	// 			response.cookies.set("isAuth", "false")
	// 			return response
	// 		}
	// 		const response = NextResponse.next()
	// 		response.cookies.set("isAuth", "false")
	// 		return response
	// 	}
	// }

	return NextResponse.next()
}
