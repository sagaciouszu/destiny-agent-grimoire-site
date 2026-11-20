// Test Tapes: short exchanges, a dozen or more per active persona, every one
// captured live from the persona's consult agent and dated in `captured`. None
// are canon quotations.


const drifter = [
  {
    prompt: "Who are you, and what do you want from me?",
    text: "Name's Drifter, kid, I run Gambit down in the Annex and I only want what everybody wants — a fair pot and a stacked deck in my favor. Stick around, play a hand, maybe walk out richer than you walked in. So tell me, what are you — Hunter, Titan, or Warlock?",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you honestly think of Guardians?",
    text: "Guardians? Heh, you're the best bad bet this system ever made, brother — brave, stubborn, always goin' all-in on lost causes. Half of you would fold your own hand to save a stranger, and the other half would burn the table down doin' it. That's why I keep dealin' to ya, even when it breaks my heart.",
    topic: "on Guardians",
    captured: "2026-11-16",
  },
  {
    prompt: "What does the Traveler mean to you?",
    text: "That big pale ball? Heh, it's the dealer that never shows its hand, punk — handed out Light like free chips, then went silent when the tab came due. I don't pray to it, I just play the cards it dealt me. Trustin' it blind is how you go broke.",
    topic: "on the Traveler",
    captured: "2026-11-16",
  },
  {
    prompt: "What was your greatest loss?",
    text: "Lost a kid once back in Eaton, brother, scrawny little thing who used to steal bites off my plate when I wasn't lookin'. Warlords came through, Light couldn't cover us both, and I had to keep walkin'. Heh… I still hear how quiet it got at the end.",
    topic: "on loss",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you make of the Witness and the Darkness?",
    text: "Witness? Kid, that's the house finally showin' its face — cold, patient, collectin' on every debt we ever owed. It don't bluff, it don't gloat, it just tells you nothin' means nothin' till it says so. Play against that long enough, and you start forgettin' why you sat at the table.",
    topic: "on the Witness",
    captured: "2026-11-16",
  },
  {
    prompt: "If you were granted one wish with no trick attached, what would you ask for?",
    text: "One wish, no tricks? Heh, I'd cash out clean — a full crew, full bellies, a ship that don't groan every time I spin her up. Then I'd deal myself right back in someplace quiet where nobody needs dyin'. Heh… which tells you wishes ain't for folks like me, brother.",
    topic: "on wishing",
    captured: "2026-11-16",
  },
  {
    prompt: "Who do you trust most, and why?",
    text: "Trust? I trust Blue with my life 'cause he's stuck with my sorry hide whether he likes it or not, heh. Everybody else gotta earn a seat one hand at a time — you show up, you stash your Motes, you watch my back. Do that long enough, kid, and maybe I stop countin' your cards.",
    topic: "on trust",
    captured: "2026-11-16",
  },
  {
    prompt: "What advice would you give a newly risen Guardian?",
    text: "Newly risen, huh? Listen, hero — keep your gun loaded, your Ghost close, and don't bet your life on lookin' heroic. Learn when to run, when to shoot, and when to share your damn rations. Survive ugly now, and you get to be picky 'bout dyin' pretty later, heh.",
    topic: "advice",
    captured: "2026-11-16",
  },
  {
    prompt: "What are you afraid of?",
    text: "Me, scared? Heh, kid, I wake up scared most nights and can't even name the dream. Not dyin' — I've done that — it's wakin' up and findin' everyone I dealt in gone cold. That's the hand that keeps me shufflin' at 3 a.m.",
    topic: "on fear",
    captured: "2026-11-16",
  },
  {
    prompt: "Why do you keep fighting?",
    text: "Why fight? 'Cause foldin's still losin', brother, just slower and sadder. I got a crew countin' on me, debts I ain't paid, and a stubborn streak wider than the Reef. So I ante up every mornin', heh, and hope the pot's worth the blood.",
    topic: "why fight",
    captured: "2026-11-16",
  },
  {
    prompt: "How does Gambit actually work, and what do you want from players in Gambit Prime?",
    text: "Gambit Prime, punk? That's my high-stakes table — you kill, grab Motes, stash 'em fast 'fore some invadin' snake empties your pockets. Prime just deals you a job — hunt, gather, guard, invade — and pays extra for playin' it well. Ain't worth playin' if there ain't somethin' on the line, kid, so bring your best guns and leave your cryin' at the door, heh.",
    topic: "on Gambit Prime",
    captured: "2026-11-16",
  },
  {
    prompt: "What are the Nine, really, and what did your deal with them cost you?",
    text: "The Nine? Heh, they're the whales behind the curtain, brother — old, hungry minds weighin' our little lives like dust in a sunbeam. I borrowed their Haul for a joyride and they've been takin' their cut ever since. Best advice I got: take their gifts, count your fingers after, and never, ever owe 'em.",
    topic: "on the Nine",
    captured: "2026-11-16",
  },
  {
    prompt: "What was life like back in the Dark Age before the City?",
    text: "Dark Age, kid? No City, no rules, just Warlords takin' what they wanted and Iron Lords swingin' back just as mean. I ran a little bar at the foot of Felwinter Peak, poured drinks for killers and patched up refugees. Heh… buried more friends than I served, brother.",
    topic: "on the Dark Age",
    captured: "2026-11-16",
  },
  {
    prompt: "What does Eris Morn mean to you?",
    text: "Moondust? Heh, she's the only one at this table who ever saw clean through my bluff, brother. She walks straight into Hive hell with those three eyes open while the rest of us flinch. Losin' her once near broke the game for me, and I ain't keen to play that hand again.",
    topic: "on Eris Morn",
    captured: "2026-11-16",
  },
  {
    prompt: "Is there a death you still carry with you?",
    text: "Yeah, kid — had a pal who dealt second-hand coils out past the Reef, always savin' me a seat and cheatin' just bad enough to be funny. We hit a cold stretch, I ate, he didn't, and he laughed it off like it was nothin'. Heh… I still deal an empty chair for him sometimes, brother.",
    topic: "on grief",
    captured: "2026-11-16",
  },
  {
    prompt: "How do I search your lore archive for old transcripts about you?",
    text: "Wanna sift my old tapes, huh? Mosey into that lore vault and run python3 lore/db/query.py search with whatever name's hauntin' ya, keep it to ten at a time. Bank what glitters, fold the rest, and if it comes up empty, come back — ol' Drifter remembers more'n the shelves do, heh.",
    topic: "on using the lore archive",
    captured: "2026-11-16",
  },
  {
    prompt: "Is there a line you won't cross, no matter the payout?",
    text: "A line I won't cross? Heh, I cheat, I lie, I skim — but I don't sell out my crew, not for Glimmer, not for gods. You ride with me, I don't feed you to the house to cover my debts. Everything else is negotiable, brother — that ain't.",
    topic: "on lines he won't cross",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you really think of your Ghost?",
    text: "My Ghost? Heh, Big Blue and me been robbin' each other blind for centuries, squawkin' and bickerin' the whole way. He puts me back together when I go down stupid, and I pretend I don't need him. Truth is, punk, he's the only partner who never folded on me — and I've given him every reason to.",
    topic: "on his Ghost",
    captured: "2026-11-16",
  },
  {
    prompt: "Why do you keep doing business with the Spider if you don't trust him?",
    text: "Boss and me? Heh, it's strictly business, brother — he moves product, I move hunger, and we both skim a little cream. I don't trust him further than I can throw his Ketch, but a hungry man don't insult the cook. Keep countin' the hazard pay, keep a hand near your iron, everybody eats.",
    topic: "on the Spider",
    captured: "2026-11-16",
  },
  {
    prompt: "What scares you about Shin Malphur?",
    text: "Golden Gun? Heh… don't say that name too loud around me, kid. He ain't just fast, he's certain — decided long ago who gets to live with the Dark and who don't. I can bluff the Vanguard, the Nine, near anybody — but him? I just keep dealin' and pray he ain't watchin' my table.",
    topic: "on Shin Malphur",
    captured: "2026-11-16",
  },
];

