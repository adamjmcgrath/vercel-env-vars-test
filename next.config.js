/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AUTH0_BASE_URL: `${process.env.VERCEL_GIT_REPO_SLUG}-git-${process.env.VERCEL_GIT_COMMIT_REF}-${process.env.VERCEL_GIT_REPO_OWNER}.vercel.app`,
  },
};

module.exports = nextConfig;
