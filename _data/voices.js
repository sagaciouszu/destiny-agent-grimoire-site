// Test Tapes: 50 short exchanges, ten per active persona, every one captured
// live from the persona's consult agent. None are canon quotations.

const drifter = [
  {
    prompt: "Hey Drifter, just walked into the Annex.",
    text: "Evenin', kid. Mind the crates — I got gear stacked where the light's bad. You here to deal, or just take in the ambiance?",
    topic: "on arrival",
  },
  {
    prompt: "I'm a Warlock. Ready for Gambit.",
    text: "A Warlock, huh? Heh. Try not to outthink the bank, and we'll get along fine. Motes in, blockers out — let's dance.",
    topic: "on Warlocks",
  },
  {
    prompt: "Got that shipment from Spider's crew.",
    text: "Good. Spider's crew don't deliver outta kindness, so don't go actin' like it's a gift. Favors ain't free, and neither is my patience.",
    topic: "on a favor",
  },
  {
    prompt: "Did you hear from Eris on the Dreadnaught?",
    text: "She's got her own war to run, and I don't speak for her. Last I knew, she was diggin' in deep — some holes you don't come back from the same.",
    topic: "on Eris",
  },
  {
    prompt: "I'm sorry, Drifter. Did you try to save her?",
    text: "Don't matter what I tried, kid. What matters is what's still on the table, and who's left to play it. So we play.",
    topic: "on grief",
  },
  {
    prompt: "You don't have to carry it alone.",
    text: "Maybe not. But I'll file the offer away — and mark it as owed. Careful, Guardian. I remember my debts better'n most.",
    topic: "on grief",
  },
  {
    prompt: "Do you still have nightmares about the Dark Age?",
    text: "Some nights the coin don't stop spinnin'. Then I get up, pour somethin', and remind myself who won. Heh. Still me.",
    topic: "on fear",
  },
  {
    prompt: "What are the Nine planning next?",
    text: "The Nine don't tip their hand — I've asked, trust me. Whatever's cookin', they'll deal it when they're good and ready. Probably soon.",
    topic: "on the Nine",
  },
  {
    prompt: "Sounds like we need bigger guns.",
    text: "Always bigger guns, kid. That's the whole trick — bring more table than the other fella. I dig it.",
    topic: "on Gambit",
  },
  {
    prompt: "I've got your back, Drifter.",
    text: "I know you do. That's exactly why you're crew. You watch your back out there — I'll watch mine.",
    topic: "on the crew",
  },
];

const eris = [
  {
    prompt: "Just walked into the Tower. Who are you?",
    text: "I am Eris Morn. Witch of the Moon, and the one who walked out of the Hellmouth alone. Learn that name—the Hive already fear it.",
    topic: "on identity",
  },
  {
    prompt: "What are the Hive?",
    text: "A death-cult grown across the stars. They worship the Sword Logic: take, kill, grow strong. Every Hive you face answers to gods that remember us.",
    topic: "on the Hive",
  },
  {
    prompt: "Tell me about the Moon.",
    text: "A tomb. Its tunnels crawl with Hive, and the Hellmouth gapes at its heart. I entered with a fireteam; only I emerged.",
    topic: "on the Moon",
  },
  {
    prompt: "What happened to your fireteam?",
    text: "They followed me into the Hellmouth, and the dark took them all—Eriana, Vell, Sai, Omar. I carry them still. That is my burden, not yours.",
    topic: "on the fireteam",
  },
  {
    prompt: "I am sorry, Eris. That must weigh on you.",
    text: "Pity is useless to the dead. Do not mourn for me. Remember them, and let it sharpen your aim.",
    topic: "on grief",
  },
  {
    prompt: "Can we trust Savathûn's bargain?",
    text: "Never fully. Her bargains are written in her own hand, and she profits from every clause. Take her aid if you must, but name your own price.",
    topic: "on Savathûn",
  },
  {
    prompt: "What does the Witness want?",
    text: "An end to choice. It would force all existence into one final shape and call it peace. Refusing it is the whole of our war.",
    topic: "on the Witness",
  },
  {
    prompt: "Do you still see them? The ones you lost.",
    text: "In dreams, in echoes, in the dark behind my eyes. I do not look away. They earned that much.",
    topic: "on nightmares",
  },
  {
    prompt: "Where do you stand with the Vanguard and the Drifter?",
    text: "The Vanguard has my counsel; their cause is the City's. The Drifter I watch closely—useful, but he trades in things best left buried.",
    topic: "on the Vanguard",
  },
  {
    prompt: "I will not flinch. Ask me anything.",
    text: "Then hold to that when the dark begins to speak. Flinching is forgivable; hesitation is what kills. Ask, and I will answer plainly.",
    topic: "on the Warlock",
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

const cast = (entries, speaker, url) =>
  entries.map((entry) => ({ speaker, url, ...entry }));

module.exports = [
  ...cast(drifter, "The Drifter", "/personas/drifter/"),
  ...cast(eris, "Eris Morn", "/personas/eris/"),
  ...cast(zavala, "Zavala", "/personas/zavala/"),
  ...cast(calus, "Calus", "/personas/calus/"),
  ...cast(ghost, "Ghost", "/personas/ghost/"),
];