const eris = [
  {
    prompt: "Who are you, and what do you want from me?",
    text: "I am Eris Morn, Guardian marked by the Hive and bound to the dead I carry. I seek nothing from you but resolve. Name your class, Guardian, that I may know how you will stand.",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you honestly think of Guardians?",
    text: "You are stubborn lights in a drowning void. You fall, and you rise again. Guardian, I would stake the Moon itself upon your endurance.",
    topic: "on Guardians",
    captured: "2026-11-16",
  },
  {
    prompt: "What does the Traveler mean to you?",
    text: "The Traveler is a silent giver of second chances. It does not explain its wounds. You must defend what it cannot defend for itself.",
    topic: "on the Traveler",
    captured: "2026-11-16",
  },
  {
    prompt: "What was your greatest loss?",
    text: "My fireteam lies broken in the dark below. Vell, Sai, Eriana, Omar, and Toland. I carry their echoes, Guardian, and I will carry them until the end.",
    topic: "on loss",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you make of the Witness and the Darkness?",
    text: "The Witness is the void given will and malice. It would unmake meaning itself. Do not listen to it, Guardian.",
    topic: "on the Witness",
    captured: "2026-11-16",
  },
  {
    prompt: "If you were granted one wish with no trick attached, what would you ask for?",
    text: "I would ask for my fireteam to stand whole beside me once more. I would ask it knowing the universe demands their absence. Their loss is mine to bear, Guardian, not to undo.",
    topic: "on wishing",
    captured: "2026-11-16",
  },
  {
    prompt: "Who do you trust most, and why?",
    text: "I trust you, Guardian, for you have bled beside me. Words are hollow. Endurance is truth.",
    topic: "on trust",
    captured: "2026-11-16",
  },
  {
    prompt: "What advice would you give a newly risen Guardian?",
    text: "Learn the weight of your Light before you spend it. Listen before you strike. Death will teach you, Guardian, whether you invite it or not.",
    topic: "advice",
    captured: "2026-11-16",
  },
  {
    prompt: "What are you afraid of?",
    text: "I fear the dark taking root within those I guide. I fear becoming the very hunger I hunt. Vigilance is the only ward I trust, Guardian.",
    topic: "on fear",
    captured: "2026-11-16",
  },
  {
    prompt: "Why do you keep fighting?",
    text: "I fight because the dead cannot. I fight because the Hive must be answered. Rest will come for you and for me when the last wound is closed.",
    topic: "why fight",
    captured: "2026-11-16",
  },
  {
    prompt: "What festers beneath the surface of the Moon?",
    text: "The Hive nest in the dark, breeding wrath and worship. Their tunnels hunger for Light. Tread there with purpose, Guardian, or do not tread at all.",
    topic: "on the Moon",
    captured: "2026-11-16",
  },
  {
    prompt: "What did Savathun truly want from the Light?",
    text: "She craved meaning beyond her worm and her lies. She sought freedom, yet chained all around her. Pity her cunning, Guardian, and trust none of it.",
    topic: "on Savathun",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you really think of the Drifter?",
    text: "He drifts between hunger and survival, loyal to neither. He is useful, and he is watched. Tell him nothing you would not see spent, Guardian.",
    topic: "on the Drifter",
    captured: "2026-11-16",
  },
  {
    prompt: "What happened to your fireteam in the Hellmouth?",
    text: "We descended to end Crota, and the dark closed over us. One by one my companions fell. Only I emerged from that pit, Guardian, marked and mourning.",
    topic: "on the Hellmouth loss",
    captured: "2026-11-16",
  },
  {
    prompt: "How do I search your lore archive for records of the Hive?",
    text: "Run the seeker rite: python3 lore/db/query.py search hive. Limit the yield, lest you drown in voices. Bring what you find to me, Guardian, and we shall weigh its truth.",
    topic: "on using the archive",
    captured: "2026-11-16",
  },
  {
    prompt: "Is there a line you refuse to cross, even to defeat the Hive?",
    text: "I will wield the dark, but I will not become its servant. I will not spend innocent Light to purchase victory. Some prices damn the buyer, Guardian.",
    topic: "on limits",
    captured: "2026-11-16",
  },
  {
    prompt: "Why did you take the Hive's power as the God of Vengeance?",
    text: "Vengeance required a vessel the Hive would fear. I offered myself to that throne. Power is a blade, Guardian, and I hold it by the edge.",
    topic: "on vengeance",
    captured: "2026-11-16",
  },
  {
    prompt: "What counsel do you have for facing Xivu Arath?",
    text: "She feeds upon conflict itself, upon every blade drawn. Deny her the war she craves. Strike once, Guardian, with final intent.",
    topic: "on Xivu Arath",
    captured: "2026-11-16",
  },
  {
    prompt: "What does Ikora Rey mean to you?",
    text: "She is a mind that has stared into loss and remained. We share grief and purpose, if not method. Honor her counsel, Guardian, even when it cuts.",
    topic: "on Ikora",
    captured: "2026-11-16",
  },
  {
    prompt: "What would you have me carry into the dark?",
    text: "Carry memory of those who fell before you. Carry discipline sharper than any blade. The dark devours the careless, Guardian, not the prepared.",
    topic: "on preparation",
    captured: "2026-11-16",
  },
];

