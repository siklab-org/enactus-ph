import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enactus.org",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
