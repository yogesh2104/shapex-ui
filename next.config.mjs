/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  reactStrictMode: true,
  images: {
    domains: ["localhost","unsplash","fastly.picsum.photos"],
  },
};

export default nextConfig;
