// @ts-check
const { composePlugins, withNx } = require("@nx/next");

// Mirrors the real app's Nx + Turbopack setup. `withNx` resolves the @ui-kit/* path
// alias (libs/ui-kit) and drives how Turbopack emits CSS for out-of-app library
// modules — the configuration under which the shared Button stylesheet is duplicated
// across route chunks and re-ordered on a client navigation.
const nextConfig = {
  nx: { svgr: false },
  experimental: { externalDir: true },
  // Let the dev HMR websocket connect from local and CodeSandbox preview origins.
  // Without this, Next 16 blocks cross-origin dev resources and the bug is masked.
  allowedDevOrigins: ["127.0.0.1", "localhost", "*.csb.app", "*.codesandbox.io"],
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
