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
    domains: ["infyfunding.nyc3.digitaloceanspaces.com"],
  },
};

export default nextConfig;
