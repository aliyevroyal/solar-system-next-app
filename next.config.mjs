/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/home",
      destination: "/home.html",
    },
  ],
};

export default nextConfig;
