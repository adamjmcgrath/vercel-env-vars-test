/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL || `FOOBAR`,
  },
};

module.exports = nextConfig;
