/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  css: ["@/app/globals.css"],
  css: ["@/app/custom.css"],
  experimental: {
    images: {
      upoptimized: true,
    },
  },
  trailingSlash: true,
};

module.exports = nextConfig;
