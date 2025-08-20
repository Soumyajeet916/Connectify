/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Add the Google User Content hostname here
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig