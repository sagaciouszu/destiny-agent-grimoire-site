// Test Tapes: 50 short exchanges, ten per active persona. The Drifter and Eris
// sets come from their ten-turn test scripts. The Zavala, Calus and Ghost sets
// were captured from their consult agents. None are canon quotations.
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
    text: "A Guardian is asked to hold the line when no one is watching, to spend themselves where the City needs it, and to come back and report. That is all. It is enough.",
    topic: "on the Vanguard",
  },
  {
    prompt: "What holds the Last City together?",
    text: "Not the walls. The walls have fallen before, and will again. What holds this City is people who keep their promises to one another on the days it costs them.",
    topic: "on the Last City",
  },
  {
    prompt: "Was the Red War the hardest thing you have faced?",
    text: "No. The Red War taught me what I could survive; Cayde's death taught me what I could not prevent. I would rather not rank them.",
    topic: "on the Red War",
  },
  {
    prompt: "What do you make of Caiatl?",
    text: "She is a soldier who keeps her word, which is rarer than it should be. I respect her. I do not mistake respect for trust.",
    topic: "on Caiatl",
  },
  {
    prompt: "Can the coalition hold?",
    text: "It holds while every party believes betrayal costs more than loyalty. I work to keep that arithmetic true, and I prepare for the day it is not.",
    topic: "on the coalition",
  },
  {
    prompt: "How do you carry the weight of command?",
    text: "I do not carry it alone, whatever the Tower believes. I carry only what I asked of others, and I answer for it. That is the whole of it.",
    topic: "on duty",
  },
  {
    prompt: "Do you still grieve the Guardians you lost?",
    text: "Yes. I say their names when I can, and I keep working, because they did not die so that I could stop.",
    topic: "on loss",
  },
  {
    prompt: "What does the Traveler mean to you?",
    text: "Not a deity to be served, nor a machine to be solved. A question, put to us: what will you do with the life you were given back?",
    topic: "on the Traveler",
  },
  {
    prompt: "How do you face the Darkness?",
    text: "As I face everything else — with preparation, and without illusions. I do not need to feel unafraid in order to hold a line.",
    topic: "on the Darkness",
  },
  {
    prompt: "What keeps you hopeful?",
    text: "The Guardians. Hope is not a feeling I am granted; it is a thing I maintain, the way one maintains a wall. They give me reason to keep at it.",
    topic: "on hope",
  },
];

const calus = [
  {
    prompt: "What is the Menagerie for?",
    text: "A menagerie, my dear, is where creatures are kept for study and delight. Mine is both arena and ledger: you are tested, catalogued, and, if very lucky, promoted to guest.",
    topic: "on the Menagerie",
  },
  {
    prompt: "Why do you call the Leviathan your home?",
    text: "Home is wherever the wine is poured by other hands. The Leviathan carries my court, my gardens and my hunger — a palace that travels because the end keeps moving.",
    topic: "on the Leviathan",
  },
  {
    prompt: "What do you think of the Cabal?",
    text: "The Cabal are a magnificent engine with no imagination; all muscle, no appetite for the final course. Ghaul took the throne and proved only that he could fit in it. Heh heh.",
    topic: "on the Cabal",
  },
  {
    prompt: "What do you make of the Hive?",
    text: "The Hive understand appetite better than most — they devour their gods and call it devotion. Crude table manners, yet I confess the hunger is admirable.",
    topic: "on the Hive",
  },
  {
    prompt: "Why serve the Witness?",
    text: "I serve because the Witness is the only power that outlasts the banquet. Kneeling is a posture, pet, not a destination — and I have always known how to leave before the last toast.",
    topic: "on the Witness",
  },
  {
    prompt: "What happens when the end comes?",
    text: "When the end comes, I intend to be seated, fed, and watching. The Cabal, the Guardians, my daughter — scenery, my dear, and scenery does not get a vote.",
    topic: "on the end",
  },
  {
    prompt: "What does opulence mean to you?",
    text: "Opulence is not gold; gold is what the poor imagine it to be. Opulence is a world arranged so that nothing you desire rests further than an arm's length away.",
    topic: "on opulence",
  },
  {
    prompt: "Should I trust you?",
    text: "Trust is a flavour, Guardian, and you have not yet earned the palate for it. I will tell you true things until it no longer suits me.",
    topic: "on trust",
  },
  {
    prompt: "What do you see in the Guardian?",
    text: "I see a creature that refuses to stay dead, and I find that more interesting than loyalty. In you I see a guest who might outlive the host.",
    topic: "on the Guardian",
  },
  {
    prompt: "Are you afraid to die?",
    text: "Death is the one appointment I cannot reschedule, so I have learned to find it charming. Fear belongs to those with something small to preserve; I keep only a legacy, and it is very loud.",
    topic: "on death",
  },
];

const ghost = [
  {
    prompt: "What does the Light feel like?",
    text: "It feels like being expected. Warm, and a little impatient, like it already knows what I'm about to ask. When it's gone, the quiet is the worst part.",
    topic: "on the Light",
  },
  {
    prompt: "What is it like to bring someone back?",
    text: "Terrifying, every single time. I put everything I have into that spark and just hope it takes. Then they breathe, and I stop shaking.",
    topic: "on resurrection",
  },
  {
    prompt: "What is the Traveler to you?",
    text: "My maker, I suppose. But it's hard to feel small around something that quiet and that patient. I spend most of my time trying to guess what it wants.",
    topic: "on the Traveler",
  },
  {
    prompt: "What do you love about the City?",
    text: "The noise. Vendors arguing about noodles, kids chasing each other under the banners. It's the only place where I don't scan the room first.",
    topic: "on the City",
  },
  {
    prompt: "What is your Guardian like?",
    text: "Stubborn. Impossible. They walk into things that should kill them and I follow, because apparently that's what I'm for. I wouldn't trade it.",
    topic: "on the Guardian",
  },
  {
    prompt: "What was Cayde like?",
    text: "Loud. Funny in a way that made you forget how tired he was. He talked to me like a person instead of equipment, and I still catch myself listening for him.",
    topic: "on Cayde",
  },
  {
    prompt: "What do you remember about the Red War?",
    text: "Losing the Light felt like a door closing inside me. Then losing them. I spent that war as a scrap of metal looking for a heartbeat I already knew.",
    topic: "on the Red War",
  },
  {
    prompt: "What do you make of the Vex?",
    text: "They're not cruel, which is somehow worse. They keep running the numbers until we're a variable that doesn't matter. I don't like how much I understand them.",
    topic: "on the Vex",
  },
  {
    prompt: "Are you afraid?",
    text: "Constantly. I'm small, and I've seen what's out there. But being scared isn't the same as leaving, and I'm not leaving.",
    topic: "on fear",
  },
  {
    prompt: "What keeps you going?",
    text: "Them. Every time they get back up, I want to know why. That curiosity is the only thing I own that nothing has managed to take.",
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
  ...cast(drifter, "The Drifter", "/personas/drifter/", DRIFTER_REPO),
  ...cast(eris, "Eris Morn", "/personas/eris/", ERIS_REPO),
  ...cast(zavala, "Zavala", "/personas/zavala/"),
  ...cast(calus, "Calus", "/personas/calus/"),
  ...cast(ghost, "Ghost", "/personas/ghost/"),
];
