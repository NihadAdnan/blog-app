/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['avatars.githubusercontent.com','https://unsplash.com/s/photos/blog'],
      },
      eslint:{
        ignoreDuringBuilds:true
      }
};

export default nextConfig;
