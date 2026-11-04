// Canonical page list for sitemap.xml. Add new top-level pages here; agent
// pages are appended from the roster automatically.
const agents = require("./agents.js");

const pages = [
  "/",
  "/about/",
  "/troubleshooting/",
  "/grimoire/",
  "/grimoire/install/",
  "/grimoire/mcp/",
  "/agents/",
  "/agents/install/",
  "/agents/platforms/",
  "/agents/build/",
];

module.exports = pages.concat(agents.map((agent) => `/agents/${agent.id}/`));
