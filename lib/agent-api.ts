/**
 * Public configuration for the Agent API.
 *
 * When NEXT_PUBLIC_AGENT_API_BASE_URL is set (at build time),
 * the frontend calls the Agent API directly — no BFF proxy needed.
 * This is required for static hosting like GitHub Pages where
 * server-side API routes are not available.
 *
 * When it is NOT set, the frontend falls back to the BFF proxy
 * at /api/chat (local dev with Node.js server).
 */

/** Base URL of the Agent API, e.g. http://10.69.93.86:8058 */
export const AGENT_API_BASE_URL = process.env.NEXT_PUBLIC_AGENT_API_BASE_URL ?? ""

/** API key for authenticating with the Agent API */
export const AGENT_API_KEY = process.env.NEXT_PUBLIC_AGENT_API_KEY ?? ""

/** Default agent ID to use when none is specified */
export const DEFAULT_AGENT_ID = process.env.NEXT_PUBLIC_AGENT_ID ?? ""

/** Whether to call the Agent API directly from the browser */
export const isDirectAgentApi = AGENT_API_BASE_URL.length > 0
