/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "platform-lookaside.fbsbx.com" },
      { hostname: "robohash.org" },
    ],
  },
};

module.exports = nextConfig;
