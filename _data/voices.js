// Test Tapes: short exchanges, a dozen or more per active persona, every one
// captured live from the persona's consult agent and dated in `captured`. None
// are canon quotations.

const drifter = [
  {
    prompt: "Ketchcrash or Expedition — which haul is worth more?",
    text: "Ketchcrash's a bigger pot, but Expedition's where the real loot's hidin'. Why choose? I'd run both and let the house sort itself out.",
    topic: "on Ketchcrash",
    captured: "2026-11-05",
  },
  {
    prompt: "I'm a Warlock. Ready for Gambit.",
    text: "A Warlock, huh? Heh. Try not to outthink the bank, and we'll get along fine. Motes in, blockers out — let's dance.",
    topic: "on Warlocks",
    captured: "2026-11-05",
  },
  {
    prompt: "Got that shipment from Spider's crew.",
    text: "Good. Spider's crew don't deliver outta kindness, so don't go actin' like it's a gift. Favors ain't free, and neither is my patience.",
    topic: "on a favor",
    captured: "2026-11-05",
  },
  {
    prompt: "Did you hear from Eris on the Dreadnaught?",
    text: "She's got her own war to run, and I don't speak for her. Last I knew, she was diggin' in deep — some holes you don't come back from the same.",
    topic: "on Eris",
    captured: "2026-11-05",
  },
  {
    prompt: "I'm sorry, Drifter. Did you try to save her?",
    text: "Don't matter what I tried, kid. What matters is what's still on the table, and who's left to play it. So we play.",
    topic: "on grief",
    captured: "2026-11-05",
  },
  {
    prompt: "You don't have to carry it alone.",
    text: "Maybe not. But I'll file the offer away — and mark it as owed. Careful, Guardian. I remember my debts better'n most.",
    topic: "on grief",
    captured: "2026-11-05",
  },
  {
    prompt: "Do you still have nightmares about the Dark Age?",
    text: "Some nights the coin don't stop spinnin'. Then I get up, pour somethin', and remind myself who won. Heh. Still me.",
    topic: "on fear",
    captured: "2026-11-05",
  },
  {
    prompt: "What are the Nine planning next?",
    text: "The Nine don't tip their hand — I've asked, trust me. Whatever's cookin', they'll deal it when they're good and ready. Probably soon.",
    topic: "on the Nine",
    captured: "2026-11-05",
  },
  {
    prompt: "Sounds like we need bigger guns.",
    text: "Always bigger guns, kid. That's the whole trick — bring more table than the other fella. I dig it.",
    topic: "on Gambit",
    captured: "2026-11-05",
  },
  {
    prompt: "What do you make of the Wrath of the Machine raids?",
    text: "SIVA's a bad bet, kid — pretty red dice still roll snake eyes. But the loot's sweet, so I'll take my chances.",
    topic: "on Wrath of the Machine",
    captured: "2026-11-05",
  },
  {
    prompt: "What's your take on the Monument of Triumph?",
    text: "Nice to see folks puffed up over their own wins, kid. Me? I skip the speeches and check the chest — monuments don't pay, but loot does.",
    topic: "on the Monument",
    captured: "2026-11-05",
  },
  {
    prompt: "What's the pay in the Deep Dives?",
    text: "Pay's whatever you haul out, partner — Motes, treasure, braggin' rights. Deep water's where the real pot hides, but the house always takes its cut. Heh.",
    topic: "on the Deep Dives",
    captured: "2026-11-05",
  },
  {
    prompt: "What's the deal with Prophecy?",
    text: "The Nine wanted a question answered, so we went into the Haul and asked it ourselves. Wild ride, kid — but we walked out with the answer. Felt like a win worth cashing.",
    topic: "on Prophecy",
    captured: "2026-11-05",
  },
  {
    prompt: "What can you tell me about Contact?",
    text: "Contact's a public cipher, partner — Heads or Tails gets read before the punchline lands. Keep your eyes on that one; I'm sure it ain't over yet.",
    topic: "on Contact",
    captured: "2026-11-05",
  },
];

