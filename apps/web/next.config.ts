import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  experimental: {},
  turbopack: {
    // point Turbopack at the monorepo root to remove the warning
    root: path.resolve(__dirname, '../..')
  }
};

export default nextConfig;
