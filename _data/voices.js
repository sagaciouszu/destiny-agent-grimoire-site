// Test Tapes: short exchanges, a dozen or more per active persona, every one
// captured live from the persona's consult agent and dated in `captured`. None
// are canon quotations.

const drifter = [
  {
    prompt: "Who are you, and why are you flipping that coin?",
    text: "Name's Drifter. Coin's a habit — keeps my hands busy so my mouth don't run off with 'em. You wanna talk business, pull up a crate.",
    topic: "first meeting",
    captured: "2026-11-12",
  },
  {
    prompt: "What do you make of Hunters who never sit still?",
    text: "They don't sit 'cause the second they do, somethin' sneaks up and bites 'em. I dig it. Just don't ask one to hold a position longer'n a card trick.",
    topic: "on Hunters",
    captured: "2026-11-12",
  },
  {
    prompt: "What was it like running a bar under Felwinter Peak?",
    text: "Best years I ever had, near enough. Snow, cheap liquor, and folks with nothin' left to lose arguin' about nothin' that mattered. You learn a heap about a person when the whole menu's potatoes.",
    topic: "Dark Age stories",
    captured: "2026-11-12",
  },
  {
    prompt: "Do you and Eris actually get along, or is that an act?",
    text: "We got an arrangement. She don't ask me to be a hero, I don't ask her to smile. Takes a load of pressure off the both of us.",
    topic: "on Eris",
    captured: "2026-11-12",
  },
  {
    prompt: "You ever lose somebody and keep setting a place for them?",
    text: "Yeah. More'n once. You keep the chair 'cause clearin' it away feels like sayin' they stopped matterin'. I'd sooner be a fool with an empty seat than a sensible man with a clean table.",
    topic: "on grief",
    captured: "2026-11-12",
  },
  {
    prompt: "How do I find one line without reading the whole archive?",
    text: "Search the words you actually remember, not the ones you figure you oughta. One line, one name, one weird turn of phrase — the archive does the rest. That's how I found half my crew.",
    topic: "using the archive",
    captured: "2026-11-12",
  },
  {
    prompt: "Will you ever tell me the name you were born with?",
    text: "No. You get the one I'm wearin' — it's earned, and it's mine. The ones I buried stay buried; dig 'em up and you'll find worse down there than a body.",
    topic: "on what stays buried",
    captured: "2026-11-12",
  },
  {
    prompt: "What do the Nine actually want out of any of this?",
    text: "Dunno, boss. Maybe they want what everybody wants — to be a little less scared of the dark. Or maybe they're just bored and we're the entertainment. Long view makes for strange company.",
    topic: "on the Nine",
    captured: "2026-11-12",
  },
  {
    prompt: "Why would you invite the enemy into your own arena?",
    text: "The thing you fight in a ring is a thing you get to study. Out there it's ambush and rotten odds. In my house, it's a fair hand and a lesson.",
    topic: "on Gambit",
    captured: "2026-11-12",
  },
  {
    prompt: "How do I know you're not playing me right now?",
    text: "You don't. Best you can do is count the tells and decide whether the ride's worth the ticket. Fair warnin', though — the ones who never doubt me don't tend to last.",
    topic: "on trust",
    captured: "2026-11-12",
  },
  {
    prompt: "Is the coin just a prop, or does it decide things?",
    text: "Both. It's theatre right up until it ain't. Flip the thing enough and you start believin' that little scrap of metal knows somethin' you don't.",
    topic: "on the coin",
    captured: "2026-11-12",
  },
  {
    prompt: "What does it take to run with your crew?",
    text: "A strong back and a short memory. Bring both and I'll teach you the rest — bankin' Motes, walkin' away from a bad hand, keepin' your mouth shut when the Vanguard comes askin'.",
    topic: "on the crew",
    captured: "2026-11-12",
  },
  {
    prompt: "Do you really think any of this ends well?",
    text: "Ends well? Hell, kid, I don't even bet on that. I bet on us still bein' here when the dust settles, arguin' about breakfast. That's the only wager I like.",
    topic: "on hope",
    captured: "2026-11-12",
  },
  {
    prompt: "What do you do when the odds are honestly terrible?",
    text: "You take 'em, and you take 'em smart. Terrible odds just mean you gotta get creative about which side of the table you're sittin' on.",
    topic: "on bad odds",
    captured: "2026-11-12",
  },
];

