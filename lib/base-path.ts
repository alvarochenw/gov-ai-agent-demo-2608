/**
 * Base path for GitHub Pages sub-directory deployment.
 *
 * In production (GitHub Pages), assets are served from
 * https://alvarochenw.github.io/gov-ai-agent-demo-2608/
 * so all absolute paths must be prefixed with this base.
 *
 * In local dev (next dev), the basePath is handled by
 * Next.js automatically, so we use an empty string.
 */
export const BASE_PATH = process.env.NODE_ENV === "production"
  ? "/gov-ai-agent-demo-2608"
  : ""
