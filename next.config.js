/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'app')],
    additionalData: '@import "app/styles/variables.scss";',
  },
}

module.exports = nextConfig
