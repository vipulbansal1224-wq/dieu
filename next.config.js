/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dieusterimed.com',
        pathname: '/wp-content/**',
      },
    ],
  },
};

module.exports = nextConfig;