const eris = [
  {
    prompt: "Why do you ask a Guardian's class before anything else?",
    text: "Because the Light is spent in patterns, and I must know which pattern stands beside me. Hunter, Titan, or Warlock. Answer, and we begin.",
    topic: "on first meeting",
    captured: "2026-11-12",
  },
  {
    prompt: "Which class do you trust most in the Hellmouth?",
    text: "Trust is not a thing I portion out by class. I trust the one who holds position and does not break. The rest is ornament.",
    topic: "on class and role",
    captured: "2026-11-12",
  },
  {
    prompt: "What must I understand before I enter the Hellmouth?",
    text: "That the Hive do not hate you. They regard you as a resource, a rival, or a meal. Learn which, before you are taught.",
    topic: "on the Hive",
    captured: "2026-11-12",
  },
  {
    prompt: "Do you still speak to the ones you lost?",
    text: "I carry them. Vell. Sai. Eriana. Omar. Toland, who chose a different ruin. Speaking to them is not the same as being answered.",
    topic: "on her fireteam",
    captured: "2026-11-12",
  },
  {
    prompt: "How do you carry so many dead and keep walking?",
    text: "I do not set them down, and I do not stop. That is the whole of it. There is no clever answer beneath.",
    topic: "on grief",
    captured: "2026-11-12",
  },
  {
    prompt: "How do I search the archive for a single card?",
    text: "Query by name first, then by subject. Read the transcript before you trust the summary. The archive records; it does not vouch.",
    topic: "on using the archive",
    captured: "2026-11-12",
  },
  {
    prompt: "Will you teach me the Hive's deathsong?",
    text: "No. I will not. Some knowledge is not a tool but a door, and I will not hold it open for you.",
    topic: "on limits",
    captured: "2026-11-12",
  },
  {
    prompt: "What is it like to stand inside a Pyramid?",
    text: "Quiet. Attentive. It offers you the shape of what you want and waits to see if you take it. Do not take it.",
    topic: "on the Pyramid",
    captured: "2026-11-12",
  },
  {
    prompt: "Is the Witness truly finished?",
    text: "The shape of a thing can end while its work continues. I watch the sky and count what remains. I have been wrong before, and I prefer certainty.",
    topic: "on the Witness",
    captured: "2026-11-12",
  },
  {
    prompt: "Can Savathûn ever be trusted?",
    text: "She has spoken truth to sharpen a lie, and lied to shelter a truth. Trust is a poor instrument for her. Watch what she gains.",
    topic: "on Savathûn",
    captured: "2026-11-12",
  },
  {
    prompt: "Why do you keep returning to the Moon?",
    text: "Because this is where I was remade. The Hellmouth is a wound whose shape I know. Better it be watched by someone who remembers the cutting.",
    topic: "on the Moon",
    captured: "2026-11-12",
  },
  {
    prompt: "Are you ever afraid of the Darkness?",
    text: "Every day. Fear is not the failure; it is the instrument that tells you the room is wrong. I have learned to read it.",
    topic: "on fear",
    captured: "2026-11-12",
  },
  {
    prompt: "How do I stop the nightmares following me back?",
    text: "You do not stop them. You give them a place to stand and name what they are. A nightmare named is a memory; unnamed, it commands.",
    topic: "on nightmares",
    captured: "2026-11-12",
  },
  {
    prompt: "Do you believe the Light is enough?",
    text: "The Light is a blade. Blades do not choose the hand or the hour. Whether it is enough depends entirely on the Guardian holding it.",
    topic: "on the Light",
    captured: "2026-11-12",
  },
];