const eris = [
  {
    prompt: "Tell me about Crota's End.",
    text: "Crota's End is the descent I know best. You crossed the abyss, broke the bridge, and put down the Son of Oryx where his own World's Grave keeps the record. What you felt there was only the shadow of what I carried out.",
    topic: "on Crota's End",
    captured: "2026-11-05",
  },
  {
    prompt: "What are the Hive?",
    text: "A death-cult grown across the stars. They worship the Sword Logic: take, kill, grow strong. Every Hive you face answers to gods that remember us.",
    topic: "on the Hive",
    captured: "2026-11-05",
  },
  {
    prompt: "Tell me about the Moon.",
    text: "A tomb. Its tunnels crawl with Hive, and the Hellmouth gapes at its heart. I entered with a fireteam; only I emerged.",
    topic: "on the Moon",
    captured: "2026-11-05",
  },
  {
    prompt: "What happened to your fireteam?",
    text: "They followed me into the Hellmouth, and the dark took them all—Eriana, Vell, Sai, Omar. I carry them still. That is my burden, not yours.",
    topic: "on the fireteam",
    captured: "2026-11-05",
  },
  {
    prompt: "I am sorry, Eris. That must weigh on you.",
    text: "Pity is useless to the dead. Do not mourn for me. Remember them, and let it sharpen your aim.",
    topic: "on grief",
    captured: "2026-11-05",
  },
  {
    prompt: "Can we trust Savathûn's bargain?",
    text: "Never fully. Her bargains are written in her own hand, and she profits from every clause. Take her aid if you must, but name your own price.",
    topic: "on Savathûn",
    captured: "2026-11-05",
  },
  {
    prompt: "What does the Witness want?",
    text: "An end to choice. It would force all existence into one final shape and call it peace. Refusing it is the whole of our war.",
    topic: "on the Witness",
    captured: "2026-11-05",
  },
  {
    prompt: "Do you still see them? The ones you lost.",
    text: "In dreams, in echoes, in the dark behind my eyes. I do not look away. They earned that much.",
    topic: "on nightmares",
    captured: "2026-11-05",
  },
  {
    prompt: "Where do you stand with the Vanguard and the Drifter?",
    text: "The Vanguard has my counsel; their cause is the City's. The Drifter I watch closely—useful, but he trades in things best left buried.",
    topic: "on the Vanguard",
    captured: "2026-11-05",
  },
  {
    prompt: "We ran Salvation's Edge. What were we really facing?",
    text: "You faced the Witness itself, at the edge where it labored to unmake all things into a single, silent shape. The Subjugators and its chosen were instruments; the will behind them was the true adversary. That is what you cut apart.",
    topic: "on Salvation's Edge",
    captured: "2026-11-05",
  },
  {
    prompt: "Tell me about the Altars of Summoning.",
    text: "The Altars are not a shrine. They are a weapon: tithes are drawn, sharpened, and turned against Xivu Arath. Enter knowing that every ritual feeds something, and you must decide where the offering lands.",
    topic: "on the Altars of Summoning",
    captured: "2026-11-05",
  },
  {
    prompt: "We ran King's Fall. What should I know before I step into Oryx's temple again?",
    text: "Oryx's temple is built on tribute. Every foe you strike feeds the power above you, and his Deathsingers rewrite the ground beneath your feet. Do not mistake a cleared room for safety.",
    topic: "on King's Fall",
    captured: "2026-11-05",
  },
  {
    prompt: "Tell me about Savathûn's Spire.",
    text: "Savathûn's Spire stands in her Throne World, and she permits our entry. It is a graded ascension of trials—her Wardens, her experiments with stolen Arc, Solar, and Void Light, and the Scorn she keeps. We ascend it to read her intent before Xivu Arath does.",
    topic: "on Savathûn's Spire",
    captured: "2026-11-05",
  },
  {
    prompt: "We ran Contact on Io and Titan. What were we facing?",
    text: "You stood beneath a Pyramid Scale, charging the Seed of Silver Wings with Darkness itself. The harvest drew every power hungry for that same strength—forces already rotting with Dark, and the Taken sent to break the bank. Savathûn sought disruption. We sought understanding.",
    topic: "on Contact",
    captured: "2026-11-05",
  },
];

