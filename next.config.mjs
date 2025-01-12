/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photohouseapi.photohousemagazine.com",
        port: "",
        pathname: "/upload/**",
      },
    ],
  },
};

export default nextConfig;
