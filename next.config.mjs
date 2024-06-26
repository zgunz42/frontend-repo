/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:5001/ebuddy-awesome/us-central1/api/:path*', // Adjust this if your emulator is running on a different port
          },
        ];
      },
};

export default nextConfig;