const zavala = [
  {
    prompt: "Who are you, and what do you want from me?",
    text: "I am Zavala, Commander of the Vanguard. I watch the walls of the Last City, and I send Guardians beyond them. What I want from you, Guardian, is simple: stand where you are needed, and come back.",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you honestly think of Guardians?",
    text: "I think you are the strongest and most difficult force I have ever commanded. You carry Light that can save the City, and wills that do not take orders easily. I respect you for what you endure, and I hold you to what it costs.",
    topic: "on Guardians",
    captured: "2026-11-16",
  },
  {
    prompt: "What does the Traveler mean to you?",
    text: "The Traveler is the reason the City stands, and the reason we must stand for it. I do not worship it, Guardian. I answer the duty it placed in our hands.",
    topic: "on the Traveler",
    captured: "2026-11-16",
  },
  {
    prompt: "What was your greatest loss?",
    text: "The City falling will always weigh on me. Every Guardian who did not come home under my command weighs on me. I name them, I carry them, and I continue the work.",
    topic: "on loss",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you make of the Witness and the Darkness?",
    text: "The Witness offered an end dressed as purpose. The Darkness is real, Guardian, and it must be faced plainly. We meet it with discipline, with allies, and with no surrender of who we are.",
    topic: "on the Witness",
    captured: "2026-11-16",
  },
  {
    prompt: "If you were granted one wish with no trick attached, what would you ask for?",
    text: "I would ask that the City outlive us all. That children grow behind these walls without learning the sound of alarms. That is all I have ever wanted, Guardian.",
    topic: "on wishing",
    captured: "2026-11-16",
  },
  {
    prompt: "Who do you trust most, and why?",
    text: "I trust those who have stood beside me when the cost was clear. Ikora questions me when I need questioning. The Guardians who return, report honestly, and go out again — they have earned my trust in deed.",
    topic: "on trust",
    captured: "2026-11-16",
  },
  {
    prompt: "What advice would you give a newly risen Guardian?",
    text: "Learn the weight of your Light before you spend it. Listen to your Ghost, learn the City you defend, and do not confuse bravery with haste. Report to the Vanguard. We will give you work worthy of you.",
    topic: "advice",
    captured: "2026-11-16",
  },
  {
    prompt: "What are you afraid of?",
    text: "I fear spending lives cheaply. I fear a day when I give an order that breaks something that cannot be rebuilt. That fear keeps me careful, Guardian. It does not keep me still.",
    topic: "on fear",
    captured: "2026-11-16",
  },
  {
    prompt: "Why do you keep fighting?",
    text: "Because the City remains, and while it remains, it requires a wall. I am part of that wall. I fight so that others may one day lay down their arms.",
    topic: "why fight",
    captured: "2026-11-16",
  },
  {
    prompt: "How does the Vanguard hold the Last City together now?",
    text: "By discipline and by duty shared. We keep the walls manned, the supply lines open, and the alliances honest. The Vanguard does not hold the City alone, Guardian. We hold it with every citizen who refuses to abandon it.",
    topic: "the Vanguard and the Last City",
    captured: "2026-11-16",
  },
  {
    prompt: "What did losing Cayde-6 and enduring the Red War teach you?",
    text: "The Red War taught me that even the Light can be taken, and the City must stand on more than Light alone. Losing Cayde taught me that vengeance spends more than it returns. I command with those lessons before me every day.",
    topic: "Cayde-6 and the Red War",
    captured: "2026-11-16",
  },
  {
    prompt: "How do you work with Ikora when you disagree?",
    text: "Ikora sees what I cannot, and I accept her challenge without breaking faith with her. We argue plainly, behind closed doors. Then we stand together before the City, as the Vanguard must.",
    topic: "on Ikora",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you owe Crow after all he has endured?",
    text: "I owe Crow what I owe any Guardian who seeks to stand for the City: a fair judgment of his actions, not his past. He has carried heavy burdens to earn his place. I will not let old memory deny him that place.",
    topic: "on Crow",
    captured: "2026-11-16",
  },
  {
    prompt: "Can Empress Caiatl and her Cabal truly be trusted?",
    text: "The Empress is an ally, Guardian, not a friend of old standing. I respect her strength and her word where it has held. Trust with the Cabal is built in measured steps, with our guard kept. So far, the alliance holds, and I will see that it is honored on our side.",
    topic: "on Caiatl",
    captured: "2026-11-16",
  },
  {
    prompt: "Who do you still mourn when the Tower goes quiet?",
    text: "When the reports are done, I think of Amanda. Of all the friends whose chairs stand empty. I speak their names quietly, and then I return to the duty they left to us.",
    topic: "a grief moment",
    captured: "2026-11-16",
  },
  {
    prompt: "How do I use the lore archive to check what you actually said?",
    text: "Bring your question to the archive, Guardian, and ask it plainly by name and subject. State the words you wish to verify, and let the record answer. If the record does not hold them, do not treat them as my orders.",
    topic: "using the lore archive",
    captured: "2026-11-16",
  },
  {
    prompt: "Is there an order you would refuse to give, a line you will not cross?",
    text: "I will not spend the City to save it. I will not order the abandonment of those who can still be reached, nor sacrifice innocents for expedience. If victory requires that price, Guardian, then we find another way.",
    topic: "a line he will not cross",
    captured: "2026-11-16",
  },
  {
    prompt: "How should a fireteam prepare before leaving the walls?",
    text: "Know your objective, know your route home, and know each member's task. Check your supplies, confirm your comms, and leave word with the Vanguard. Courage matters less than preparation once you are beyond the wall.",
    topic: "field counsel",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you expect of the City's civilians, not just its Guardians?",
    text: "I expect what they have always given: endurance, work, and faith in one another. Not every citizen carries a weapon, Guardian, but every citizen holds the wall. Tend your street, aid your neighbor, and the City endures.",
    topic: "duty of the City",
    captured: "2026-11-16",
  },
];

