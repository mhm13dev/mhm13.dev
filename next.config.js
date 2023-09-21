/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/resume",
      destination:
        "https://drive.google.com/file/d/1coxDlJyoWRS3iPNs-XcwVNlNgqJzWKw9/view",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
