import path from "path"
import { fileURLToPath } from "url"

/** @type {import('next').NextConfig} */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		domains: ["localhost"],
	},
	reactStrictMode: false,
}

export default nextConfig
