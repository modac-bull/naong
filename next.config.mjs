import withTwin from './withTwin.mjs'

/**
 * @type {import('next').NextConfig}
 */
export default withTwin({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
})
