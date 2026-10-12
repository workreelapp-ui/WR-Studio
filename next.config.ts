import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // There's no separate About page; a permanent redirect tells search
    // engines to drop the old URL.
    return [{ source: "/about", destination: "/", permanent: true }];
  },
};

export default nextConfig;
