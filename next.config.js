/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['owltop-course.vercel.app']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
}

module.exports = nextConfig
