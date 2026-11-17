// Playable demo stories for /try/. All dialogue is original, written for the
// demo — never canon quotes. Death choices carry the overlay quip; endings
// carry follow-up links. `beats` is the flattened pagination source.
function beat(story, id, speaker, text, choices, extra = {}) {
  return { story, id, speaker, text, choices, ...extra };
}
function choice(label, next) {
  return { label, next };
}
function death(label, quip) {
  return { label, death: quip };
}

const drifterBeats = [
  beat(
    "drifter",
    "d1",
    "The Drifter",
    "Hey, hey. Look who wandered onto my ship. Guardian with good timing — I like that. I need a favour. Spider stashed a little package out on the Shore, and I need it before his crew goes digging. You grab it, bring it to me, we\u2019re square. Maybe I even owe you one. Maybe.",
    [
      choice("What\u2019s the job?", "d2"),
      choice("What\u2019s in it for me?", "d2"),
      death("I don\u2019t work for you.", "Bad answer."),
    ]
  ),
  beat(
    "drifter",
    "d2",
    "The Drifter",
    "Straight to it. I like that. Package is in a cave past the Jetsam, marked with Spider\u2019s sigil — you\u2019ll know it, tacky Fallen gold. His crew sweeps the area every hour, so you go quiet or you go loud, but you go fast. Touch nothing else. Spider counts his shiny things.",
    [
      choice("Quiet. I\u2019m gone.", "d3"),
      choice("What happens if his crew catches me?", "d3"),
      death("I\u2019ll take the package and keep it.", "Oh, you\u2019re serious."),
    ]
  ),
  beat(
    "drifter",
    "d3",
    "The Drifter",
    "There it is. Cave mouth, sigil, one very bored Dreg standing watch. The package is inside, past him — small case, warm to the touch, don\u2019t ask why it\u2019s warm. You\u2019ve got one Dreg between you and payday. How do you play it?",
    [
      choice("Sneak past the Dreg.", "d4"),
      choice("Put the Dreg down, quick and clean.", "d4"),
      death("Call out and announce yourself.", "Loud. Wrong."),
    ]
  ),
  beat(
    "drifter",
    "d4",
    "The Drifter",
    "Case in hand — nice. But hear that? Skiff engines. Spider\u2019s crew, right on schedule, and they\u2019re between you and your ship. The cave has a back cleft, tight, dark, probably full of things with too many legs. Or you walk out the front like you own the Shore.",
    [
      choice("Take the back cleft.", "d5"),
      choice("Walk out front, case hidden.", "d5"),
      death("Drop the case and run.", "Coward\u2019s discount."),
    ]
  ),
  beat(
    "drifter",
    "d5",
    "The Drifter",
    "You made it. Case intact, all your limbs attached — my favourite kind of delivery. Here\u2019s your cut, counted honest. Mostly honest. One question before you go, and think careful, because I only ask once: do you want to know what was in the case?",
    [
      choice("Take the cut and walk away.", "end-clean"),
      choice("Yes. What was in it?", "end-truth"),
      death("I\u2019m taking the case back.", "Last mistake."),
    ]
  ),
  beat(
    "drifter",
    "end-clean",
    "The Drifter",
    "Smart. Curiosity\u2019s a debt collector, ooh, yes it is. Spend it somewhere I can\u2019t see, and if Spider asks — you were never here, and neither was I. We\u2019re square, Guardian. Till the next favour.",
    [],
    { type: "ending" }
  ),
  beat(
    "drifter",
    "end-truth",
    "The Drifter",
    "Ha! There it is. Alright — it\u2019s bait. A little Hive-scented lure I\u2019m seeding around the Shore to see what crawls out of the dark. You just helped me fish, brother. Sleep tight, and don\u2019t wander the Jetsam alone.",
    [],
    { type: "ending" }
  ),
];