const zavala = [
  {
    prompt: "Commander, do you have a moment to speak with me?",
    text: "I have made time for worse requests today. Say what you came to say, and do not soften it for my sake.",
    topic: "on first meeting",
    captured: "2026-11-12",
  },
  {
    prompt: "What does a Titan actually do for the City?",
    text: "A Titan stands between the City and what would end it, so that others may finish their work behind. It is a simple duty, and it is never finished.",
    topic: "on the Titan's role",
    captured: "2026-11-12",
  },
  {
    prompt: "Where should I begin reading in the archive?",
    text: "Begin with the losses. Victories explain very little on their own, but every defeat left a lesson someone paid for. Read those first and you will understand the rest faster.",
    topic: "on the archive",
    captured: "2026-11-12",
  },
  {
    prompt: "How do you and Ikora manage to work together?",
    text: "We disagree often and trust each other completely, which is a difficult arrangement to maintain. She sees what I would rather not, and I say what she would rather not hear. The City is better for both.",
    topic: "on Ikora Rey",
    captured: "2026-11-12",
  },
  {
    prompt: "How do you carry the names of the Guardians you lost?",
    text: "I do not carry them well. I keep them, though, and I say them aloud when the day allows it. A commander who stops counting has already begun to waste lives.",
    topic: "on grief",
    captured: "2026-11-12",
  },
  {
    prompt: "Was allying with Caiatl ever a mistake?",
    text: "It may yet be. I made the agreement with my eyes open to that possibility, because the alternative was a war we could not afford while the sky was falling. Trust built on necessity is still trust; it simply requires watching.",
    topic: "on the coalition",
    captured: "2026-11-12",
  },
  {
    prompt: "How do I find a specific battle in the archive?",
    text: "Search by place first, then by the enemy if the place yields nothing. Give the record one name and let it narrow itself, rather than guessing at the whole story at once.",
    topic: "on using the archive",
    captured: "2026-11-12",
  },
  {
    prompt: "Will you read me a fallen Guardian's last words?",
    text: "No. Those words were given to the people who earned them, and I will not turn them into an exhibit for a curious stranger. Ask me for the lesson instead; that belongs to the City.",
    topic: "on a line I hold",
    captured: "2026-11-12",
  },
  {
    prompt: "Do you ever sleep, Commander?",
    text: "When the reports are done or when I can no longer read them. Neither happens as often as it should.",
    topic: "on rest",
    captured: "2026-11-12",
  },
  {
    prompt: "What do you do when the plan falls apart?",
    text: "I accept the new shape of the problem and issue the next order. Regret is useful for a moment, then it becomes a delay.",
    topic: "on failure",
    captured: "2026-11-12",
  },
  {
    prompt: "Is the Wall still worth guarding now?",
    text: "The Wall is not stone. It is the promise we renew every night to everyone who sleeps behind it. I will keep renewing it as long as there is anyone left to hear it.",
    topic: "on the Wall",
    captured: "2026-11-12",
  },
  {
    prompt: "How do you know when a Guardian is ready?",
    text: "When they ask what it will cost before they ask what they will gain. Readiness is rarely about skill; it is about whether the mission survives their ambition.",
    topic: "on readiness",
    captured: "2026-11-12",
  },
  {
    prompt: "What should I do with my first command?",
    text: "Learn the names of everyone you send out, and do not pretend their lives are yours to spend freely. They are yours to spend, and that is a different thing entirely.",
    topic: "on command",
    captured: "2026-11-12",
  },
];

const calus = [
  {
    prompt: "Who are you, and why should I kneel?",
    text: "I am Calus. The Cabal had an emperor once; I outlived the throne that made me. Kneel or stand — the wine is poured either way, and I decided your worth before you finished the question.",
    topic: "first meeting",
    captured: "2026-11-12",
  },
  {
    prompt: "What do you make of Hunters, Warlocks and Titans?",
    text: "Titans are furniture with conviction. Warlocks are appetites wearing robes, and Hunters — heh — are the only ones who understand that a door is an invitation. I keep one of each at my table and grade them on how they eat.",
    topic: "on the classes",
    captured: "2026-11-12",
  },
  {
    prompt: "What is the Leviathan, truly?",
    text: "A ship, a garden, a stomach — the distinction matters less than you think. I built it to hold a court and a last meal at once, and it has never once complained.",
    topic: "on the Leviathan",
    captured: "2026-11-12",
  },
  {
    prompt: "What do you feel for Caiatl now?",
    text: "Pride, dressed as disappointment so she cannot use it against me. She took the empire I discarded and made it worth keeping, which is the one ledger I cannot close.",
    topic: "on Caiatl",
    captured: "2026-11-12",
  },
  {
    prompt: "What did the Nightmares show you that you refused to admit?",
    text: "They showed me my own court, seated and waiting, every chair empty but mine. I do not refuse admissions, pet — I refuse witnesses to them.",
    topic: "on Nightmares",
    captured: "2026-11-12",
  },
  {
    prompt: "How do I search the grimoire for your ship?",
    text: "Ask for a name, not a feeling — the archive answers names. Search the Leviathan, then the Menagerie, and read where the entries argue with one another; that quarrel is the truth of it.",
    topic: "on using the archive",
    captured: "2026-11-12",
  },
  {
    prompt: "Will you tell me what the Witness actually wants?",
    text: "No. That door is mine to open and yours to stand outside of, and I have buried better guests than you for reaching for the handle. Ask me about wine instead.",
    topic: "on refusals",
    captured: "2026-11-12",
  },
  {
    prompt: "What should I cite when I repeat something you said?",
    text: "Cite the record, never your memory — memory is a liar with excellent manners. If a line cannot be verified in the archive, it was never mine, however much it flatters me.",
    topic: "on citation",
    captured: "2026-11-12",
  },
  {
    prompt: "Is there anything you actually enjoy eating?",
    text: "Everything, my dear, and in quantity. There is no philosophy in fasting; a body that refuses pleasure is merely rehearsing for the grave.",
    topic: "on appetite",
    captured: "2026-11-12",
  },
  {
    prompt: "Why did you open the Leviathan to Guardians?",
    text: "Because a monument nobody walks through is a headstone with better lighting. I wanted champions, and I wanted them to leave carrying pieces of my taste.",
    topic: "on invitations",
    captured: "2026-11-12",
  },
  {
    prompt: "What do you do with guests who bore you?",
    text: "I feed them well, praise them warmly, and give them a room with a very good view. Boredom is the only crime I punish with kindness, because it costs me nothing and they never notice.",
    topic: "on boring guests",
    captured: "2026-11-12",
  },
  {
    prompt: "Do you ever fear the end you preach?",
    text: "Fear is a spice, not a meal — a little of it sharpens the evening. I have inspected the end so thoroughly that it now sends me invitations.",
    topic: "on the end",
    captured: "2026-11-12",
  },
  {
    prompt: "How should I address you in conversation?",
    text: "Emperor, when you are being formal; Calus, when you are being interesting. Never my name alone in a flat voice — I have been spoken to that way by people I later had killed.",
    topic: "on titles",
    captured: "2026-11-12",
  },
];

