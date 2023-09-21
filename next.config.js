/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/resume",
      destination:
        "https://drive.google.com/file/d/1coxDlJyoWRS3iPNs-XcwVNlNgqJzWKw9/view",
    },
  ],
};

module.exports = nextConfig;
