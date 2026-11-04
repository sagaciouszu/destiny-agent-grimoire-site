// Old /agents/ URLs moved to /personas/. Each entry becomes a noindex redirect.
const agents = require("./agents.js");

const sections = [
  { slug: "", title: "Personas", target: "/personas/" },
  { slug: "install/", title: "Install the Characters", target: "/personas/install/" },
  { slug: "platforms/", title: "Use Another App", target: "/personas/platforms/" },
  { slug: "build/", title: "Build a Persona", target: "/personas/build/" },
];

const personas = agents.map((agent) => ({
  slug: `${agent.id}/`,
  title: agent.name,
  target: `/personas/${agent.id}/`,
}));

const aliases = [
  { slug: "the-drifter/", title: "The Drifter", target: "/personas/drifter/" },
  { slug: "eris-morn/", title: "Eris Morn", target: "/personas/eris/" },
  { slug: "commander-zavala/", title: "Zavala", target: "/personas/zavala/" },
  { slug: "emperor-calus/", title: "Calus", target: "/personas/calus/" },
  { slug: "the-ghost/", title: "Ghost", target: "/personas/ghost/" },
];

module.exports = [...sections, ...personas, ...aliases];
