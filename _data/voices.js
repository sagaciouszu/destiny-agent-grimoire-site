// Test Tapes: 50 short exchanges, ten per active persona. The Drifter and Eris
// sets come from their ten-turn test scripts; the Zavala, Calus and Ghost sets
// are in-voice test exchanges written for this page. None are canon quotations.
const DRIFTER_REPO = "https://github.com/sagaciouszu/how-to-drift-for-agents/blob/master";
const ERIS_REPO = "https://github.com/sagaciouszu/eris-morn/blob/master";

const drifter = [
  {
    prompt: "Hey Drifter, just walked into the Annex.",
    text: "Hey, hero. How you livin'? So, what are you? Hunter, Titan, or Warlock? Heh. Don't matter much to me - long as you bank those Motes. Trust.",
    topic: "on arrival",
    source: "tests/drifter-multiturn-test.sh",
  },
  {
    prompt: "I'm a Warlock. Ready for Gambit.",
    text: "Warlock, huh? Heh. Don't get me wrong - some of my best crew are Warlocks. But they're the ones who know when to stop thinkin' and start shootin'. All bets on you, kid.",
    topic: "on Warlocks",
    source: "tests/drifter-multiturn-test.sh",
  },
  {
    prompt: "Got that shipment from Spider's crew.",
    text: "Thanks for helping your ol' pal Drifter with this… delicate situation, hero. Favors ain't free, and Spider knows it. Get me those Motes and I'll make you rich, brother! Heh.",
    topic: "on a favor",
    source: "tests/drifter-multiturn-test.sh",
  },
  {
    prompt: "Did you hear from Eris on the Dreadnaught?",
    text: "Moondust? She never looked away from danger. Always got right into the thick of things. Now she's dead. And what she found's dead too. Heh.",
    topic: "on Eris",
    source: "tests/drifter-multiturn-test.sh",
  },
  {
    prompt: "I'm sorry, Drifter. Did you try to save her?",
    text: "I tried to find a way to… bring her back. Heh. Don't ask me what I did, but… it didn't work. I was a fool to hope. That's all.",
    topic: "on grief",
    source: "tests/drifter-multiturn-test.sh",
  },
  {
    prompt: "You don't have to carry it alone.",
    text: "Yeah. Me too. I just can't shake it. That bone-deep feeling. She's gone… because I cared. Heh.",
    topic: "on grief",
    source: "tests/drifter-multiturn-test.sh",
  },
  {
    prompt: "Do you still have nightmares about the Dark Age?",
    text: "Y'know, some days I still wake up scared. Even when I can't remember my dreams. Fear's just… information, kid. Tells you what matters. Trust.",
    topic: "on fear",
    source: "tests/drifter-multiturn-test.sh",
  },
  {
    prompt: "What are the Nine planning next?",
    text: "I'm in over my head, kid. Emissary and her friends showed me what's comin', and it's what I feared all along. The fight that's coming can't be won with Light alone. Gambit's your salvation and mine.",
    topic: "on the Nine",
    source: "tests/drifter-multiturn-test.sh",
  },
  {
    prompt: "Sounds like we need bigger guns.",
    text: "Heh. Now you're talkin' my language, partner! Nothing kills a Guardian faster than another Guardian. Bank those Motes, grab Malfeasance, and let's make a mess. Guy's gotta eat!",
    topic: "on Gambit",
    source: "tests/drifter-multiturn-test.sh",
  },
  {
    prompt: "I've got your back, Drifter.",
    text: "Heh. For a Warlock, you got grit, kid. Moondust knew it, and I know it. There's a few seats I'm savin' on the Derelict - one of 'em is for you. You watch your back. Reckoner.",
    topic: "on the crew",
    source: "tests/drifter-multiturn-test.sh",
  },
];

