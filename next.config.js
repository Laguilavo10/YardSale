/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['loremflickr.com', 'api.lorem.space', 'picsum.photos', 'encrypted-tbn0.gstatic.com']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'http',
        hostname: '**'
      }
    ]
  }
}

module.exports = nextConfig
