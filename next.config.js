/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/public/images/:path*',
				destination: 'http://localhost:3000/public/images/:path*'
			}
		]
	},
	reactStrictMode: true
}

module.exports = nextConfig
