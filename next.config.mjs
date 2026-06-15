/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Three.js ships ESM that Next transpiles cleanly via this flag.
  transpilePackages: ["three"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