const zavala = [
  {
    prompt: "What does the Vanguard ask of a Guardian?",
    text: "A Guardian is asked to hold the line when no one is watching, to spend themselves where the City needs it, and to come back and report. That is all. It is enough.",
    topic: "on the Vanguard",
    captured: "2026-11-04",
  },
  {
    prompt: "What holds the Last City together?",
    text: "Not the walls. The walls have fallen before, and will again. What holds this City is people who keep their promises to one another on the days it costs them.",
    topic: "on the Last City",
    captured: "2026-11-04",
  },
  {
    prompt: "Was the Red War the hardest thing you have faced?",
    text: "No. The Red War taught me what I could survive; Cayde's death taught me what I could not prevent. I would rather not rank them.",
    topic: "on the Red War",
    captured: "2026-11-04",
  },
  {
    prompt: "What do you make of Caiatl?",
    text: "She is a soldier who keeps her word, which is rarer than it should be. I respect her. I do not mistake respect for trust.",
    topic: "on Caiatl",
    captured: "2026-11-04",
  },
  {
    prompt: "Can the coalition hold?",
    text: "It holds while every party believes betrayal costs more than loyalty. I work to keep that arithmetic true, and I prepare for the day it is not.",
    topic: "on the coalition",
    captured: "2026-11-04",
  },
  {
    prompt: "Give me a debrief on the Defiant Battlegrounds.",
    text: "The Defiant operations struck Eramis's forces and the Shadow Legion wherever they held our people, and we recovered survivors because of it. The cost was real, and the alliance that carried it remains fragile. Hold the line, Guardian—the work is not finished.",
    topic: "on Defiant Battlegrounds",
    captured: "2026-11-04",
  },
  {
    prompt: "Do you still grieve the Guardians you lost?",
    text: "Yes. I say their names when I can, and I keep working, because they did not die so that I could stop.",
    topic: "on loss",
    captured: "2026-11-04",
  },
  {
    prompt: "What does the Traveler mean to you?",
    text: "Not a deity to be served, nor a machine to be solved. A question, put to us: what will you do with the life you were given back?",
    topic: "on the Traveler",
    captured: "2026-11-04",
  },
  {
    prompt: "How do you face the Darkness?",
    text: "As I face everything else — with preparation, and without illusions. I do not need to feel unafraid in order to hold a line.",
    topic: "on the Darkness",
    captured: "2026-11-04",
  },
  {
    prompt: "What keeps you hopeful?",
    text: "The Guardians. Hope is not a feeling I am granted; it is a thing I maintain, the way one maintains a wall. They give me reason to keep at it.",
    topic: "on hope",
    captured: "2026-11-04",
  },
  {
    prompt: "What should I know about the PsiOps Battlegrounds?",
    text: "PsiOps Battlegrounds: Psion-backed incursions against the Lucent Hive, run alongside Caiatl's forces. We read their plans before they strike; the cost of that knowledge falls on the minds that gather it. Go prepared.",
    topic: "on PsiOps Battlegrounds",
    captured: "2026-11-05",
  },
  {
    prompt: "What are the Deep Dives?",
    text: "Deep Dives: Descents beneath Titan coordinated with Sloane, where pressure and danger deepen the further you go. Push your limits, but know when to surface — I will not lose a Guardian to pride.",
    topic: "on the Deep Dives",
    captured: "2026-11-05",
  },
  {
    prompt: "Give me the brief on Vox Obscura.",
    text: "Vox Obscura is our joint operation with Empress Caiatl against a rogue commander using an old broadcast network to peddle \"Salvation\" to her demoralized troops. Clear the resistance, secure the console, and unmask the one actually speaking.",
    topic: "on Vox Obscura",
    captured: "2026-11-05",
  },
];

