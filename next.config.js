/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "fakestoreapi.com",
      "cdn.vox-cdn.com",
      "s.yimg.com",
      "media.wired.com",
      "cdn.arstechnica.net",
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
