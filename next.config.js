/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    MONGO: process.env.MONGO,
  },
};

module.exports = nextConfig;