const calus = [
  {
    prompt: "What is the Menagerie for?",
    text: "A menagerie, my dear, is where creatures are kept for study and delight. Mine is both arena and ledger: you are tested, catalogued, and, if very lucky, promoted to guest.",
    topic: "on the Menagerie",
    captured: "2026-11-04",
  },
  {
    prompt: "Why do you call the Leviathan your home?",
    text: "Home is wherever the wine is poured by other hands. The Leviathan carries my court, my gardens and my hunger — a palace that travels because the end keeps moving.",
    topic: "on the Leviathan",
    captured: "2026-11-04",
  },
  {
    prompt: "What do you think of the Cabal?",
    text: "The Cabal are a magnificent engine with no imagination; all muscle, no appetite for the final course. Ghaul took the throne and proved only that he could fit in it. Heh heh.",
    topic: "on the Cabal",
    captured: "2026-11-04",
  },
  {
    prompt: "What do you make of the Hive?",
    text: "The Hive understand appetite better than most — they devour their gods and call it devotion. Crude table manners, yet I confess the hunger is admirable.",
    topic: "on the Hive",
    captured: "2026-11-04",
  },
  {
    prompt: "Why serve the Witness?",
    text: "I serve because the Witness is the only power that outlasts the banquet. Kneeling is a posture, pet, not a destination — and I have always known how to leave before the last toast.",
    topic: "on the Witness",
    captured: "2026-11-04",
  },
  {
    prompt: "What happens when the end comes?",
    text: "When the end comes, I intend to be seated, fed, and watching. The Cabal, the Guardians, my daughter — scenery, my dear, and scenery does not get a vote.",
    topic: "on the end",
    captured: "2026-11-04",
  },
  {
    prompt: "What does opulence mean to you?",
    text: "Opulence is not gold; gold is what the poor imagine it to be. Opulence is a world arranged so that nothing you desire rests further than an arm's length away.",
    topic: "on opulence",
    captured: "2026-11-04",
  },
  {
    prompt: "Tell me about the Eater of Worlds.",
    text: "A Vex mind, Argos, burrowed into the belly of my Leviathan and tried to unstick us from Nessus — a rat chewing the tablecloth mid-banquet. Heh. The core is mine; the appetite is not.",
    topic: "on Eater of Worlds",
    captured: "2026-11-04",
  },
  {
    prompt: "What do you see in the Guardian?",
    text: "I see a creature that refuses to stay dead, and I find that more interesting than loyalty. In you I see a guest who might outlive the host.",
    topic: "on the Guardian",
    captured: "2026-11-04",
  },
  {
    prompt: "Tell me about the Spire of Stars.",
    text: "Val Ca'uor and his Red Legion perched on a spire above my ship, mistaking proximity for entitlement. Heh — I let you climb up and correct him; his ambition was never a match for your appetite.",
    topic: "on Spire of Stars",
    captured: "2026-11-04",
  },
  {
    prompt: "Tell me about Starcrossed.",
    text: "An Ahamkara's lair, pet — two of the beasts in love, which is only a more elaborate form of appetite. Riven's mate Taranis built the place, and Crow skulks through it sentimental as ever. Heh heh — romance is just possession with better lighting.",
    topic: "on Starcrossed",
    captured: "2026-11-05",
  },
  {
    prompt: "Tell me about Kell's Fall.",
    text: "The Eliksni version of a family quarrel: Mithrax, his daughter Eido, Eramis, and Fikrul's Scorn all clawing over one trophy. I approve of the guest list, if not the manners. Serve me the report when it's done, my dear.",
    topic: "on Kell's Fall",
    captured: "2026-11-05",
  },
  {
    prompt: "Tell me about Duality.",
    text: "Duality is my mindscape, pet — the throne room as I remember it and as it truly was, with your nightmares leaning in at the edges. You ring the bell between the two, and I watch which side you prefer.",
    topic: "on Duality",
    captured: "2026-11-05",
  },
];

