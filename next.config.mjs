/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/blocks/*": ["./registry/**/*"],
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost","unsplash","fastly.picsum.photos","images.unsplash.com"],
  },
};

export default nextConfig;
