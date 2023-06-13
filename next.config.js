/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'standalone',
  images: {
    domains: ['raw.githubusercontent.com']
  },
  // experimental:{
  //   outputStandalone: true
  // }
}

module.exports = nextConfig
