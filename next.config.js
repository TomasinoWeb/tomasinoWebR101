/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/Uebrwwhux7",
        permanent: false,
      },
      {
        source: "/apply",
        destination: "https://forms.gle/5gB4ioZCjB6TJmde6",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
