import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-site.vercel.app',
      },
    ],
  },
};

module.exports = nextConfig;

// export default nextConfig;
