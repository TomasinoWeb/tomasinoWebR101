/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/BHtvRaRr",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
