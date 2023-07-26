/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"blueinventory.local",
			"mydummysite.co.uk",
			"cmsblueinventory.com",
		],
	},
};

module.exports = nextConfig;
