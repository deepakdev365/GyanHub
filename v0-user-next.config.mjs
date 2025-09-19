/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/jobs/category/business-%26-finance',
        destination: '/jobs/category/business-finance',
        permanent: true,
      },
      {
        source: '/jobs/category/education-%26-research',
        destination: '/jobs/category/education-research',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
