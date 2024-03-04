import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const plugins = [bundleAnalyzer];

/** @type {import('next').NextConfig} */
const baseNextConfig = {
  poweredByHeader: false,
};

export default function nextConfig() {
  return plugins.reduce((acc, next) => next(acc), baseNextConfig);
}
