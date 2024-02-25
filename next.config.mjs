/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: '/collection',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
    {
      source: '/api/collection/list',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/collection',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
