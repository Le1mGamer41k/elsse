/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'blob.v0.dev',
      'placeholder.svg'
    ],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: '.next',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
