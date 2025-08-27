/** @type {import('next').NextConfig} */
const isGH = process.env.GITHUB_PAGES === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isGH ? `/${repo}` : undefined,
  assetPrefix: isGH ? `/${repo}/` : undefined,
};
export default nextConfig;