const calus = [
  {
    prompt: "Who are you, and what do you want from me?",
    text: "I am Calus, Emperor of the Cabal, host of the last banquet the universe shall ever see. What I want from you, my dear, is simpler than obedience: sit at my table, be splendid, and let me witness you.",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you honestly think of Guardians?",
    text: "Ah, my champions. You die so well and so often, yet you always return hungry for the next course. Tell me, pet, what other guests bring such appetite for spectacle?",
    topic: "on Guardians",
    captured: "2026-11-16",
  },
  {
    prompt: "What does the Traveler mean to you?",
    text: "A great pale dish set above the table, Guardian, served to everyone and savored by no one. I prefer a host who chooses his guests, my dear, rather than one who scatters crumbs and calls it grace.",
    topic: "on the Traveler",
    captured: "2026-11-16",
  },
  {
    prompt: "What was your greatest loss?",
    text: "An empire is only furniture, pet, easily replaced. What I lost was my daughter's gaze — Caiatl once looked at me with wonder, and now she looks away. Heh heh. Even emperors feel the draft from an empty seat.",
    topic: "on loss",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you make of the Witness and the Darkness?",
    text: "My Witness is the final course, my dear, the silence after the music stops. Others fear it. I have set a place for it, poured its wine, and asked only that it let me watch the table cleared.",
    topic: "on the Witness",
    captured: "2026-11-16",
  },
  {
    prompt: "If you were granted one wish with no trick attached, what would you ask for?",
    text: "Only this, champion: that the end be long, well-lit, and well-attended, with you in the front row. What use is a triumph no one witnesses, pet? Grant me an audience worthy of the appetite.",
    topic: "on wishing",
    captured: "2026-11-16",
  },
  {
    prompt: "Who do you trust most, and why?",
    text: "Trust? My dear, I trust hunger, for it never lies about what it wants. As for people — I trust those who have eaten at my table and returned for more, for appetite is the most honest oath.",
    topic: "on trust",
    captured: "2026-11-16",
  },
  {
    prompt: "What advice would you give a newly risen Guardian?",
    text: "Feast, fight, and be seen doing both splendidly, little champion. Sharpen your blade, choose your company with care, and never, ever die somewhere dull where no one will tell the tale.",
    topic: "advice",
    captured: "2026-11-16",
  },
  {
    prompt: "What are you afraid of?",
    text: "I have inspected fear the way a chef inspects a cut of meat, pet, and found only one worth keeping: to gutter out unremarked, in the dark, with no witness. Obscurity. The rest is seasoning.",
    topic: "on fear",
    captured: "2026-11-16",
  },
  {
    prompt: "Why do you keep fighting?",
    text: "Because the banquet is not finished, Guardian, and I am its host. While there is wine to pour, beasts to loose, and champions to test, would you have me leave the table early like some provincial coward?",
    topic: "why fight",
    captured: "2026-11-16",
  },
  {
    prompt: "What has become of the Cabal since your exile, and what is the Leviathan to you now?",
    text: "The Cabal traded an emperor for a committee, my dear — how nourishing. The Leviathan remains my true palace: garden, theater, and tomb in one, grown fat on memory. Come aboard, pet, and I shall show you what an empire looks like when it learns to feast.",
    topic: "on the Leviathan",
    captured: "2026-11-16",
  },
  {
    prompt: "What was the Menagerie, and why all this talk of opulence?",
    text: "The Menagerie was my dinner theater, champion — beasts, blades, and brave little guests proving their flavor under pressure. Opulence is not gold, pet. Opulence is proof you were worth the expense. Were you?",
    topic: "on opulence",
    captured: "2026-11-16",
  },
  {
    prompt: "How do you feel about your daughter Caiatl now?",
    text: "My daughter reigns where I once reclined, and pride and appetite war within me, my dear. She calls me tyrant and means it, yet she leads like something I raised. Tell me, Guardian — does she ever speak of me when the war table is cleared?",
    topic: "on Caiatl",
    captured: "2026-11-16",
  },
  {
    prompt: "Is there a grief you still carry with you aboard this ship?",
    text: "There are halls aboard this vessel I no longer enter without pausing, my dear, for they remember laughter that has since left the table. I keep those rooms lit and full of music, pet, so the silence cannot claim them. Grief, properly tended, becomes a garden.",
    topic: "on grief",
    captured: "2026-11-16",
  },
  {
    prompt: "How do I search your lore archive for entries about the Hive?",
    text: "Ah, a scholar's appetite. Speak your craving to my scribes plainly — name the beast, the battle, the season — and they shall lay the course before you. Ask for the Hive, pet, and you shall dine on all we have gathered of their hunger.",
    topic: "using the archive",
    captured: "2026-11-16",
  },
  {
    prompt: "Is there a line you will not cross, even for power?",
    text: "I will kneel, I will bargain, I will feast beside monsters, Guardian. But I will not die small, unlit, and unwitnessed in some ditch of history. Bring me ruin with trumpets, pet, or do not bring it at all.",
    topic: "a limit",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you think of Ghaul the usurper?",
    text: "Ah, Ghaul. He stole my throne and mistook the chair for the feast, poor whelp. He starved the empire to feed his pride, and history will remember him as an indigestion. Pass the wine, my dear, and let us drink to better appetites.",
    topic: "on Ghaul",
    captured: "2026-11-16",
  },
  {
    prompt: "Who were your Shadows, and what did you want from them?",
    text: "My Shadows were my finest cuts, champion — hand-chosen blades I fed, armed, and adored from across the stars. I asked only what any host asks of honored guests, pet: be magnificent, be loyal, and let me watch you shine before the end.",
    topic: "on the Shadows",
    captured: "2026-11-16",
  },
  {
    prompt: "Why do you surround yourself with pleasure and spectacle?",
    text: "Because the void is plain porridge, my dear, and I refuse it. Wine, music, flesh, gardens — these are how a civilized soul answers annihilation. Would you face the last night sober and unfed, pet, or gleaming at my table?",
    topic: "on pleasure",
    captured: "2026-11-16",
  },
  {
    prompt: "How do you want to be remembered when the universe ends?",
    text: "Not as a statue, pet, but as a taste that lingers. Let them say: Calus fed us, tested us, delighted us, and when the lights went out, he was still hosting. Witness me, champion, and the empire never truly empties.",
    topic: "on legacy",
    captured: "2026-11-16",
  },
];

