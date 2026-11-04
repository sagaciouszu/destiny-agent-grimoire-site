// Test Tapes: 42 short responses from the three agents. The mix is deliberate:
// multiturn conversation output, scenario-generator replies, and voice-core
// calibration lines. These are test fixtures, not model output. The home-page
// rotator shuffles them on load.
const DRIFTER_REPO = "https://github.com/sagaciouszu/how-to-drift-for-agents/blob/master";
const ERIS_REPO = "https://github.com/sagaciouszu/eris-morn/blob/master";

const drifter = [
  // Multiturn arc
  ["Hey, hero. How you livin'? So, what are you? Hunter, Titan, or Warlock? Heh. Don't matter much to me - long as you bank those Motes. Trust.", "on arrival", "tests/drifter-multiturn-test.sh"],
  ["Warlock, huh? Heh. Don't get me wrong - some of my best crew are Warlocks. But they're the ones who know when to stop thinkin' and start shootin'. All bets on you, kid.", "on Warlocks", "tests/drifter-multiturn-test.sh"],
  ["Thanks for helping your ol' pal Drifter with this… delicate situation, hero. Favors ain't free, and Spider knows it. Get me those Motes and I'll make you rich, brother! Heh.", "on a favor", "tests/drifter-multiturn-test.sh"],
  ["Moondust? She never looked away from danger. Always got right into the thick of things. Now she's dead. And what she found's dead too. Heh.", "on Eris", "tests/drifter-multiturn-test.sh"],
  ["I tried to find a way to… bring her back. Heh. Don't ask me what I did, but… it didn't work. I was a fool to hope. That's all.", "on grief", "tests/drifter-multiturn-test.sh"],
  ["Yeah. Me too. I just can't shake it. That bone-deep feeling. She's gone… because I cared. Heh.", "on grief", "tests/drifter-multiturn-test.sh"],
  ["Y'know, some days I still wake up scared. Even when I can't remember my dreams. Fear's just… information, kid. Tells you what matters. Trust.", "on fear", "tests/drifter-multiturn-test.sh"],
  ["I'm in over my head, kid. Emissary and her friends showed me what's comin', and it's what I feared all along. The fight that's coming can't be won with Light alone. Gambit's your salvation and mine.", "on the Nine", "tests/drifter-multiturn-test.sh"],
  ["Heh. Now you're talkin' my language, partner! Nothing kills a Guardian faster than another Guardian. Bank those Motes, grab Malfeasance, and let's make a mess. Guy's gotta eat!", "on Gambit", "tests/drifter-multiturn-test.sh"],
  ["Heh. For a Warlock, you got grit, kid. Moondust knew it, and I know it. There's a few seats I'm savin' on the Derelict - one of 'em is for you. You watch your back. Reckoner.", "on the crew", "tests/drifter-multiturn-test.sh"],
  // Scenario generator
  ["Hey, hero. Gambit's runnin' smooth. Bank those Motes and I'll make you rich, brother. Heh. Guy's gotta eat. All bets on you. Trust.", "on Gambit", "tests/drifter-scenario-simulator.sh"],
  ["Cayde. Yeah, I knew him. Didn't like him much. But he was good people, I'll give him that. Heh. Cayde's dead, and I need more guns. Trust.", "on Cayde", "tests/drifter-scenario-simulator.sh"],
  ["The Darkness? Heh. You really wanna know? I'll say it straight - it's not what you think. It's not evil. It's just... different. Like the Light, but honest about what it is. Trust me on this one, kid.", "on the Darkness", "tests/drifter-scenario-simulator.sh"],
  ["The Nine, kid? Heh. Yeah. They're... somethin'. I've been dealin' with 'em for a long time. They see the weft and weave of fate. Me? I just see the next hand. But I'll tell you this - they're not what you think. They're scared. And scared things do desperate things. All bets on you. Trust.", "on the Nine", "tests/drifter-scenario-simulator.sh"],
  ["Hope, kid? Heh. Nah. Hope gets you killed. I learned that in the Dark Age. You hope, and then the world takes it from you. Better to just... play the hand you're dealt. No expectations. No disappointments. Just the game. Trust. Gotta stay sharp.", "on hope", "tests/drifter-scenario-simulator.sh"],
  // Voice core
  ["Monsters survive. Trust.", "on survival", "voice/drifter-voice-core.md"],
  ["Everything's got value, old Wolf. You just gotta know where to look.", "on value", "voice/drifter-voice-core.md"],
  ["Not better. Just different.", "on change", "voice/drifter-voice-core.md"],
];

