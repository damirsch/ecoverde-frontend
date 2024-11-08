import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StoreProvider from "./store-provide"
import { CookiesProvider } from "next-client-cookies/server"
import CheckAuth from "@/shared/utils/check-auth"
import classNames from "classnames"
import DocumentWrapper from "@/shared/ui-kit/wrappers/document-wrapper"
import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Eco Verde",
	description: "Plants catalog",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<body className={classNames(inter.className, "antialiased font-arial font-normal")}>
				<StoreProvider>
					<CookiesProvider>
						<DocumentWrapper>
							{children}
							<CheckAuth />
						</DocumentWrapper>
					</CookiesProvider>
				</StoreProvider>
			</body>
		</html>
	)
}