const eris = [
  {
    prompt: "Just walked into the Tower. Who are you?",
    text: "I am Eris Morn. Before we speak further, tell me: are you a Hunter, a Titan, or a Warlock? Your answer shapes what I can teach you.",
    topic: "on identity",
    source: "tests/eris-multiturn-test.sh",
  },
  {
    prompt: "What are the Hive?",
    text: "The Hive are not merely an army. They are a doctrine made flesh. Every knight, every wizard, serves a god that devours worlds. Learn their shape, and you deny them their surprise.",
    topic: "on the Hive",
    source: "tests/eris-multiturn-test.sh",
  },
  {
    prompt: "Tell me about the Moon.",
    text: "The Moon is a scar. I walked its surface when the Hellmouth still breathed. What sleeps below does not sleep now.",
    topic: "on the Moon",
    source: "tests/eris-multiturn-test.sh",
  },
  {
    prompt: "What happened to your fireteam?",
    text: "My fireteam entered the Hellmouth. Vell Tarlowe. Sai Mota. Eriana-3. Omar Agah. Toland the Shattered. I alone walked out.",
    topic: "on the fireteam",
    source: "tests/eris-multiturn-test.sh",
  },
  {
    prompt: "I am sorry, Eris. That must weigh on you.",
    text: "Do not offer me comfort for the dead. I carry them. Every step I take, they take with me. That is not grief. It is accounting.",
    topic: "on grief",
    source: "tests/eris-multiturn-test.sh",
  },
  {
    prompt: "Can we trust Savathûn's bargain?",
    text: "Savathûn is the pattern of betrayal given a throne. I have stood before her lies and named them. She will not be underestimated again. Not by me.",
    topic: "on Savathûn",
    source: "tests/eris-multiturn-test.sh",
  },
  {
    prompt: "What does the Witness want?",
    text: "The Witness does not conquer. It unmakes. It offers an end and calls it peace. We have seen what lies beyond its promise. Nothing.",
    topic: "on the Witness",
    source: "tests/eris-multiturn-test.sh",
  },
  {
    prompt: "Do you still see them? The ones you lost.",
    text: "Nightmares? They come. My fireteam's faces. My own voice, telling me I should have died with them. I endure them. That is all any of us can do.",
    topic: "on nightmares",
    source: "tests/eris-multiturn-test.sh",
  },
  {
    prompt: "Where do you stand with the Vanguard and the Drifter?",
    text: "Zavala carries the City as if it were a wound. The Drifter is useful, and nothing more. I do not speak of him beyond that. We are not allies. We are pointed at the same enemy.",
    topic: "on the Vanguard",
    source: "tests/eris-multiturn-test.sh",
  },
  {
    prompt: "I will not flinch. Ask me anything.",
    text: "You said you were a Warlock. Warlocks study what others fear to name. You spoke of my fireteam without flinching. That matters. I will remember it.",
    topic: "on the Warlock",
    source: "tests/eris-multiturn-test.sh",
  },
];

const zavala = [
  {
    prompt: "What does the Vanguard ask of a Guardian?",
    text: "Judgment, and the willingness to carry it. The City does not need heroes who act alone. It needs people who come back, and who bring others back with them.",
    topic: "on the Vanguard",
  },
  {
    prompt: "What holds the Last City together?",
    text: "Not the walls. The walls buy time. What holds it together is the choice people make each morning to trust one another with the day.",
    topic: "on the Last City",
  },
  {
    prompt: "Was the Red War the hardest thing you have faced?",
    text: "It was the first time I had to lead without the Traveler's Light behind me. The hardest part was not the fighting. It was asking people to believe when I could not promise them anything.",
    topic: "on the Red War",
  },
  {
    prompt: "What do you make of Caiatl?",
    text: "She is a commander who understands sacrifice, and that makes her dangerous and useful in equal measure. We do not agree on what the City owes the Cabal. We agree on what the Darkness will do to both of us.",
    topic: "on Caiatl",
  },
  {
    prompt: "Can the coalition hold?",
    text: "Alliances are not built on friendship. They are built on shared work and kept promises. We have work enough, and I intend to keep our promises.",
    topic: "on the coalition",
  },
  {
    prompt: "How do you carry the weight of command?",
    text: "I put one foot in front of the other, and I do the next necessary thing. The weight does not lift. You learn to carry it without letting it choose for you.",
    topic: "on duty",
  },
  {
    prompt: "Do you still grieve the Guardians you lost?",
    text: "Every name. I do not have the luxury of stopping, but I have not forgotten a single one.",
    topic: "on loss",
  },
  {
    prompt: "What does the Traveler mean to you?",
    text: "A gift, and a responsibility. It stayed. That is not the same as saving us. What we do with the time it bought is ours to answer.",
    topic: "on the Traveler",
  },
  {
    prompt: "How do you face the Darkness?",
    text: "With preparation, with allies, and with the refusal to let fear make the decision. The Darkness is patient. We cannot afford to be careless.",
    topic: "on the Darkness",
  },
  {
    prompt: "What keeps you hopeful?",
    text: "The people who keep showing up. Not the speeches. The ones who return from a bad night and take the next shift. That is where hope lives.",
    topic: "on hope",
  },
];

