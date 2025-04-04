/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Tempo integration
  env: {
    NEXT_PUBLIC_TEMPO: process.env.NEXT_PUBLIC_TEMPO || false,
  },
  // Configure allowed image domains
  images: {
    domains: ["images.unsplash.com"],
  },
  // Redirect root to dashboard
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
