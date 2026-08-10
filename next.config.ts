import type { NextConfig } from "next"

const repo = "gov-ai-agent-demo-2608"

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
