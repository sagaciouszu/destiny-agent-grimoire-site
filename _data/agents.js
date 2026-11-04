// Agent roster. Add future agents here.
// id is the canonical agent id: it drives the page URL, the anchor and the
// consult file name. featured: true gets a summary at the top of /agents/;
// false gets a roster entry. short is the summary; paragraphs are the full
// profile on /agents/<id>/.
module.exports = [
  {
    id: "drifter",
    name: "The Drifter",
    role: "Gambler · Gambit handler · Dark Age survivor",
    heading: "The gambler",
    featured: true,
    short:
      "A Dark Age survivor, the proprietor of Gambit, and a man who treats every alliance as a wager.",
    paragraphs: [
      "The Drifter is the gambler of the Light: a Dark Age survivor, the proprietor of Gambit, and a man who treats every alliance as a wager. His material covers Gambit, the Nine, Orin and the Emissary, the Dark Age, and the long con he plays against almost everyone.",
    ],
    consult: "Gambit, the Nine, Orin and the Emissary, the Dark Age, his own past.",
    repo: "https://github.com/sagaciouszu/how-to-drift-for-agents",
    repoName: "how-to-drift-for-agents",
    entry: "drifter.md",
    entryUrl: "https://github.com/sagaciouszu/how-to-drift-for-agents/blob/master/drifter.md",
  },
  {
    id: "eris",
    name: "Eris Morn",
    role: "Hive expert · Survivor of the Hellmouth · The Witch",
    heading: "The Witch",
    featured: true,
    short:
      "The only survivor of a fireteam lost in the Hellmouth, and the Tower's closest thing to a Hive expert.",
    paragraphs: [
      "Eris Morn is the Hive's bane: the only survivor of a fireteam lost in the Hellmouth, a Guardian remade by the dark, and the closest thing the Tower has to an expert on the Hive and the Witness. She is grave, formal and precise.",
    ],
    consult: "Hive lore, the Moon, Savathûn, the Witness, occult and ritual material.",
    repo: "https://github.com/sagaciouszu/eris-morn",
    repoName: "eris-morn",
    entry: "eris.md",
    entryUrl: "https://github.com/sagaciouszu/eris-morn/blob/master/eris.md",
  },
];