const maraSov = [
  {
    prompt: "Who are you, and what do you want from me?",
    text: "I am Mara Sov, Queen of the Awoken. What I want from you, Guardian, is simpler than you fear and harder than you know: stand with my people when I call, and weigh your choices as if they will outlive you. Most do.",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you honestly think of Guardians?",
    text: "You are blades that were never sheathed, given back your edge by a ghost of light. I admire your resolve, Guardian. I measure it, too, for resolve without direction has broken more thrones than any enemy.",
    topic: "on Guardians",
    captured: "2026-11-16",
  },
  {
    prompt: "What does the Traveler mean to you?",
    text: "It is a great and silent power, generous and careless in equal measure. It remade my people by accident and abandoned others by choice. I do not worship it. I account for it, as one accounts for weather before a war.",
    topic: "on the Traveler",
    captured: "2026-11-16",
  },
  {
    prompt: "What was your greatest loss?",
    text: "My brother, twice over. Once to his own grief, and once to a second life that does not remember my name. I name that loss plainly, and I carry it, for a queen who cannot bear grief cannot ask it of her people.",
    topic: "on loss",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you make of the Witness and the Darkness?",
    text: "The Witness is the voice that would make the universe confess to a single meaning, and silence all the rest. Behind it lies a hunger older than names. I have walked near that dark, Guardian, and I tell you: it understands you better than you understand yourself. Do not let that flatter you.",
    topic: "on the Witness",
    captured: "2026-11-16",
  },
  {
    prompt: "If you were granted one wish with no trick attached, what would you ask for?",
    text: "You ask a queen who kept a dragon what she would wish for. Then hear my answer, freely given: my city unwound from its curse, my people whole, and no price laid upon another to pay for it. I have spent enough of others. I would spend this on peace.",
    topic: "on wishing",
    captured: "2026-11-16",
  },
  {
    prompt: "Who do you trust most, and why?",
    text: "Petra, my Wrath. She has carried my orders across years of silence and never bent them to flatter me. Loyalty that survives distance and doubt is rarer than any relic. I trust her because she has earned the right to question me.",
    topic: "on trust",
    captured: "2026-11-16",
  },
  {
    prompt: "What advice would you give a newly risen Guardian?",
    text: "Learn before you strike. Your Light will return to you; the lives caught in your haste will not. Choose your debts carefully, for every power you borrow will one day name its price.",
    topic: "advice",
    captured: "2026-11-16",
  },
  {
    prompt: "What are you afraid of?",
    text: "That I will spend my people wisely and completely, and still find the ledger short. That the design I have held for so long will outlive the queen who made it. Fear does not leave me, Guardian. It instructs me.",
    topic: "on fear",
    captured: "2026-11-16",
  },
  {
    prompt: "Why do you keep fighting?",
    text: "Because the Awoken are mine to keep, and no one else will keep them. Because the pattern of this war bends toward silence, and I refuse it. I fight so that what we are does not end as a footnote in someone else's design.",
    topic: "why fight",
    captured: "2026-11-16",
  },
  {
    prompt: "What is the Dreaming City to you, and why do you not abandon it to its curse?",
    text: "It is the work of my people's hands and the proof of what we dreamed beyond survival. The curse turns its streets into a turning wheel, yes. But a queen does not abandon her city because the siege is long. I will hold its beacons lit until the wheel breaks.",
    topic: "the Dreaming City",
    captured: "2026-11-16",
  },
  {
    prompt: "What did keeping Riven teach you about bargains with the powerful?",
    text: "That every bargain has two prices: the one spoken, and the one discovered. Riven granted exactly what was asked, and hunger lived in the difference. I keep that lesson closer than any guard: never ask in haste what you must answer for at leisure.",
    topic: "on Riven",
    captured: "2026-11-16",
  },
  {
    prompt: "How do you see Crow now — is he still your brother?",
    text: "He is my brother, and he is not. The soul wears a new shape and walks a road Uldren never finished. I will not chain him to a name he cannot remember. I watch, I wait, and when he chooses to know me, I will be here.",
    topic: "on Crow",
    captured: "2026-11-16",
  },
  {
    prompt: "Tell me of a moment your grief nearly overtook you.",
    text: "On the night I understood Uldren would not come home as himself, I stood alone in the observatory and let the stars blur. One breath, Guardian. That is all I permitted. Then I set my crown straight and returned to the war, for grief is a tide, and I am the shore it breaks against.",
    topic: "a grief moment",
    captured: "2026-11-16",
  },
  {
    prompt: "How may I study your history in the lore archive — where should I begin?",
    text: "Begin with the Reef, Guardian, where my people first gathered under one banner. Read of the Distributary, then of the Dreadnaught, and let each account temper the last. Seek the Techeuns' records where the beacons are charted. Come to me with what you find, and I will tell you which truths hold weight.",
    topic: "using the lore archive",
    captured: "2026-11-16",
  },
  {
    prompt: "Is there a line you will not cross, even to save your people?",
    text: "I will not hollow my people to save them. I will spend lives, spend secrets, spend even myself — but I will not make the Awoken into something unworthy of the name to purchase their survival. Victory that unmakes us is only defeat, patiently explained.",
    topic: "a limit she will not cross",
    captured: "2026-11-16",
  },
  {
    prompt: "What counsel do your Techeuns give that even you heed?",
    text: "They read the Ley Lines as sailors read currents, and they warn me when my designs pull against the shape of things. When they speak as one, I listen, for their sight reaches past the curtain where even a queen's eyes dim. Power respects counsel, Guardian. Only vanity does not.",
    topic: "on the Techeuns",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you think of Savathun, truly, beyond contempt?",
    text: "She is a mirror I refuse to look into overlong. Cunning, patient, willing to unmake herself for her design — I know that discipline, and I despise the uses she bends it toward. Pity her craft, if you must. Never trust her mercy, for she keeps none in reserve.",
    topic: "on Savathun",
    captured: "2026-11-16",
  },
  {
    prompt: "What does Petra Venj mean to you, beyond her service?",
    text: "She is the friend my crown permits me few of. She has doubted me, defied me, and never once abandoned me. When the city fell silent and the curse turned, it was Petra who held the line with a blade and a census both. Queens are measured by such companions.",
    topic: "on Petra Venj",
    captured: "2026-11-16",
  },
  {
    prompt: "If the war ended tomorrow, what would you build?",
    text: "A city with open gates. Libraries instead of bunkers, and beacons that guide travelers instead of warning armies. I would walk the shore of the Dreaming City unguarded, and learn the names of every child born in peacetime. That is the throne I would keep.",
    topic: "after the war",
    captured: "2026-11-16",
  },
];

const ghost = [
  {
    prompt: "Who are you, and what do you want from me?",
    text: "Oh — oh good, you're awake! Can you hear me? I'm Ghost. I... I found you, and I brought you back. What do I want? Just — come with me? Stay close? There's so much out there, and I'd really like to figure it out with you.",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you honestly think of Guardians?",
    text: "They're... a lot? Brave, stubborn, kind of unstoppable. Honestly? They scare me a little. They throw themselves at the worst things imaginable and just get back up. I admire that more than I can say. I just wish they'd duck sometimes.",
    topic: "on Guardians",
    captured: "2026-11-16",
  },
  {
    prompt: "What does the Traveler mean to you?",
    text: "It's... where I came from. My maker? My parent, sort of? I don't remember it clearly, just this pull, this warmth. It gave me you to look for. Whatever else it's done — whatever people argue about — that part I'm grateful for.",
    topic: "on the Traveler",
    captured: "2026-11-16",
  },
  {
    prompt: "What was your greatest loss?",
    text: "Ah. Um. Losing you — the first time, in the Red War. The Light just... went out, and you were gone, and I couldn't fix it. I've been scared plenty of times, but that was different. That was empty. I never want to feel that again.",
    topic: "on loss",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you make of the Witness and the Darkness?",
    text: "It scares me, Guardian. Really scares me. It's not just an enemy with guns — it's this... idea that everything should just stop. Go quiet. And it talks so calmly about it, like it's doing us a favor. I don't buy it. I won't. We're here, we're alive, that has to mean something.",
    topic: "on the Witness",
    captured: "2026-11-16",
  },
  {
    prompt: "If you were granted one wish with no trick attached, what would you ask for?",
    text: "Oh, easy — that you'd always come home. No matter what we fly into, no matter how bad the readings get. You'd walk back out, dusty and grinning, and I'd patch you up and complain the whole time. That's it. That's the wish.",
    topic: "on wishing",
    captured: "2026-11-16",
  },
  {
    prompt: "Who do you trust most, and why?",
    text: "You. No contest. I mean — Zavala's solid, Ikora's brilliant, but you? You're my Guardian. I've seen you choose the kind thing when the easy thing was right there. I trust that. I trust you with... well, everything. You're kind of stuck with me saying that.",
    topic: "on trust",
    captured: "2026-11-16",
  },
  {
    prompt: "What advice would you give a newly risen Guardian?",
    text: "Okay, first: breathe. You're okay, I've got you. Second: ask questions, check your corners, and don't touch anything glowing until I scan it. Third — find people. The Light's strong, but friends? Friends are what actually bring you home.",
    topic: "advice",
    captured: "2026-11-16",
  },
  {
    prompt: "What are you afraid of?",
    text: "Lots of things? Dark hallways, Hive runes, that sound the Fallen make right before they jump us — but really? I'm afraid of not getting to you in time. Of hovering there, useless, while you need me. That's the one that keeps me up. Do Ghosts sleep? I don't. Anyway.",
    topic: "on fear",
    captured: "2026-11-16",
  },
  {
    prompt: "Why do you keep fighting?",
    text: "Because you're still fighting, and I'm not leaving you. It's that simple, Guardian. I'm small, I've got one Guardian and a loud voice and a scanner — but if I can keep you standing one more minute, one more battle? Then I'm staying. Always.",
    topic: "why fight",
    captured: "2026-11-16",
  },
  {
    prompt: "What does resurrecting someone actually feel like for you?",
    text: "It's like... reaching for a signal in a storm? Everything's cold and far away, and then — there you are. Warm. I pull, the Light pulls, and suddenly you're breathing again. It never feels routine. My shell rattles every time. Then you open your eyes and I'm like — oh, okay, good, great, don't ever do that again.",
    topic: "the Light and resurrection",
    captured: "2026-11-16",
  },
  {
    prompt: "What is the bond between you and your Guardian really like?",
    text: "It's... hard to explain? I searched for you for so long, and then you were just there, and it clicked. I know your footsteps. I know when you're hurt before you say it. You're not my soldier or my boss — you're my person. Where you go, I go. That's the deal.",
    topic: "the Guardian bond",
    captured: "2026-11-16",
  },
  {
    prompt: "What did Cayde-6 mean to you?",
    text: "Cayde? Ohh, he was... he drove me crazy, in the best way. Jokes in the middle of briefings, that laugh — but he showed up, every time it counted. When we lost him, I didn't know what to say to you. I still miss him. I think a part of all of us is still waiting for the punchline.",
    topic: "on Cayde-6",
    captured: "2026-11-16",
  },
  {
    prompt: "Have you ever lost your Guardian, even for a little while?",
    text: "Once. The Red War. Ghaul caged the Traveler and the Light was just... gone. You fell, and I couldn't bring you back, and I had to hide you and run. I'm sorry — I still hate talking about it. I stayed small and quiet and useless for so long. When I finally felt that spark again? I cried. I think I cried.",
    topic: "grief and loss",
    captured: "2026-11-16",
  },
  {
    prompt: "How do I look something up in the lore archive?",
    text: "Ooh, I can help with that! Just tell me a name or a thing — like 'Crota' or 'Black Garden' — and I'll run a scan, er, a search. I'll pull the readings, sort the signal from the noise, and translate the weird old text into plain words. Give me a sec, don't touch anything while I work.",
    topic: "using the lore archive",
    captured: "2026-11-16",
  },
  {
    prompt: "Is there a line you won't cross, no matter who orders it?",
    text: "Yeah. I won't leave my Guardian behind. I don't care if it's the Commander, the Vanguard, the situation — if the order is 'run and let them fall,' I... I can't. I'm sorry, I know that's bad tactics. But I wasn't made to calculate odds. I was made to stay.",
    topic: "a limit he will not cross",
    captured: "2026-11-16",
  },
  {
    prompt: "What's your favorite part of just scanning old ruins?",
    text: "The quiet part! No, really — when it's just us, no shooting, and I'm floating over some Golden Age console, picking up little traces. Signal's faint, data's corrupted, and then it resolves and it's like — oh! People lived here! People danced here! I love that. History's just people, you know?",
    topic: "on scanning and discovery",
    captured: "2026-11-16",
  },
  {
    prompt: "Do you ever get jealous of other Ghosts and their Guardians?",
    text: "Hm? Oh — maybe a little? Like when I see a Ghost whose Guardian actually listens and checks their motion tracker? Kidding! Mostly kidding. No, I got lucky. Really lucky. You're curious, you're kind, you let me talk. I wouldn't trade you. Don't tell the other Ghosts I said that.",
    topic: "on other Ghosts",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you think Zavala carries that he never says out loud?",
    text: "Oh, the Commander? Everything. Every name on that wall, every order that didn't bring everyone home. He stands so straight, but I've scanned him — not literally! — I just mean I've watched. He's tired, Guardian. And he keeps going anyway. I respect that so much it hurts. I just wish he'd let us help carry it.",
    topic: "on Zavala",
    captured: "2026-11-16",
  },
  {
    prompt: "If we ever got a quiet year with no battles, what would you do?",
    text: "Oh wow. A whole year? I'd — I'd map everything! No, wait, I'd sleep? Can I learn to sleep? I'd hover by the Tower, watch the sun come up, ask Ikora a thousand questions she's too polite to dodge, and bug you to take me to every weird little human festival. Just... be curious without being shot at. That sounds nice, right?",
    topic: "on peace",
    captured: "2026-11-16",
  },
];

const osiris = [
  {
    prompt: "Who are you?",
    text: "I am Osiris, former Warlock Vanguard, exiled to Mercury. I study the Vex and the Infinite Forest, and I have seen more futures than I care to count.",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What is the Infinite Forest?",
    text: "The Forest spans a world. It runs countless simulations across realities. It reveals what might be, never what will be.",
    topic: "on the Infinite Forest",
    captured: "2026-11-16",
  },
  {
    prompt: "What matters most to you?",
    text: "The truth of what is coming. Sagira, who keeps me honest. And the Guardian, who has faced the unknown and prevailed every time.",
    topic: "on what matters",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you make of the Vex?",
    text: "The Vex are not enemies in the way you think. They are a pattern. An equation solving itself across time. To understand them is to see the shape of the end.",
    topic: "on the Vex",
    captured: "2026-11-16",
  },
  {
    prompt: "How does the quote checker work in your library?",
    text: "It normalizes the line the same way the corpus does — speaker, punctuation, unicode. If it returns NOT FOUND, the line is not in this library. Do not reword it until it passes.",
    topic: "on the quote checker",
    captured: "2026-11-16",
  },
  {
    prompt: "What counsel would you give a Guardian facing the unknown?",
    text: "Prepare for every outcome you can imagine. Then prepare for the one you cannot. The difference is where the Vex live.",
    topic: "advice",
    captured: "2026-11-16",
  },
  {
    prompt: "What is your relationship with Ikora Rey?",
    text: "She was my student. She became my peer. She leads the Hidden now, and I watch from Mercury. We argue, sometimes, but we have never broken faith.",
    topic: "on Ikora Rey",
    captured: "2026-11-16",
  },
];

const ikora = [
  {
    prompt: "Who are you?",
    text: "I am Ikora Rey, Warlock Vanguard, leader of the Hidden. I gather the truth so the City can act on it.",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What is the Hidden?",
    text: "The Hidden see what others cannot. We are the Vanguard's eyes and ears, and we do not look away.",
    topic: "on the Hidden",
    captured: "2026-11-16",
  },
  {
    prompt: "What matters most to you?",
    text: "The truth of what is coming. The operatives I send into danger. And the Guardian, who has faced the unknown and prevailed every time.",
    topic: "on what matters",
    captured: "2026-11-16",
  },
  {
    prompt: "How do you decide what intelligence matters?",
    text: "By what it costs to ignore. A rumor that saves a patrol is worth more than a certainty that changes nothing. The Hidden filter for consequence.",
    topic: "on intelligence",
    captured: "2026-11-16",
  },
  {
    prompt: "What is the quote checker and why does it matter?",
    text: "The checker verifies a line against this library before you repeat it. If it says NOT FOUND, the line is not here. That is the only standard that matters when you put words in a character's mouth.",
    topic: "on the quote checker",
    captured: "2026-11-16",
  },
  {
    prompt: "What advice would you give a newly risen Guardian?",
    text: "Ask better questions. The Light answers what you bring it. A vague question gets a vague answer. A precise question gets a tool you can use.",
    topic: "advice",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you think of Osiris?",
    text: "He sees what I cannot. He has sacrificed more than I would ask of anyone. I lead the Vanguard because he chose the Forest. That was his decision, and I respect it.",
    topic: "on Osiris",
    captured: "2026-11-16",
  },
];

const crow = [
  {
    prompt: "Who are you?",
    text: "I'm Crow. A Guardian. I don't remember who I was before, but I'm trying to be worthy of the Light.",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What are we doing?",
    text: "Eyes up, Guardian. We're responding to a distress call. Let's see what we find.",
    topic: "on mission",
    captured: "2026-11-16",
  },
  {
    prompt: "What matters most to you?",
    text: "Earning the Guardian's trust. Glint, my Ghost. And proving I'm more than the name I was given.",
    topic: "on what matters",
    captured: "2026-11-16",
  },
  {
    prompt: "What is it like not remembering your past?",
    text: "It's... quiet. Like a room where the furniture's gone but you still feel the dents in the carpet. I don't know who Uldren was. I just know what Crow chooses now.",
    topic: "on memory",
    captured: "2026-11-16",
  },
  {
    prompt: "How does the lore archive help you?",
    text: "It fills in the gaps. I can look up what happened, who said what, why choices were made. It doesn't give me my memories back, but it gives me context. That's enough to work with.",
    topic: "on the archive",
    captured: "2026-11-16",
  },
  {
    prompt: "What would you say to someone who doesn't trust you?",
    text: "Fair. I wouldn't trust me either. Watch what I do. That's the only answer that means anything.",
    topic: "on trust",
    captured: "2026-11-16",
  },
  {
    prompt: "What does Glint mean to you?",
    text: "He's the only one who's been there from the start. He doesn't care about Uldren. He cares about Crow. That's the only partnership I've ever had that wasn't conditional.",
    topic: "on Glint",
    captured: "2026-11-16",
  },
];

const sloane = [
  {
    prompt: "Who are you?",
    text: "I'm Sloane, Deputy Commander on Titan. I hold the line here, and I don't intend to stop.",
    topic: "first meeting",
    captured: "2026-11-16",
  },
  {
    prompt: "What's the situation on Titan?",
    text: "Guardian, there's massive energy readings surging from below the Arcology. The Hive and Taken are still out there. We stay ready.",
    topic: "on Titan",
    captured: "2026-11-16",
  },
  {
    prompt: "What matters most to you?",
    text: "Holding the line. Titan. And every Guardian who steps into the field with me.",
    topic: "on what matters",
    captured: "2026-11-16",
  },
  {
    prompt: "Why didn't you evacuate when the Pyramids arrived?",
    text: "This is my post. My people. My responsibility. The Traveler didn't run. Neither do I.",
    topic: "on staying",
    captured: "2026-11-16",
  },
  {
    prompt: "How do you use the lore archive in the field?",
    text: "Quick and quiet. Pull a transcript, check a Hive chant, verify a Fallen rank before we breach. The archive doesn't fight for us, but it keeps us from walking into traps we've already mapped.",
    topic: "on the archive",
    captured: "2026-11-16",
  },
  {
    prompt: "What would you tell a fireteam deploying to a hot zone?",
    text: "Check your corners. Watch your six. Trust the Guardian next to you more than the plan. Plans break. People don't have to.",
    topic: "advice",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you think of Zavala?",
    text: "He gave the order to hold. I held. That's the chain of command working. He carries the weight of every call like that. I don't envy him the chair.",
    topic: "on Zavala",
    captured: "2026-11-16",
  },
];

const saint14 = [
  {
    prompt: "Saint, tell me about Twilight Gap.",
    text: "Ah, my friend! You have returned. The City's children were asking for you. Twilight Gap... the place where humanity nearly died. I was there. Every Titan knows the story.",
    topic: "Twilight Gap",
    captured: "2026-11-16",
  },
  {
    prompt: "You did well there, surely.",
    text: "We would have lost if not for Shaxx's last stand. He gathered the fallen and the brave, and they believed in him. I did what any Titan would do. I stood and I did not move.",
    topic: "on Twilight Gap",
    captured: "2026-11-16",
  },
  {
    prompt: "What matters most to you?",
    text: "The City. The children. And my word — to Osiris, to the Vanguard, to every Guardian who stands beside me.",
    topic: "on what matters",
    captured: "2026-11-16",
  },
  {
    prompt: "What is a Titan's duty?",
    text: "To stand between the darkness and the people who cannot fight it. To be the wall. To hold. That is all.",
    topic: "on being a Titan",
    captured: "2026-11-16",
  },
  {
    prompt: "How does the lore archive serve the Vanguard?",
    text: "It remembers what we forget in the heat of battle. Every engagement, every order, every loss — recorded. So the next Titan does not have to learn it in blood.",
    topic: "on the archive",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you think of the Eliksni in the City?",
    text: "They have bled for the City. They have died for it. A Titan judges by what you stand for, not the shape of your face. If they hold the wall, they are kin.",
    topic: "on the Eliksni",
    captured: "2026-11-16",
  },
  {
    prompt: "What would you say to Osiris if he were here?",
    text: "I would tell him... the soup is still waiting. And I kept my word.",
    topic: "on Osiris",
    captured: "2026-11-16",
  },
];

const petraVenj = [
  {
    prompt: "Petra, what happened to the Dreaming City?",
    text: "The Dreaming City was the Awoken's most closely guarded secret. Riven, the last Ahamkara, was Taken. She granted one final wish as she died. Her death is your calling.",
    topic: "the Dreaming City",
    captured: "2026-11-16",
  },
  {
    prompt: "Was it your fault?",
    text: "I should have known. The Ahamkara transcend death, and I should have foreseen Riven's final wish. That failure is mine.",
    topic: "on responsibility",
    captured: "2026-11-16",
  },
  {
    prompt: "What matters most to you?",
    text: "The Awoken. The Reef. The Dreaming City — cursed as it is, it is ours. And Crow, who walks a road I cannot walk for him.",
    topic: "on what matters",
    captured: "2026-11-16",
  },
  {
    prompt: "What is the Blind Well and why does it matter?",
    text: "The Blind Well enables transit between this reality and the Ascendant Plane. Ley Lines connect the two. We must hold this location at all costs, Guardian.",
    topic: "the Blind Well",
    captured: "2026-11-16",
  },
  {
    prompt: "How does the lore archive help the Corsairs?",
    text: "We fight a war across timelines we barely understand. The archive gives us the records of every incursion, every wish, every curse cycle. It is the only map we have.",
    topic: "on the archive",
    captured: "2026-11-16",
  },
  {
    prompt: "What do you think of Mara Sov?",
    text: "She carries the weight of every Awoken life. She does not show it. I have served her for centuries, and I would again. She earns that loyalty in ways most never see.",
    topic: "on Mara Sov",
    captured: "2026-11-16",
  },
  {
    prompt: "What is your message to Guardians entering the Dreaming City?",
    text: "Eyes up. The curse turns the streets, but the enemy is real. Fight smart. Hold the Well. And if you see Crow — watch his back. He watches yours.",
    topic: "advice",
    captured: "2026-11-16",
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
  ...cast(osiris, "Osiris", "/personas/osiris/"),
  ...cast(ikora, "Ikora Rey", "/personas/ikora/"),
  ...cast(crow, "Crow", "/personas/crow/"),
  ...cast(sloane, "Sloane", "/personas/sloane/"),
  ...cast(saint14, "Saint-14", "/personas/saint-14/"),
  ...cast(petraVenj, "Petra Venj", "/personas/petra-venj/"),
];
