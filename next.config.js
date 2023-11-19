/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ["@web3inbox/widget-react"],
  // experimental: {
  //   esmExternals: "loose",
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
