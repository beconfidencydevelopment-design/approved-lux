// import MiniCssExtractPlugin from "mini-css-extract-plugin";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.plugins.push(new MiniCssExtractPlugin());
//     }
//     return config;
//   },
// };

// export default nextConfig;
import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Essential for static deployment
  trailingSlash: false, // Better for cPanel file structure
  // distDir: 'out',
  reactStrictMode: false,
  // Your existing config
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Use Next.js built-in image optimization
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "backend.approvedexperiences.com",
      },
      {
        protocol: "https",
        hostname: "pub-0629005fcfb44f7ca99f4fbb3b9937c3.r2.dev",
      },
      {
        protocol: "https",
        hostname: "cdnimg.co",
      },
    ],
  },

  // Optional: Add basePath if deploying to subdirectory
  // basePath: '/subfolder',

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin());
    }

    // Additional optimization for cPanel
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };

    return config;
  },
};

export default nextConfig;
