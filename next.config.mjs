/** @type {import('next').NextConfig} */
import { withContentCollections } from "@content-collections/next";

const nextConfig = {
  outputFileTracingIncludes: {
    "/blocks/*": ["./registry/**/*"],
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withContentCollections(nextConfig);