const erisBeats = [
  beat(
    "eris",
    "e1",
    "Eris Morn",
    "Guardian. You came. I have need of you — not the Vanguard\u2019s kind of need. The Leviathan stirs again, and the Nightmares within it have grown bold. I cannot face them alone, and I will not ask the Vanguard to send more souls into that place. Will you walk the shadowed halls with me?",
    [
      choice("I\u2019m with you, Eris.", "e2"),
      choice("What\u2019s changed on the Leviathan?", "e2"),
      choice("I\u2019ve had enough of the Leviathan.", "end-refuse"),
    ]
  ),
  beat(
    "eris",
    "e2",
    "Eris Morn",
    "The Nightmares wear familiar faces now — not echoes of the fallen, but of the living. Your fireteam. Your Vanguard. They speak with borrowed voices and they know your doubts. Steel yourself: whatever calls your name in the dark, it is not them. Do you understand?",
    [
      choice("It\u2019s not them. I understand.", "e3"),
      choice("How do I tell the real from the Nightmare?", "e3"),
      death("I walk alone. Stay behind me.", "Pride is a door. The dark just knocked."),
    ]
  ),
  beat(
    "eris",
    "e3",
    "Eris Morn",
    "Down there — the Pleasure Gardens, overgrown and listening. A Nightmare of a Cabal champion bars the way, and behind it, the anchor: a shard of Darkness humming like a struck bell. Strike the anchor and the Nightmare starves. Strike the Nightmare first and the anchor will only grow another. Choose.",
    [
      choice("Strike the anchor.", "e4"),
      choice("Draw the Nightmare away, then strike.", "e4"),
      death("Charge the Nightmare head-on.", "The dark remembers the bold. Briefly."),
    ]
  ),
  beat(
    "eris",
    "e4",
    "Eris Morn",
    "The anchor cracks — feel it? The halls exhale. But something follows us up the stair, wearing your voice, Guardian. It begs you to turn around. It says the Vanguard sent it. It says I am leading you to your death. The dead lie beautifully. Do not turn.",
    [
      choice("Keep walking. Don\u2019t turn.", "e5"),
      choice("Tell Eris what it\u2019s saying.", "e5"),
      death("Turn around and face it.", "It was waiting for exactly that."),
    ]
  ),
  beat(
    "eris",
    "e5",
    "Eris Morn",
    "It is done. The halls are quiet — the kind of quiet that means something heard you and chose to wait. You walked through your own voice and did not flinch. Few can claim that. Take this: a charm of bone and wire. While you carry it, the Nightmares will know you — and keep their distance. Mostly.",
    [
      choice("Thank you, Eris. Until next time.", "end-charm"),
      choice("What waits for us down there?", "end-watch"),
      death("Keep the charm. I need no trinkets.", "Refusing a gift? Here? Now?"),
    ]
  ),
  beat(
    "eris",
    "end-charm",
    "Eris Morn",
    "Go, then. Tell no one what you heard in the dark — some truths are seeds, and the Vanguard\u2019s garden is full of weeds. When the Nightmares whisper your name again, and they will, you know where to find me.",
    [],
    { type: "ending" }
  ),
  beat(
    "eris",
    "end-watch",
    "Eris Morn",
    "Honest question, honestly answered: something old, something patient, something that learned our names long before we learned its. Watch the dark, Guardian. It has already started watching you.",
    [],
    { type: "ending" }
  ),
  beat(
    "eris",
    "end-refuse",
    "Eris Morn",
    "Then go. I will not bind you with guilt — the dark does enough of that without my help. But when the Leviathan turns its eye toward the City, remember that you were asked, and you chose rest. I will walk the halls alone.",
    [],
    { type: "ending" }
  ),
];

const stories = [
  {
    id: "drifter",
    name: "The Drifter",
    title: "Spider\u2019s Stash",
    start: "d1",
    blurb:
      "The Drifter needs a package lifted from Spider\u2019s territory on the Shore. Quick, quiet, and absolutely none of Spider\u2019s business.",
  },
  {
    id: "eris",
    name: "Eris Morn",
    title: "The Leviathan\u2019s Shadow",
    start: "e1",
    blurb:
      "Eris Morn asks you to walk the shadowed halls of the Leviathan and put down Nightmares that have grown bold.",
  },
];

const beatNames = {
  d1: "The Offer",
  d2: "The Details",
  d3: "The Cave",
  d4: "The Crew",
  d5: "The Cut",
  "end-clean": "Square",
  "end-truth": "Bait",
  e1: "The Summons",
  e2: "The Warning",
  e3: "The Gardens",
  e4: "The Voice",
  e5: "The Charm",
  "end-charm": "Carried",
  "end-watch": "The Watch",
  "end-refuse": "The Refusal",
};

const beats = [...drifterBeats, ...erisBeats].map((b) => {
  const story = stories.find((s) => s.id === b.story);
  const other = stories.find((s) => s.id !== b.story);
  return {
    ...b,
    name: beatNames[b.id] || b.id,
    storyName: story.name,
    storyTitle: story.title,
    storyStart: story.start,
    otherId: other.id,
    otherName: other.name,
    otherStart: other.start,
  };
});

module.exports = { stories, beats };
