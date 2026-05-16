/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'storage.googleapis.com',
				port: '',
				pathname: '/djkuba-a56e8.appspot.com/**'
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: `/${process.env.CLOUDINARY_CLOUD_NAME}/**`
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/kontakt',
				permanent: true
			},
			{
				source: '/oferta',
				destination: '/kontakt',
				permanent: true
			},
			{
				source: '/galeria',
				destination: '/kontakt',
				permanent: true
			},
			{
				source: '/omnie',
				destination: '/kontakt',
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
