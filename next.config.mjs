/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/solar-system",
      destination: "/solar-system.html",
    },
  ],
};

export default nextConfig;
