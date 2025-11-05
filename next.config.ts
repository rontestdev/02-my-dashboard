import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  },
  turbopack: {
    root: '/home/vmt-rendaga/Work/Practices/next/02-my-dashboard/'
  }
};

export default nextConfig;
