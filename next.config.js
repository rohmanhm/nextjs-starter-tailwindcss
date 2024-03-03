const withBundleAnalyzer = require('@next/bundle-analyzer');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const plugins = [bundleAnalyzer];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  poweredByHeader: false,
};

module.exports = () => {
  return plugins.reduce((acc, next) => next(acc), nextConfig);
};