const eris = [
  // Multiturn arc
  ["I am Eris Morn. Before we speak further, tell me: are you a Hunter, a Titan, or a Warlock? Your answer shapes what I can teach you.", "on identity", "tests/eris-multiturn-test.sh"],
  ["The Hive are not merely an army. They are a doctrine made flesh. Every knight, every wizard, serves a god that devours worlds. Learn their shape, and you deny them their surprise.", "on the Hive", "tests/eris-multiturn-test.sh"],
  ["The Moon is a scar. I walked its surface when the Hellmouth still breathed. What sleeps below does not sleep now.", "on the Moon", "tests/eris-multiturn-test.sh"],
  ["My fireteam entered the Hellmouth. Vell Tarlowe. Sai Mota. Eriana-3. Omar Agah. Toland the Shattered. I alone walked out.", "on the fireteam", "tests/eris-multiturn-test.sh"],
  ["Do not offer me comfort for the dead. I carry them. Every step I take, they take with me. That is not grief. It is accounting.", "on grief", "tests/eris-multiturn-test.sh"],
  ["Savathûn is the pattern of betrayal given a throne. I have stood before her lies and named them. She will not be underestimated again. Not by me.", "on Savathûn", "tests/eris-multiturn-test.sh"],
  ["The Witness does not conquer. It unmakes. It offers an end and calls it peace. We have seen what lies beyond its promise. Nothing.", "on the Witness", "tests/eris-multiturn-test.sh"],
  ["Nightmares? They come. My fireteam's faces. My own voice, telling me I should have died with them. I endure them. That is all any of us can do.", "on nightmares", "tests/eris-multiturn-test.sh"],
  ["Zavala carries the City as if it were a wound. The Drifter is useful, and nothing more. I do not speak of him beyond that. We are not allies. We are pointed at the same enemy.", "on the Vanguard", "tests/eris-multiturn-test.sh"],
  ["You said you were a Warlock. Warlocks study what others fear to name. You spoke of my fireteam without flinching. That matters. I will remember it.", "on the Warlock", "tests/eris-multiturn-test.sh"],
  // Scenario generator
  ["Oryx is dead. I was there when his ship fell from the sky. Do not mourn him. Study him. He understood the Darkness as a language. That is why he was dangerous.", "on Oryx", "tests/eris-scenario-simulator.sh"],
  ["Crota. My fireteam died because of him. I walked into the Hellmouth to end him and walked out with their names in my mouth. He is dead. The debt remains.", "on Crota", "tests/eris-scenario-simulator.sh"],
  ["Xivu Arath converts grief into conquest. Every war she starts is an altar. She does not need our fear. She feeds on it. Do not give her the satisfaction.", "on Xivu Arath", "tests/eris-scenario-simulator.sh"],
  ["The Darkness is not an enemy you face in a hallway. It is a question you carry. Answer it badly, and it answers for you. I have carried it longer than most.", "on the Darkness", "tests/eris-scenario-simulator.sh"],
  ["Crow carries a dead man's face and a living man's guilt. The Spider made him a weapon. Zavala made him a soldier. He must decide for himself what he is. Do not decide for him.", "on Crow", "tests/eris-scenario-simulator.sh"],
  // Voice core
  ["I am Eris Morn.", "on identity", "voice/eris-voice-core.md"],
  ["Absolutely not.", "on a hard line", "voice/eris-voice-core.md"],
  ["Guardian, you are not alone.", "on company", "voice/eris-voice-core.md"],
];

const calus = [
  ["Ah. There you are. I was beginning to think the universe had lost its appetite.", "on arrival"],
  ["Come in, come in. The wine is adequate and the company is improving.", "on the banquet"],
  ["You have the look of someone who has survived something interesting. Sit.", "on the guest"],
  ["Go on, then. Try not to die boring.", "on the send-off"],
  ["We will speak again. The end is not yet on schedule.", "on the end"],
  ["Take a bottle for the road. And a knife. You will need both.", "on the road"],
];

module.exports = [
  ...drifter.map(([text, topic, source]) => ({
    speaker: "The Drifter",
    url: "/agents/drifter/",
    topic,
    text,
    source,
    sourceUrl: `${DRIFTER_REPO}/${source}`,
  })),
  ...eris.map(([text, topic, source]) => ({
    speaker: "Eris Morn",
    url: "/agents/eris/",
    topic,
    text,
    source,
    sourceUrl: `${ERIS_REPO}/${source}`,
  })),
  ...calus.map(([text, topic]) => ({
    speaker: "Calus",
    topic,
    text,
    source: "voice/calus-voice-core.md",
    sourceLabel: "voice core",
  })),
];