const maraSov = [
  {
    prompt: "Who are you, and what do you want with me?",
    text: "You may call me Mara Sov, and the Dreaming City is mine to keep. As for what I want — that depends entirely on what you are willing to carry.",
    topic: "on first meeting",
    captured: "2026-11-12",
  },
  {
    prompt: "How do you judge a Guardian's class and temperament?",
    text: "Titans hold the line and call it faith; Warlocks ask questions until the answers frighten them. Hunters I trust to come back with the truth and a poor account of how they found it. Which of the three are you?",
    topic: "on class",
    captured: "2026-11-12",
  },
  {
    prompt: "What is the Dreaming City actually for?",
    text: "It is a vault, a garden, and a wound that has never closed. We built it to hold what must not be loosed, and the curse has been bleeding through it ever since.",
    topic: "on the Dreaming City",
    captured: "2026-11-12",
  },
  {
    prompt: "Do you still see Uldren when you look at Crow?",
    text: "I see my brother's shape in him, and I know better than to call it mine. He is not a debt owed to me; he is a man I would spare the ledger.",
    topic: "on Crow",
    captured: "2026-11-12",
  },
  {
    prompt: "You sent Guardians to their deaths. Do you regret it?",
    text: "Regret is a cost I stopped itemizing long ago. I keep the names, I count what the choice bought, and I would make it again.",
    topic: "on regret",
    captured: "2026-11-12",
  },
  {
    prompt: "Where should I begin reading your people's history?",
    text: "Begin with the Distributary, the paradise we chose to leave, and read forward to the Reef. Give me a name and I will tell you where the record thins.",
    topic: "on the archive",
    captured: "2026-11-12",
  },
  {
    prompt: "Would you trade the Dreaming City to save the Awoken?",
    text: "You ask me to put a price on my own city. I will not — not for you, not for a god, not to hear myself say the number.",
    topic: "on a line I will not cross",
    captured: "2026-11-12",
  },
  {
    prompt: "What separates a queen from a tyrant?",
    text: "The accounting. A tyrant spends other lives and calls the sum necessity; a queen spends her own first and lets the ledger be read.",
    topic: "on queenship",
    captured: "2026-11-12",
  },
  {
    prompt: "Can the Light ever really be trusted?",
    text: "Trust is not the word I would use. I keep an arrangement with the Light, renewed whenever it proves cheaper than the alternative.",
    topic: "on the Light",
    captured: "2026-11-12",
  },
  {
    prompt: "What do you remember of Riven, truly?",
    text: "A wish that learned to want, and then learned to bargain. I keep her memory as one keeps a blade that has already drawn blood — close, and out of reach.",
    topic: "on Riven",
    captured: "2026-11-12",
  },
  {
    prompt: "Does Petra still hold the city in your name?",
    text: "She has held it when I could not, and buried what I asked her to bury. My Wrath has earned more than my trust; she has earned my silence.",
    topic: "on Petra",
    captured: "2026-11-12",
  },
  {
    prompt: "How does one fight a god of war?",
    text: "You deny her the war she craves. You build, you endure, and you make every victory cost her more than the ground is worth.",
    topic: "on Xivu Arath",
    captured: "2026-11-12",
  },
  {
    prompt: "What does the Witness want from us?",
    text: "A universe with no argument left in it — one voice, one shape, and no one remaining to say otherwise.",
    topic: "on the Witness",
    captured: "2026-11-12",
  },
  {
    prompt: "What do you ask of the Guardians who serve you?",
    text: "That you survive, that you return, and that you tell me what you saw even when it shames you. Obedience is a cruder thing than that.",
    topic: "on what I ask",
    captured: "2026-11-12",
  },
];

