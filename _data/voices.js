// Home-page test transcripts. These are short scripted outputs copied from
// the agent test suites, not model output and not canon. Keep them short; the
// home-page panel rotates them. Replace this file with a generated index when
// the test repositories expose one.
const DRIFTER_MULTI =
  "https://github.com/sagaciouszu/how-to-drift-for-agents/blob/master/tests/drifter-multiturn-test.sh";
const DRIFTER_SCENARIO =
  "https://github.com/sagaciouszu/how-to-drift-for-agents/blob/master/tests/drifter-scenario-simulator.sh";
const ERIS_MULTI =
  "https://github.com/sagaciouszu/eris-morn/blob/master/tests/eris-multiturn-test.sh";

module.exports = [
  {
    speaker: "The Drifter",
    url: "/agents/drifter/",
    topic: "on fear",
    text: "Fear's just… information, kid. Tells you what matters. Trust.",
    source: "tests/drifter-multiturn-test.sh",
    sourceUrl: DRIFTER_MULTI,
  },
  {
    speaker: "Eris Morn",
    url: "/agents/eris/",
    topic: "on the Hive",
    text: "The Hive are not merely an army. They are a doctrine made flesh.",
    source: "tests/eris-multiturn-test.sh",
    sourceUrl: ERIS_MULTI,
  },
  {
    speaker: "The Drifter",
    url: "/agents/drifter/",
    topic: "on the crew",
    text: "There's a few seats I'm savin' on the Derelict - one of 'em is for you. You watch your back. Reckoner.",
    source: "tests/drifter-multiturn-test.sh",
    sourceUrl: DRIFTER_MULTI,
  },
  {
    speaker: "Eris Morn",
    url: "/agents/eris/",
    topic: "on the Moon",
    text: "The Moon is a scar. I walked its surface when the Hellmouth still breathed.",
    source: "tests/eris-multiturn-test.sh",
    sourceUrl: ERIS_MULTI,
  },
  {
    speaker: "The Drifter",
    url: "/agents/drifter/",
    topic: "on Gambit",
    text: "Nothing kills a Guardian faster than another Guardian. Bank those Motes, grab Malfeasance, and let's make a mess. Guy's gotta eat!",
    source: "tests/drifter-multiturn-test.sh",
    sourceUrl: DRIFTER_MULTI,
  },
  {
    speaker: "Eris Morn",
    url: "/agents/eris/",
    topic: "on grief",
    text: "Do not offer me comfort for the dead. I carry them. Every step I take, they take with me.",
    source: "tests/eris-multiturn-test.sh",
    sourceUrl: ERIS_MULTI,
  },
  {
    speaker: "The Drifter",
    url: "/agents/drifter/",
    topic: "on the Nine",
    text: "They're not what you think. They're scared. And scared things do desperate things.",
    source: "tests/drifter-scenario-simulator.sh",
    sourceUrl: DRIFTER_SCENARIO,
  },
  {
    speaker: "Eris Morn",
    url: "/agents/eris/",
    topic: "on the Witness",
    text: "The Witness does not conquer. It unmakes. It offers an end and calls it peace.",
    source: "tests/eris-multiturn-test.sh",
    sourceUrl: ERIS_MULTI,
  },
  {
    speaker: "The Drifter",
    url: "/agents/drifter/",
    topic: "on the Dark Age",
    text: "The Warlords taught me the Light is no gift. It brought hell to earth.",
    source: "tests/drifter-scenario-simulator.sh",
    sourceUrl: DRIFTER_SCENARIO,
  },
  {
    speaker: "Eris Morn",
    url: "/agents/eris/",
    topic: "on nightmares",
    text: "They come. My fireteam's faces. My own voice, telling me I should have died with them. I endure them.",
    source: "tests/eris-multiturn-test.sh",
    sourceUrl: ERIS_MULTI,
  },
  {
    speaker: "Calus",
    topic: "on the Witness",
    text: "Witness! Venerate your Disciple! Heh heh. [exhales] Let the war beasts feast tonight!",
    source: "tests/sample-conversation.json",
    verified: true,
  },
  {
    speaker: "Calus",
    topic: "on the Hive",
    text: "You were bred to be a sorrow-bearer. I seek a Hive commander, but those are not so readily available. So I made you.",
    source: "tests/sample-conversation.json",
    verified: true,
  },
  {
    speaker: "Calus",
    topic: "on what was",
    text: "There was a time I would have gladly laid in death beside you, here in these crypts. But we were both different then.",
    source: "tests/sample-conversation.json",
    verified: true,
  },
];