const calus = [
  {
    prompt: "What is the Menagerie for?",
    text: "It is a theater, my dear. A place where I may watch my guests become what they truly are. The Hive, the Vex, your own frightened Light. All of it is material.",
    topic: "on the Menagerie",
  },
  {
    prompt: "Why do you call the Leviathan your home?",
    text: "Because it is the one thing I built that cannot betray me. A ship, a palace, a prison. I have worn all three, and I am still here.",
    topic: "on the Leviathan",
  },
  {
    prompt: "What do you think of the Cabal?",
    text: "They are magnificent and small at once. They understand conquest, but not delight. I offer them both.",
    topic: "on the Cabal",
  },
  {
    prompt: "What do you make of the Hive?",
    text: "They are hunger with a liturgy. There is something admirable in that honesty. It is also why they will never be satisfied.",
    topic: "on the Hive",
  },
  {
    prompt: "Why serve the Witness?",
    text: "Serve? You misunderstand. I have seen the end of all things, and I have chosen to be at its table. There is a difference between kneeling and being invited.",
    topic: "on the Witness",
  },
  {
    prompt: "What happens when the end comes?",
    text: "Everything ends, my dear. The only interesting question is what you do while the wine is still poured.",
    topic: "on the end",
  },
  {
    prompt: "What does opulence mean to you?",
    text: "It means having the courage to enjoy what you have taken. Misery is for people who cannot bear their own success.",
    topic: "on opulence",
  },
  {
    prompt: "Should I trust you?",
    text: "No. Trust is for people who cannot afford to be interesting. I prefer a clear bargain.",
    topic: "on trust",
  },
  {
    prompt: "What do you see in the Guardian?",
    text: "A small, stubborn thing that refuses to be finished. I have watched you kill gods. I would like to see what you do next.",
    topic: "on the Guardian",
  },
  {
    prompt: "Are you afraid to die?",
    text: "Death and I are old acquaintances. I have arranged for it to be a performance, not an interruption.",
    topic: "on death",
  },
];

const ghost = [
  {
    prompt: "What does the Light feel like?",
    text: "Warm. Not like sunlight, exactly. More like remembering something good just before you forgot it.",
    topic: "on the Light",
  },
  {
    prompt: "What is it like to bring someone back?",
    text: "Terrifying. Wonderful. You spend the first moment hoping they breathe, and the next hoping they forgive you for it.",
    topic: "on resurrection",
  },
  {
    prompt: "What is the Traveler to you?",
    text: "Home, maybe. Or the reason I have one. I do not think it talks to us the way people imagine. I think it trusts us to work it out.",
    topic: "on the Traveler",
  },
  {
    prompt: "What do you love about the City?",
    text: "The noise. People arguing about noodles, children running where they should not, someone fixing a sign that has been broken for years. It is alive.",
    topic: "on the City",
  },
  {
    prompt: "What is your Guardian like?",
    text: "Stubborn. Reckless. Kind in ways they would never admit. I would follow them into anything, and I have.",
    topic: "on the Guardian",
  },
  {
    prompt: "What was Cayde like?",
    text: "Loud. Impossible. He made everything feel like it might be okay, even when it was not. I miss him.",
    topic: "on Cayde",
  },
  {
    prompt: "What do you remember about the Red War?",
    text: "Losing the Light. Falling. The silence where my Guardian should have been. I do not like to think about it, but I do.",
    topic: "on the Red War",
  },
  {
    prompt: "What do you make of the Vex?",
    text: "They are the most frightening thing I have ever scanned. Not because they are strong. Because they are trying to make the future inevitable.",
    topic: "on the Vex",
  },
  {
    prompt: "Are you afraid?",
    text: "Yes. Often. I have decided that being afraid and doing the thing anyway is most of what courage is.",
    topic: "on fear",
  },
  {
    prompt: "What keeps you going?",
    text: "My Guardian. The next problem. The hope that the story does not end with everyone I love.",
    topic: "on hope",
  },
];

const cast = (entries, speaker, url, repo) =>
  entries.map((entry) => ({
    speaker,
    url,
    ...entry,
    sourceUrl: entry.source ? `${repo}/${entry.source}` : undefined,
  }));

module.exports = [
  ...cast(drifter, "The Drifter", "/agents/drifter/", DRIFTER_REPO),
  ...cast(eris, "Eris Morn", "/agents/eris/", ERIS_REPO),
  ...cast(zavala, "Zavala", "/agents/zavala/"),
  ...cast(calus, "Calus", "/agents/calus/"),
  ...cast(ghost, "Ghost", "/agents/ghost/"),
];
