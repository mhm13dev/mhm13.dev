import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/resume",
      destination:
        "https://drive.google.com/file/d/1coxDlJyoWRS3iPNs-XcwVNlNgqJzWKw9/view",
      permanent: true,
    },
  ],
};

export default nextConfig;
