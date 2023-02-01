// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://blockchain.info/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
