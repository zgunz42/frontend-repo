/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:5001/:path*', // Adjust this if your emulator is running on a different port
          },
        ];
      },
};

export default nextConfig;
