// Alias redirects for live personas. Aliases for planned personas stay in
// placeholders.js until there is a page to redirect to.
const agents = require("./agents.js");

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const ids = new Set(agents.map((agent) => agent.id));

module.exports = agents
  .flatMap((agent) =>
    (agent.aliases || []).map((name) => ({
      name,
      slug: slugify(name),
      target: agent.id,
    })),
  )
  .filter((entry) => entry.slug && !ids.has(entry.slug));
