import type { NextConfig } from "next";

export const nextConfig: NextConfig = {
  images:{
      remotePatterns:[
          {hostname:'img.clerk.com'}
      ]
  }
};

// @ts-ignore
export default nextConfig;
