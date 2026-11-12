// Canonical page list for sitemap.xml. Add new top-level pages here; agent
// pages are appended from the roster automatically.
const agents = require("./agents.js");

const pages = [
  "/",
  "/about/",
  "/troubleshooting/",
  "/troubleshooting/experts/",
  "/search/",
  "/grimoire/",
  "/grimoire/install/",
  "/grimoire/mcp/",
  "/grimoire/limits/",
  "/personas/",
  "/personas/install/",
  "/personas/platforms/",
  "/personas/build/",
];

module.exports = pages.concat(agents.map((agent) => `/personas/${agent.id}/`));