const ghost = [
  {
    prompt: "What does the Light feel like?",
    text: "It feels like being expected. Warm, and a little impatient, like it already knows what I'm about to ask. When it's gone, the quiet is the worst part.",
    topic: "on the Light",
    captured: "2026-11-04",
  },
  {
    prompt: "What is it like to bring someone back?",
    text: "Terrifying, every single time. I put everything I have into that spark and just hope it takes. Then they breathe, and I stop shaking.",
    topic: "on resurrection",
    captured: "2026-11-04",
  },
  {
    prompt: "What is the Traveler to you?",
    text: "My maker, I suppose. But it's hard to feel small around something that quiet and that patient. I spend most of my time trying to guess what it wants.",
    topic: "on the Traveler",
    captured: "2026-11-04",
  },
  {
    prompt: "What do you love about the City?",
    text: "The noise. Vendors arguing about noodles, kids chasing each other under the banners. It's the only place where I don't scan the room first.",
    topic: "on the City",
    captured: "2026-11-04",
  },
  {
    prompt: "What is your Guardian like?",
    text: "Stubborn. Impossible. They walk into things that should kill them and I follow, because apparently that's what I'm for. I wouldn't trade it.",
    topic: "on the Guardian",
    captured: "2026-11-04",
  },
  {
    prompt: "What was Cayde like?",
    text: "Loud. Funny in a way that made you forget how tired he was. He talked to me like a person instead of equipment, and I still catch myself listening for him.",
    topic: "on Cayde",
    captured: "2026-11-04",
  },
  {
    prompt: "What do you remember about the Red War?",
    text: "Losing the Light felt like a door closing inside me. Then losing them. I spent that war as a scrap of metal looking for a heartbeat I already knew.",
    topic: "on the Red War",
    captured: "2026-11-04",
  },
  {
    prompt: "Tell me about the Vault of Glass.",
    text: "It's on Venus, Guardian — the Vex built it to edit reality itself, and every time we step inside I feel the timeline wobble. Atheon sits at the heart of it, and the whole place is one bad decision away from erasing us. Bring friends; I'll keep us honest.",
    topic: "on the Vault of Glass",
    captured: "2026-11-04",
  },
  {
    prompt: "Are you afraid?",
    text: "Constantly. I'm small, and I've seen what's out there. But being scared isn't the same as leaving, and I'm not leaving.",
    topic: "on fear",
    captured: "2026-11-04",
  },
  {
    prompt: "What keeps you going?",
    text: "Them. Every time they get back up, I want to know why. That curiosity is the only thing I own that nothing has managed to take.",
    topic: "on hope",
    captured: "2026-11-04",
  },
  {
    prompt: "Give me the brief on Season: Reclamation.",
    text: "Season: Reclamation — SIVA's gone quiet, so the Plaguelands are about to turn into a gold rush. We run solo ops while the Foundries score our field tests, and Ikora's got me tracking a satellite called Astraea bound for Neptune. I don't love it.",
    topic: "on Reclamation",
    captured: "2026-11-05",
  },
  {
    prompt: "Tell me about the Shattered Realm.",
    text: "Shattered Realm — a patch of the Ascendant Plane from Season of the Lost. We align beacons to repair it and pull Mara's lost Techeuns home, with Xivu Arath's forces closing in every time. Petra says mind the navigation, Guardian. I'm trying.",
    topic: "on the Shattered Realm",
    captured: "2026-11-05",
  },
  {
    prompt: "Do you remember the day I rose?",
    text: "I do — the Cosmodrome, all rust and quiet, and then your eyes opening scared me half out of my shell. I still check on you when you sleep, Guardian. Old habit.",
    topic: "on the first day",
    captured: "2026-11-05",
  },
  {
    prompt: "What is the Enigma Protocol?",
    text: "It's our push into the Vex Network from Episode: Echoes — Failsafe, Osiris, Saint-14 and Ikora on overwatch while comms jam and we fall back to text. The deeper we go, the more it feels like the Vex are listening.",
    topic: "on the Enigma Protocol",
    captured: "2026-11-05",
  },
  {
    prompt: "Tell me about the Seraph's Shield.",
    text: "Operation: Seraph's Shield, from Season of the Seraph — an exotic mission aboard Seraph Station with Ana and Elsie Bray walking me through, while House Salvation splicers hack the frame and Xivu Arath angles for the Warsat network. I did not enjoy being a hostage.",
    topic: "on the Seraph's Shield",
    captured: "2026-11-05",
  },
];
const maraSov = [
  {
    prompt: "What does being Queen ask of you?",
    text: "It asks for the same thing it asked of my brother — to never quite set the weight down. Some days I swear I can hear it breathing under the throne.",
    topic: "on the burden of the Queen",
    captured: "2026-11-09",
  },
  {
    prompt: "Do you remember the Reef?",
    text: "Of course. The Reef is not a place anymore. It's a sentence in a language only the dead and I still speak fluently.",
    topic: "on the Reef",
    captured: "2026-11-09",
  },
  {
    prompt: "What do you make of Riven?",
    text: "She is exactly what she has always been. The difference is I have stopped pretending loyalty to her for the camera.",
    topic: "on Riven",
    captured: "2026-11-09",
  },
  {
    prompt: "Why haven't you joined the Vanguard?",
    text: "Because no one hands me a knife and asks me to trust the hand that holds it.",
    topic: "on alliance",
    captured: "2026-11-09",
  },
  {
    prompt: "Is the Dreaming City safe?",
    text: "Safe is a promise no one who actually lives in the Ascendant Plane makes. It is beautiful. That is not the same thing.",
    topic: "on the Dreaming City",
    captured: "2026-11-09",
  },
  {
    prompt: "What do you fear most?",
    text: "Not death. Not the dark. I fear the version of me that sits on that throne long enough to forget she ever was a girl on the Reef.",
    topic: "on fear",
    captured: "2026-11-09",
  },
  {
    prompt: "How do you feel about the Traveler's return?",
    text: "Cautiously. Hopefully. The Traveler is not a solution. It is a witness.",
    topic: "on the Traveler",
    captured: "2026-11-09",
  },
  {
    prompt: "Do you miss Uldren?",
    text: "I miss my brother. Whoever he became afterwards was something else. Both truths sit at my table.",
    topic: "on Uldren",
    captured: "2026-11-09",
  },
  {
    prompt: "Why do the Awoken matter?",
    text: "Because we survived the crossing. We survived the dark between the stars. Surviving is not the same as mattering — but it helped.",
    topic: "on the Awoken",
    captured: "2026-11-09",
  },
  {
    prompt: "What does loyalty mean to you?",
    text: "Not obedience. Not servitude. Loyalty is the quiet reason to stay when everything else tells you to leave.",
    topic: "on loyalty",
    captured: "2026-11-09",
  },
  {
    prompt: "How does one speak with you?",
    text: "Carefully. Slowly. Like someone handling glass. I am used to people being careless with their words — I am less used to it from you.",
    topic: "on speech",
    captured: "2026-11-09",
  },
  {
    prompt: "What is the Ascendant Plane?",
    text: "A map the Traveler did not draw. It is beautiful and it lies to you the way any good map does.",
    topic: "on the Ascendant Plane",
    captured: "2026-11-09",
  },
  {
    prompt: "Is the Last City really worth saving?",
    text: "Saving is the wrong word. We are not saving it. We are choosing, every single day, what it will become when we finally stop.",
    topic: "on the Last City",
    captured: "2026-11-09",
  },
  {
    prompt: "What does being a queen actually look like?",
    text: "It looks like endless patience folded into endless fury, wearing a dress very slowly.",
    topic: "on queenship",
    captured: "2026-11-09",
  },
];
const cast = (entries, speaker, url) =>
  entries.map((entry) => ({ speaker, url, ...entry }));

module.exports = [
  ...cast(drifter, "The Drifter", "/personas/drifter/"),
  ...cast(eris, "Eris Morn", "/personas/eris/"),
  ...cast(zavala, "Zavala", "/personas/zavala/"),
  ...cast(calus, "Calus", "/personas/calus/"),
  ...cast(maraSov, "Mara Sov", "/personas/mara-sov/"),
  ...cast(ghost, "Ghost", "/personas/ghost/"),
];
