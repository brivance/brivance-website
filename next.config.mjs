/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.briannavance.com",
      },
    ],
  },
};

export default nextConfig;
