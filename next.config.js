const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/Uebrwwhux7",
        permanent: false,
      },
      {
        source: "/apply",
        destination: "https://forms.gle/wgz9xC8Q4F2WfRMt7",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
