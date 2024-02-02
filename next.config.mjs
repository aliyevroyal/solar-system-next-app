/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/home",
      destination: "/home.html",
    },
  ],
};

export default nextConfig;
