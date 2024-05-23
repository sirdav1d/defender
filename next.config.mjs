/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { missingSuspenseWithCSRBailout: false, },
  images: {
    domains: ['www.datocms-assets.com']
  }
};

export default nextConfig;