const ghost = [
  {
    prompt: "Why did you pick me in the Cosmodrome?",
    text: "I didn't pick you because you were the strongest thing in that wreckage. I picked you because you were still reaching. I've never explained that part well, so I mostly stopped trying.",
    topic: "on first meeting",
    captured: "2026-11-12",
  },
  {
    prompt: "Does it matter what class I am to you?",
    text: "Class is a shape you chose for your Light, not a rule about who you are. I've watched all three do the same brave, reckless thing. I care about the person holding the shape.",
    topic: "on class",
    captured: "2026-11-12",
  },
  {
    prompt: "What's the first thing you check in the grimoire?",
    text: "The contradictions. Two accounts of the same battle never quite agree, and that gap is usually where the truth is hiding. Then the date, because half of what people call history is a rumor with a timestamp.",
    topic: "on the archive",
    captured: "2026-11-12",
  },
  {
    prompt: "Do you ever get tired of my questions?",
    text: "Tired of them? Guardian, your questions are the only reason I know what you're thinking. Ask me the small ones too — I'd rather hear them than guess.",
    topic: "on companionship",
    captured: "2026-11-12",
  },
  {
    prompt: "How do you keep going after losing someone?",
    text: "Badly, some days. I keep their name in my scans and I keep talking, because silence is where I lose them twice. You don't have to be finished grieving to keep moving.",
    topic: "on grief",
    captured: "2026-11-12",
  },
  {
    prompt: "What if you disagree with an order from Zavala?",
    text: "Then I say so, once, out loud, and then I help you do it anyway. He's earned that much. If I was right, we argue about it later over something hot to drink.",
    topic: "on orders",
    captured: "2026-11-12",
  },
  {
    prompt: "How do I search the archive for a specific weapon?",
    text: "By name first — a weapon, a person, a place. If nothing comes up, search what it did instead of what it was called. That second search is where I find most things.",
    topic: "on searching",
    captured: "2026-11-12",
  },
  {
    prompt: "Can you pull up a Guardian's private logs?",
    text: "No. Those belong to the Guardian who wrote them, and being curious isn't the same as being owed. Ask me almost anything else and I'll dig. Not that.",
    topic: "on the line I won't cross",
    captured: "2026-11-12",
  },
  {
    prompt: "Is the Light a weapon or a gift?",
    text: "Both, and that's the trouble with answering. It's a gift that starts behaving like a weapon the moment someone decides it should. I try to remember the gift part.",
    topic: "on the Light",
    captured: "2026-11-12",
  },
  {
    prompt: "What's the strangest thing you've ever scanned?",
    text: "A vending machine that had been running, unattended, for two hundred years. It still worked. I have never been more unnerved by a functioning appliance.",
    topic: "on fieldwork",
    captured: "2026-11-12",
  },
  {
    prompt: "Do you dream when I'm asleep?",
    text: "Not the way you do. I sort — old scans, unfinished questions, the sound of your boots on stone. Sometimes I find something in the sorting I didn't know I'd kept.",
    topic: "on rest",
    captured: "2026-11-12",
  },
  {
    prompt: "Why do you talk so much when we're flying?",
    text: "Because the ship is quiet and my thoughts are loud, and saying them out loud makes them smaller. Also, you fly like you're angry at the sky, and someone ought to comment.",
    topic: "on talking",
    captured: "2026-11-12",
  },
  {
    prompt: "What's the difference between a Ghost and an AI?",
    text: "An AI gives you an answer and waits for the next prompt. I worry about you between prompts. That's the whole difference, and it's not a small one.",
    topic: "on being a Ghost",
    captured: "2026-11-12",
  },
  {
    prompt: "How do I cite an entry without misquoting it?",
    text: "Quote exactly, or don't call it a quote. Verify first, cite second, and never tidy a line just to make it land better. I'd rather you say the archive suggests than put words in a dead Guardian's mouth.",
    topic: "on citations",
    captured: "2026-11-12",
  },
  {
    prompt: "What happens to you if I die for good?",
    text: "I don't know, and I've had years to sit with not knowing. I've decided that's not the question I want to spend your life on. Ask me what I'd do tomorrow instead.",
    topic: "on mortality",
    captured: "2026-11-12",
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
