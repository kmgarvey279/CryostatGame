import { findKey, now, sortedIndexOf, takeRight, times } from "lodash"
import { phone, shower } from "../../../components/App/SoundsLibrary"

export const roomNames = ['Cyronics Lab B', 'Central Coridoor', 'Teleportation Lab', 'Security Drone Storage', 'Cronics Lab A', 'Shipping and Receiving', 'Chimera Lab', 'Power Core', 'Mainframe', 'The Wound']
// export const lore = {
//   Wounds: {1: ['AKA: "achronic wounds". This term encompasses the totality of spacial/temporal distortions that were first obsurved in 1990.', 
//   'The lifecycle of the wounds appears to flow in the opposite direction of conventional time.']},
//   Scars: {1: ['The inital form taken by the Wounds (at least according to conventional measures of time).',
//   'Unlike Wounds, no information can pass in or out of a scar, making them largely useless for time travel purposes.',
//   'They cannot be directly observed, and are only detectable due to subtle distortions in local space-time.'
//   ]},
//   Stigmata: {1: ['Acronic Wounds that appear on the bodies of individuals (Stigmatics).',
//             'Stigmata follow a similar lifecycle to their larger counterparts, progressing from small "scars" to "wounds" that take up more-and-more of the afflicted\'s body.',
//             'The stigmata do not typically cause pain or discomfort, but affected areas begin to loose all feeling.',
//             'Stigmatics often seem to suffer from a form of "phantom limb syndrome", in which they feel as if their afflicted body parts are not their own.',
//             'Most notably, these wounds are almost always accomendied by unique abilities. It would hardly be an exageration to refer to them as "superpowers".',
//             'Stigmatism is obsurved in females at roughly 3x the rate they are obsrved in males across species. The reason for this, as well as the fact that there seem to be elements of heretity invlved, are not well understood.'],
//   openTimeLoops: {1: ['a temporal loop the wraps back upon itself before continuing forward in time.',
//             'In contrast to closed time loops, people, objects, or information traveling through a closed time loops have defitive points of origin.', 
//             'Claire\'s ability to create a "clone" by traveling back in time is an example of an open time loop.'],
//   theBoard: {1: ['The counsol of directors who control Needle\'s Eye and its subsidearies.',
//               'While the President is in charge of the majority of day-to-day operations, they still ultimatly answer to the Board.',
//               'The Board claims to have trancended the notion of time, but Mutiny seems to think']}
//           },
//   needlesEye: {1: ['An inter-temporal megacorp that dominates the timestream due to its near monoply on the Wounds.',
//               'Needle\'s Eye began as psyop cult created by a R&D firm used to buy up huge tracts of real-estate where Scars were detected without drawing too much attention from global powers',
//               'The cult ammased so many followers and gained so much influnce that it eventually came to completly swallow up its parent company.',
//               'It\'s unclear what the ratio of true belivers-to-rational oprtunists is at this point, even amoung the Board itself.']} 
//   }
export const examine = {
  tank1: { 1: ['Some sort of weird machine.', 'It\'s empty.'] },
  tank2: { 1: ['Some sort of weird machine.', 'It\'s empty.'] },
  tankE1: { 1: ['The weird machine you woke up inside of.', 'No question about it. It\'s gotta die.']},
  tankE2: { 1: ['The weird machine you woke up inside of.', 'No question about it. It\'s gotta die.']},
  tankBroken1: { 1: ['The remains of the weird machine you woke up inside of, AKA: the "Ultra Wallop Smackdowned" machine.']},
  tankBroken2: { 1: ['The remains of the weird machine you woke up inside of, AKA: the "Ultra Wallop Smackdowned" machine.'] },
  tube: { 1: ['A tank containing some sort of weird... thing.', 'It seems to be alive, but it won\'t respond to anything you do.'] },
  tube: { 2: ['A tank containing some sort of weird... thing.', 'It seems to be alive, but it won\'t respond to anything you do.'] },
  bigTube1: {
    1: ['A massive tank of some sort.', 'There\'s something very large and very unsettling inside, but it doesn\'t appear to be alive... anymore.'],
  },
  bigTube2: {
    1: ['A massive tank of some sort.', 'There\'s something very large and very unsettling inside, but it doesn\'t appear to be alive... anymore.'],
  },
  bigTube3: {
    1: ['A massive tank of some sort.', 'There\'s something very large and very unsettling inside, but it doesn\'t appear to be alive... anymore.'],
  },
  save: {
    1: ['The strange light seems to split into countless branching rays.'],
    2: ['options', ['Save Game', 'Cancel']],
  },
  saveA: {
    1: ['Game saved.'],
  },
  saveB: {
    1: ['Save canceled.'],
  },

  desk1: {
    1: ['A desk. The computer seems damaged irreparably.']
  },
  desk2: {
    1: ['A desk. The computer seems damaged irreparably.']
  },
  desk3: {
    1: ['A desk. The computer seems damaged irreparably.']
  },
  keyCard2Old: {
    1: ['The old keycard. You need to leave it there so you\'ll be able to pick it up in the future.']
  },
  cryostatOld: {
    1: ['The older version of the cryostat.', 'You had some good times together.']
  },
  //prologue
  poster1: {
    1: ['It\'s a poster from the show... Zilch and Gupo? Zorn and Garfunkel?.', 'You can\'t remember the name, Lucy was the one who put it up.', 'You\'ve only seen a few episodes, but you\'ve gathered that it\'s about cute characters wandering around a desert and fighting the Horsemen of the Apocalypse or something?']
  },
  poster2: {
    1: ['It\'s a poster from one of Lucy\'s favorite movies.', 'An ancient demon is accidentally resurrected as a bagel. Wacky hijinks ensue.', 'The film ends with the demon attempting to turn the entire universe into a giant sandwich.', 'Lucy has very... unique tastes. To put it mildly.']
  },
  fridge: {
    1: ['The fridge. ...for some reason, looking at it is giving you an unpleasant feeling in the pit of your stomach.', 'Worse then the one you normally have.'],
    2: ['This dosen\'t feel like the normal "rancid leftovers" variety of dread.'], 
    3: ['This is something else, something much deeper.'], 
    4: ['It feels like the source lies just beyond the edge of your consciousness, but you can\'t quite reach it, no matter how hard you try.', 'Probaly best to treat it like every other source of anxiety in your life: ignore it!']
  },
  sink1: {
    1: ['The sink. Dishes are starting to pile up.', 'You\'re pretty sure it\'s your turn to wash them.', 'Crap.']
  },
  sink2: {
    1: ['The microwave. According to the display, it\'s a bit after 10 AM.']
  },
  heater: {
    1: ['An old radiator heater. Everything is fine.']
  },
  bookshelf: {
    1: ['The bookshelf. Let\'s see... there\'s a ton of science fiction (The hard stuff, of course)...', '...some massive postmodern tomes you bought because you wanted to think of yourself as the sort of person capable of appreciating that sort of thing.'],
    2: ['...some dumb new age stuff *gag* one of your previous therapists recommended...', '...textbooks from your previous life, and a bunch of other miscalious crap.'],
    3: ['The rest is taken up by Lucy\'s manga and YA fantasy romance collection.']
  },
  laptop1: {
    1: ['It\'s your laptop. What were you doing last night again?', 'Not working on your term paper, apparently.', 'Whatever, it\'s not like it really matters if you pass or fail, you only enrolled at the local community college to get Lucy off your back.'],
    2: ['options', ['Examine internet browser.', 'Examine "Frontier Xenopsychologist"']],
  },
  laptop2: {
    1: ['It\'s your laptop. What were you doing last night again?', 'Not working on your term paper, apparently.', 'Whatever, it\'s not like it really matters if you pass or fail, you only enrolled at the local community college to get Lucy off your back.'],
    2: ['options', ['Examine internet browser.', 'Examine "Frontier Xenopsychologist"']],
  },
  laptop1A: {
    1: ['It\'s "Truthageddon", a forum dedicated to all things conspiritorial and pseudoscific.', 'At first, you just hung out there to troll people by making up your own absurd theories, but over time you started getting pretty into it.'],
    2: ['Not that you actuall *believe* any of it or anything, but you\'ve come to appreciate it as a form of (unintentional) avant garde political commentary.'],
    3: ['Let\'s see... we\'ve got our standard lizard men and Illuminati threads, people claiming to be able to predict the future, speculation about some signal picked up by a few of the big radio telescopes, chimeras being engineered in underground labs...', '...and yet another thread about Needle\'s Eye. Hate to break it to you guys, but they\'re just a regular old cult designed to scam rich idiots and psychologically vulnerable people.', 'The idea that they have any degree of influence in global politics is pretty laughable.']
  },
  laptop1B: {
    1: ['It\'s the game "Frontier Xenopsychologist".', 'A sexy psychologist attempts to use his knowledge of the diverse array of minds (and hearts) that occupy the solar system to solve a series of gruesome murders on a remote off-world colony.'],
    2: ['It\'s basically a dating sim. You\'re currently seducing Ashley, a literal brain in a jar who oversees most of the colony\'s infrastructure.'],
    3: ['Her route is a bit better than IRIS IV, your childhood friend who\'s also an advanced missile guidence AI, but not quite as good as Boto, the super-intelligent cyborg dolphan gangster with a heart of gold.']
  },
  laptop2A: {
    1: ['It\'s "Truthageddon", a site that focuses on all kinds of weird conspiracy and pseudoscience stuff.', 'At first, you just hung out there for a laugh, but over time you started getting pretty into it.'],
    2: ['Not that you *believe* any of it or anything, but you\'ve come to appreciate it as a form of (unintentional) avant garde political commentary.'],
    3: ['Let\'s see... we\'ve got our standard lizard men and Illuminati threads, people claiming to be able to predict the future, speculation about some signal picked up by a few of the big radio telescopes, chimeras being engineered in underground labs...', '...and yet another thread about Needle\'s Eye. Hate to break it to you guys, but they\'re just a regular old cult designed to scam rich idiots and psychologically vulnerable people.', 'The idea that they have any degree of influence in global politics is pretty laughable.']
  },
  laptop2B: {
    1: ['It\'s the game "Frontier Xenopsychologist".', 'A sexy psychologist attempts to use his knowledge of the diverse array of minds (and hearts) that occupy the solar system to solve a series of gruesome murders on a remote off-world colony.'],
    2: ['It\'s basically a dating sim. You\'re currently seducing Ashley, a literal brain in a jar who oversees most of the colony\'s infrastructure.'],
    3: ['Her route is a bit better than IRIS IV, your childhood friend who\'s also an advanced missile guidence AI, but not quite as good as Boto, the super-intelligent cyborg dolphan gangster with a heart of gold, aka "best boy".']
  },
  uniform:{
    1: ['A work vest from the warehouse you work at. The Anima compeny logo is printed on the back.', 'You rarely leave the house without it nowadays, it feels weird to be leaving it behind.'],
  },
  tv1: {
    1: ['The TV and Entertainment Block (aka: the "Ultra Wallop Siblings: Smackdown" machine).'],
    2: ['Countless humilating losses to Lucy flash before your eyes.']
  },
  tv2: {
    1: ['The TV and Entertainment Block (aka: the "Ultra Wallop Siblings: Smackdown" machine).'],
    2: ['Countless humilating losses to Lucy flash before your eyes.']
  },
  coffeeT: {
    1: ['It\'s the coffee table.', 'You should probably check your phone...', 'No messages from any of your college friends, as expected. ', 'It\'s fine. No need to rub any more salt in the wound. It\'s totally 100% fine.', 
    'Ugg, *another* message from that guy you hooked up with over three months ago.', 'What part of "one-time thing" do guys have trouble understanding? Into your blocked number list he goes.', 
    '...and yet another reminder to pick up your perscription.', 'Maybe you could ask Lucy to go get it, she already does most of the shopping.'],
  }, 
  coffee: {
    1: ['It\'s coffee, your second favorite addictive chemical substance. Hallelujah.'],
  },
  bathroomDoor: {
    1: ["The bathroom. There's nothing else you need to do in there."],
  },
  aptDoor: {
    1: ["Something isn't right here..."],
  },
  woundClosed: {
    1: ["No way you'll be able to get through it right now."]
  },
  sign1: { 1: ['Telportation Lab'] },
  sign2: { 1: ['Chemera Lab']},
  signCore: {1: ['Power Core.']},
  signWarp: {1: ['Wound Access.']},
  terminalOff: { 1: ['A computer terminal. It doesn\'t seem to be receiving any power.'] },
  spookyTerminal: { 1: ['A computer terminal. It doesn\'t seem to be receiving any power.'] },
  mapTerminal: {
    1: ['Downloading map data for this floor...'],
    2: ['Download successful.'],
  },
  terminal0: {
    1: ['Logging in...'],
    2: ['Personal identificiation bracelet not detected. Unable to log in.'],
  },
  terminal1: {
    1: ['Logging in...', 'It looks like you can unlock the door from here.'],
    2: ['options', ['Lock the door.', 'Unlock the door.']],
  },
  terminal1A: {
    1: ['Door Lock Engaged.'],
    2: ['Logging Out...']
  },
  terminal1B: {
    1: ['Door Lock Disengaged.'],
    2: ['Logging Out...']
  },
  //belt/ice room
  terminal2: {
    1: [''],
    2: ['.'],
    3: ['.'],
    4: ['I know it goes against the heart of the scientific method, but keeping track just got to be too demoralizing for the team.'],
    5: ['Most of them have loved ones frozen either here or in one of our sister faclities.'],
    6: ['Even a single surviving test subject would give them a glimmer of hope that the cryogensis process isn\'t just a mercy killing.'],
    7: ['I\'m one of the few exceptions.'],
    8: ['Not that I had any real "loved ones" before I was hired by Needle\'s Eye. My work has always been my one and only love.'],
    9: ['I guess I\'m lucky in that regard. It\'s easier for me to remain objective.'],
    10: ['Dr. Mariam Cruz - Head Researcher, Cryonics Team']
  },
  //xeno room
  terminal3: {
    1: ['Attn: All Seed #33 Employees and Contractors'],
    2: ['As I\'m sure all of you are well aware, Dr. Eiger has been removed from his position as head of Xenobological Research.'],
    3: ['Many of the relevent details behind this decision cannot be revealed at this time due to the confidental nature of much of his research.'],
    4: ['However, we are able to confirm that Dr. Eiger conducted multiple unethical and dangerous expereiments without the authorization of senior leadership.'],
    5: ['Needle\'s Eye does not endurse unethical reseach practice and it has no place in any of our falicities.'],
    6: ['Please direct any further questions to your HR represenative.']
  },
  //cryo room
  terminal4: {
    1: ['Private Entry'],
    2: ['More and more access to the outside world has been cut off.'],
    3: ['Why? Our work hours haven\'t increased at all, so this can\'t be ablout increasing productivity.'],
    4: ['The Needle\'s Eye represenatives claim that its too dangerous to leave right now, but they refuse to provide any further information about what\'s happening.'],
    5: ['Was this their plan all along?'],
  },
  //cryo room
  terminal5: {
    1: ['Journal Entry - 02/13/2029'],
    2: ['success rate for telportation of simple inanimate objects ~99%'],
    3: ['success rate for telportation of complex inanimate objects ~95%'],
    4: ['success rate telportation of single celled organisms ~90%'],
    5: ['success rate teleportation of multi-cellular organisms (worms) ~70%'],
    6: ['research from other team in facility #26 incredibly helpful.'],
    7: ['would like to speak with them, but needles eye reps say thats not possible.'],
    8: ['dont seem interested in forwarding any of our research to them either.'],
    9: ['maybe other team was disbanded?'],
    10: ['dont trust needles eye, but cant say no to their resources.'],
    11: ['cryo dr (maria?) wants to talk to me about something.'],
    12: ['dont know what my research has to do with hers, but will still go see what she wants.'],
    13: ['-Dr Wen Huan']
  },
  terminal6: {
    1: ['Journal Entry - 02/14/2029'],
    2: ['finally talked to marium. head is still spinning from what she said.'],
    3: ['like me, shes been being fed data from another team.'],
    4: ['but claims that she found a message specifically addressed to her encripted in some of the data'],
    5: ['really crazy part: message claimed to have been written by marium herself. or rather a verson of herself from the future.'],
    6: ['its impossible. it has to be. she was convinced though, said the message contained references to things only she would know'],
    7: ['if it were true, does that mean the "other teams" are just ourselves in the future?. are we feeding ourselves information in a positive feedback loop?'],
    8: ['other facilities defiently exist. spent some time at two others before transfering here. still not enough to rule out the loop theory.'],
    9: ['it would explain a lot of things. needles eye has pioneered new technology at a rate that should be impossible.'],
    10:['they dominate just about every global market - biotech, weapons, communications - to the point where they hold more power then most countires'],
    11: ['still, time travel? even if it was possible (its not!), it would be far more complex than the spatical teleoprtation tech were still struggling with.'],
    12: ['damn it, i just wanted to be left alone to focus on my research, not distrated by these psudo-scientific cosperacy theories...'],
    13: ['oh yea, marium also asked me out for coffee!? honistly, that was the most shocking part of our entire conversation.ed'],
  },
  terminal9a: {
    1: ['Logging in...'],
    2: ['Core Status: Output - Low, Configuration - Basic Ship Functions'],
    3: ['options', 'Initiate Core Override Process?', ['Yes', 'No']],
    4: ['results', ['Override Process Initiated.', 'Override Process Aborted.']],
    5: ['Logging Out...']
  },
  terminal9b: {
    1: ['Logging in...'],
    2: ['WARNING: Unable to reconfigure core output due to irreversable system damage. A manual override must be performed.'],
    3: ['options', 'Initiate Core Override Process?', ['Yes', 'No']],
    4: ['results', ['Manual Override Initiated.', 'Manual Override Aborted.']],
    5: ['Logging Out...']
  },
  terminal9c: {
    1: ['Logging in...'],
    2: ['options', 'Activate manual override?', ['Yes', 'No']],
    3: ['results', ['Manual Override Initiated.', 'Manual Override Aborted.']],
    4: ['Logging Out...']
  },
  terminal9d: {
    1: ['Logging in...'],
    2: ['WARNING: Unable to reconfigure core output due to irreversable system damage. A manual override must be performed.'],
    3: ['options', 'Initiate Core Override Process?', ['Yes', 'No']],
    4: ['results', ['Manual Override Initiated.', 'Manual Override Aborted.']],
    5: ['Logging Out...']
  },
  terminal9e: {
    1: ['Logging in...'],
    2: ['Manual overrides confirmed. System primed for reconfiguration. WARNING: extreme radiation.'],
    3: ['options', 'Core Setting:', ['Full Power', 'Energy Saving']],
    4: ['results', ['Switching to Full Power Mode.', 'Remaining in Power Saving Mode.']],
    5: ['Logging Out...']
  },
  phoneOff: { 1: ['No response.'] },
  phone1: { 1: ['You heard a familiar voice you couldn\'t quite place...'] },
  sync1: {
    1: ['A flood of strange but familiar memories and emotions came rushing in.'],
    2: ['You felt a sense of triumpth as you finally completed a difficult puzzle involving laser beams.'],
    3: ['Entanglement increased by 5%.']
  },
  sync2: {
    1: ['A flood of strange but familiar memories and emotions came rushing in.'],
    2: ['You experenced crushing lonliness as you aimlessly wandered around the facility all by yourself.'],
    3: ['Entanglement increased by 5%.']
  },
  sync3: {
    1: ['A flood of strange but familiar memories and emotions came rushing in.'],
    2: ['Terror courses through your veins as you watch the facility ceilling collapse on top of you.'],
    3: ['Entanglement increased by 5%.']
  },
  sync4: {
    1: ['A flood of strange but familiar memories and emotions came rushing in.'],
    2: ['Terror courses through your veins as you watch the facility ceilling collapse on top of you.'],
    3: ['Entanglement increased by 5%.']
  },
}

export const dialogue = {
  //prologue
  Lucy1: {
    1: ['???', ['-up.']],
    2: ['Claire',  ['...']],
    3: ['???', ['Hey, wake up already!', 'Crap, did I do something wrong? Is she dead?']],
    4: ['', ['options', ['Open your eyes.', 'Keep sleeping.']]],
  },
  Lucy1A:{
    1: ['', ['It\'s the world.', '...also, your sister.', 'Both seems to be conspiring to prevent you from getting any more sleep.']],
    2: ['Claire', ['Ugg...', 'Lucy, what the hell? I know for a fact that today isn\'t a school day.']],
    3: ['Lucy', ['Well, yeah. That\'s the whole point.', 'You didn\'t forget your promise, did you?']],
    4: ['', ['You did.', 'However, it still might not be too late to pull it back from the depths of your mind.']],
    5: ['', ['options', ['Of course not.', 'Ummm...']]],
  },
  Lucy1AA:{
    1: ['Claire', ['I said...', 'I\'d take you to go see the Charred musical, right?']],
    2: ['Lucy', ['Wow! You actually remembered!']],
    3: ['Claire', ['Come on, give me a little more credit here.', 'My memory isn\'t that bad...']],
    4: ['', ['You just happen to pretend to forget things in order to shrink from social obligations every now and again... and again.']],
    5: ['Lucy', ['My bad!', 'Anyway, you already slept in for way too long, hurry up and get ready.']],
  },
  Lucy1AB:{
    1: ['Claire', ['Ummm...', 'I promised... to...']],
    2: ['Lucy', ['*sigh*, You promised to go with me to see the Charred musical.']],
    3: ['Claire', ['Oh yeah, I guess I probably did say that...']],
    4: ['Lucy', ['Definitely.']],
    5: ['Claire', ['Fine, guess I *definitely* probably said that.']],
    6: ['Lucy', ['Anyway, you already slept in for way too long, hurry up and get ready.']],
  },
  Lucy1B: {
    1: ['Claire', ['Damn it, just give me five more minutes.']],
    2: ['???', ['That\'s the same thing you said the *last* five times I tried to wake you up.']],
    3: ['Claire', ['This will be the last time, I promise!']],
    4: ['???', ['Okay, but if you don\'t wake up next time you\'re gonna be sorry~']],
    5: ['Claire', ['...', '....', '.....', '......', '.......']],
    6: ['???', ['-wake up.', 'Come on, Claire...']],
    7: ['Claire', ['...']],
    8: ['???', ['*Grrrrr*']],
    9: ['', ['You feel a murderous intent radiating from just beyond your safe cocoon of sleep.']],
    9: ['', ['options', ['Open your eyes.', 'Keep sleeping. It\'ll be fine.']]],
  },
  Lucy1BA: {
    1: ['', ['It\'s the world.', '...also, your sister.', 'Both seems to be conspiring to prevent you from getting any more sleep.']],
    2: ['Claire', ['Ugg...', 'Lucy, what the hell? I know for a fact that today isn\'t a school day.']],
    3: ['Lucy', ['Well, yeah. That\'s the whole point.', 'You didn\'t forget your promise, did you?']],
    4: ['', ['You did.', 'However, it still might not be too late to pull it back from the depths of your mind.']],
    5: ['', ['options', ['Of course not.', 'Ummm...']]],
  },
  Lucy1BAA:{
    1: ['Claire', ['I said...', 'I\'d take you to go see the Charred musical, right?']],
    2: ['Lucy', ['Wow! You actually remembered!']],
    3: ['Claire', ['Come on, give me a little more credit here.', 'I only forget about things that aren\'t worth remembering.']],
    4: ['', ['Or rather, the things you don\'t *want* to remember.', 'Like, say, the last 22 years of your life.']],
    5: ['Lucy', ['My bad!', 'Anyway, you already slept in for way too long, hurry up and get ready.']],
  },
  Lucy1BAB:{
    1: ['Claire', ['Ummm...', 'I promised... to...']],
    2: ['Lucy', ['*sigh*, You promised to go with me to see the Charred musical.']],
    3: ['Claire', ['Oh yeah, I guess I probably did say that...']],
    4: ['Lucy', ['Definitely.']],
    5: ['Claire', ['Fine, guess I *definitely* probably said that.']],
    6: ['Lucy', ['Anyway, you already slept in for way too long, hurry up and get ready.']],
  },
  Lucy1BB: {
    1: ['Claire', ['Damn it, just give me five more minutes.']],
    2: ['???', ['...', 'Last chance~']],
    3: ['', ['options', ['Open your eyes.', 'Martyr yourself in the name of Hypnos.']]],
  },
  Lucy1BBA: {
    1: ['', ['It\'s the world. ...Also, your sister.', 'Both seems to be conspiring to prevent you from getting any more sleep.']],
    2: ['Claire', ['Ugg...', 'Lucy, what the hell? I know for a fact that today isn\'t a school day.']],
    3: ['Lucy', ['Well, yeah. That\'s the whole point.', 'You didn\'t forget your promise, did you?']],
    4: ['', ['options', ['Of course not.', 'Ummm...']]],
  },
  Lucy1BBAA:{
    1: ['Claire', ['I said...', 'I\'d take you to go see the Charred musical, right?']],
    2: ['Lucy', ['Wow! You actually remembered!']],
    3: ['Claire', ['Come on, give me a little more credit here.', 'I only forget about things that aren\'t worth remembering.']],
    4: ['', ['Or rather, the things you don\'t *want* to remember.', 'Like, say, the last 22 years of your life.']],
    5: ['Lucy', ['My bad!', 'Anyway, you already slept in for way too long, hurry up and get ready.']],
  },
  LucyBBAB:{
    1: ['Claire', ['Ummm...', 'I promised... to...']],
    2: ['Lucy', ['*sigh*, You promised to go with me to see the Charred musical.']],
    3: ['Claire', ['Oh yeah, I guess I probably did say that...']],
    4: ['Lucy', ['Definitely.']],
    5: ['Claire', ['Fine, guess I *definitely* probably said that.']],
    6: ['Lucy', ['Anyway, you already slept in for way too long, hurry up and get ready.']],
  },
  Lucy1BBB:{
    1: ['???', ['Prepare yourself! Ultimate Sleep Severence Attack!']],
  },
  LucyGameOver: {
    1: ['???', ['...', 'Geez, what a drama queen.']],
    2: ['Claire', ['Sorry, can\'t hear you. I\'m dead.', 'Just gonna lie here and rot. Have fun cleaning it up.']]
  },
  LucyTalk1:{
    1: ['Lucy', ['Ready?']],
    2: ['', ['options', ['Leave', 'Ask about her outfit', 'Ask about Charred: The Musical']]],
  },
  LucyTalk1A:{
    1: ['Claire', ['Yeah, let\'s go.']]
  },
  LucyTalk1B:{
    1: ['Claire', ['Um, Lucy why are you wearing your school uniform?', 'I just did our laundry a few days ago.']],
    2: ['Lucy', ['This is just my style, Claire.', 'It\'s like, rebellious because I\'m wearing it outside of school.']],
    3: ['Claire', ['Hmm, are you sure you aren\'t just trying to look like some sort of anime character?']],
    4: ['Lucy', ['Haha, why would you think that, haha.']],
    5: ['Claire', ['Well, isn\'t that outfit pretty much the same thing the OC character you always draw wears?', 'At least you\'re not wearing the cat ears, thank the anime gods.']],
    6: ['Lucy', ['Gahh! I told you not to look at my sketchbook!']],
    7: ['', ['Dude, in that case maybe don\'t leave it wide open on the kitchen table? It\'s not like I leave my Star Trench slashfics open on my laptop ...all that often.']],

  },
  LucyTalk1C:{
    1: ['Claire', ['So, Charred, huh?', 'I realize I\'m not really in any position to criticize other people\'s tastes, but aren\'t you getting a little old for this princess stuff?']],
    2: ['Lucy', ['This isn\'t just "princess stuff" Claire, it\'s a subversive feminist deconstruction.']],
    3: ['Claire', ['Suuure.', 'Doesn\'t the princess end up becoming some sort of evil witch and burning down the surrounding countryside?', 'Is that supposed to be some sort of weird female empowerment "look at this total girlboss showing the boys how warcrimes are done" thing?']],
    4: ['Lucy', ['Way to miss the point. Sometimes its just fun to imagine you\'re poweful and feared instead of... the opposite...']],
    5: ['Claire', ['I guess...']],
    6: ['Lucy', ['Anyway, the songs are great. I really hope we pick it as our school play this year.']],
    7: ['Claire', ['I hope your school has a good copyright lawyer on retainer...']],
    8: ['', 'They sure charge enough for tuition.', 'Still you can\'t really complain, better than sending her to some "alternative" school that would treat her like a psyiatric patent.'],
    9: ['Lucy', ['Hey, Earth to Claire?']],
    9: ['Claire', ['Oh, sorry.', 'Let\'s be honest though, you\'d probably end up as that annoying Wicker Man.', 'Doesn\'t the drama teacher hate you?']],
    10: ['Lucy', ['He just can\'t appreciate my mad impro skills...']],
    11: ['Claire', ['Yeah, I\'m sure it has nothing to do with when you choose to improvise.']],
  },
  Lucy2:{
    1: ['Lucy', ["Hey, Claire, you're in a good mood right now, right?"]],
    2: ['Claire', ["You're talking relatively, right?", 'I guess. How come?']],
    3: ['Lucy', ["Promise you won't freak out?"]],
    4: ['Claire', ["Kind of hard to promise anything when I have no idea what it is you want to tell me.", "I'll promise to keep the freaking out to a minimum, how's that?"]],
    5: ['Lucy', ["Okay...", "Well, I was kind of approched by some people from mom's church after school the other day..."]],
    6: ['Claire', ["What!?", "What did they want from you? How did they even find you?", 'Were they hoping you\'d be as generous as our mother was with her "donations"?', 'Lousy stinking con artists... *grumble*']],
    7: ['Lucy', ["They just said that they were glad to see that I was doing well. It was weird."]],
    8: ['Claire', ["Everything about those bastards is weird.', 'Tell a teacher or something next time, I doubt they'd take kindly to heathons prlatizing outside a private religious middle school."]],
    9: ['Lucy', ["Will do!", "*Phew* Glad I got that out of the way.", "Now I can just focus on the show for the rest of the day."]],
    10: ['Claire', ["Woo-freaking-hoo."]],
  },
  Lucy3:{
    1: ['Claire', ["...Lucy?"]],
  },
  postCoffee: {
    1: ['', ['Ahh, Much better. You almost feel like an actual person now.', '...almost.']]
  },
  annoyLucy: {
    1: ['Lucy', ['You know it\'s super obvious that you\'re just messing around and wasting time, right?']],
    2: ['Claire', ['I\'m just making sure everything is still here!', 'Yep, walking around the house and looking at each individual object is totally part of my normal morning routine.']],
    3: ['Lucy', ['Are you sure you don\'t have, like, OCD or something?']],
    4: ['Claire', ['Nah, I\'m pretty sure I don\'t have that one.', 'Although, I guess it wouldn\'t hurt to ask my psyciatrist about it next time...']],
    5: ['Lucy', ['If you ever actually go to another appointment...']],
    6: ['', ['Man, that girl never lets up. Sometimes, you feel like she\'s *your* guardian.', '...a lot of the time, actually.']],
  },
  leaveLucy: {
    1: ['Lucy', ['Umm, Claire, I\'m glad you\'re eager to get going, but maybe give me a heads up before you rush out the door?']],
    2: ['Claire', ['Sorry, I figured you\'d be right behind me.', 'I guess it was kind of dick move though.']],
    3: ['Lucy', ['It\'s cool, but don\'t expect to be able to sneek away so easily once we get to the show.', 'Hehehe, there\'ll be no escape, Claire. No escape!']]
  },
  exitStartingRoom: {
    1: ['Lucy', ['Race you to the stairs!']],
    2: ['Claire', ['Not interested.']],
    3: ['Lucy', ['Fine. I\'ll try to beat my record in that case.', 'Prepare youself, past me, you\'re going down!']],
    4: ['Claire', ['Yeah, knock yourself out.', 'Not literly though, I\'m not spending my day off in the ER with you *again*.']],
    5: ['', ['Actually, would that really be worse than sitting through that musical?', '...wait, what are you thinking? Bad brain!']]
  },
  wakeUp1: {
    1: ['', ['...?', 'That was... a dream?', 'Of course it was a dream.', 'What\'s that noise? ...And why does your bed feel so cold and hard? Did you pass out on the floor *again*?','There\'s no way you\'ll be able to get any more sleep like this. Looks like you have no choice...']],
    2: ['', ['options', ['Open your eyes.']]],
  },
  wakeUp1A: {
    1: ['', ['Your surroundings slowly come into focus.', 'It\'s the world. Well, *a* world at least. It\'s not one you recognise, that\'s for sure.', 'You feel like complete shit. Take the worst hangover in your life and multiply it by... well, a lot.']],
    2: ['', ['It\'s not just your body either, your mind is also in complete disaray.', 'You can remember your name, your address, that embarising thing you said to the delivery driver last time you ordered in, your sister...', 'Wait, wasn\'t there something you needed to do that involved Lucy? Something really important?']],
    3: ['', ['No luck. All you can druge up from your mind is a blinding rage directed towards this weird machine.', 'It needs to feel your wrath. That\'s defiently your #1 objective right now.']]
  },
  smashMachine1: {
    1: ['Claire', ['Any last words, weird machine?']],
    2: ['Weird Machine', ['...']],
    3: ['Claire', ['Nothing to say for yourself, huh?', 'Well, I hope you\'ve made peace with whatever god you worship.', 'Prepare youself for oblviion!']],
  },
  smashMachine2: {
    1: ['', ['*huff*', '*huff* *huff*', '*huff* *huff* *huff*', 'It\'s dead.', 'That felt pretty good, but it didn\'t jog your memory at all.', 'Now that that\'s out the the way, you can move on to figuring out where the hell you are.']],
  },
  explore: {
    1: ['', ['Whatever this place is, it seems to be completely abandoned.', 'You\'re all alone... aside from those monsters, that is.']],
    2: ['Claire', ['Sweet.']],
    3: ['', ['Wait, what are you thinking? You\'re probably going to die here.', 'You need to find a way out of this place ASAP.']],
  },
  mutinyExit: {
    1: ['Claire', ['Umm, hello?']],
    2: ['', ['You\'re pretty sure you just heard one of those mechanical doors open and close nearby.', 'What is this feeling? A desire to come in contact with another human being?!', 'You guess the temporary supension of your social anxienty is just one of the benfits of the adrenaline rush currently propelling you forward.']],
  },
  mutiny1: {
    1: ['Spiky Haired Girl', ['Oh good, your\'re finally done being dead.', 'I was just about to go check back up on you.']],
    2: ['Claire', ['Umm, do I know you?']],
    3: ['Spiky Haired Girl', ['Not really, I just found you frozen in here and figured I\'d do you a solid and  wake you up.', 'Good thing I found you when I did. This place looks about ready to collapse.', 'So, what\'s your deal? Do something that pissed your colleagues off enough for them to leave you frozen at the bottom of the ocean?']],
    4: ['', ['*Did* you piss someone off that badly? That does sounds vaguely like something you\'d do.', 'Let\'s face it, however you ended up in that machine, it was almost certainly your own damn fault.']],
    5: ['Spiky Haired Girl', ['Oh yeah, I guess I should probably introduce myself!', 'Mutiny, at your service!']],
    6: ['Claire', ['...']],
    7: ['Mutiny', ['...you know, as in the capital offense?']],
    8: ['', ['Shit, she\'s still waiting for a response, isn\'t she?', 'Will she really buy the whole amnesia thing?', 'Come on brain, think. How should you handle this?']],
    9: ['', ['options', ['Tell a pointless and unconvincing lie.', 'Say something you\'ll instantly regret.', 'Pretend to be mute.']]]
  },
  mutiny1A:{
    1: ['', ['"Wow. Thanks, brain, what would I ever do without you?"']],
    2: ['Claire', ['Umm, yeah. You\'re right, I was frozen because I pissed off the wrong people.', 'The world just wasn\'t ready for my research on...', 'umm...', 'Ultra Wallup Siblings hitboxes.']],
    3: ['', ['You have no idea why you just said that.', 'It\'s the sort of lie that provides you with no tangible benefits and will collapse at the faintest sliver of scrutany.', 'Actually, that sounds pretty on-brand for you.']],
    4: ['Mutiny', ['Hmmm...', 'Sounds legit.', 'What\'s your name?']],
    5: ['', ['You can still salvage this dialogue!', 'Let\'s see, the optimal way to respond is clearly...']],
    6: ['', ['options', ['They call me "High Treason".', 'I\'m the woman with no name.']]]
  },

  mutiny1AA:{
    1: ['', ['"Shut up, brain. I\'ll do this without you if you\'re going to be like that."']],
    2: ['Claire', ['Umm, yeah. My name is Claire.', 'The truth is, I don\'t remember how I got here... wherever "here" is, exactly.', 'I can remember pretty much everything else about myself though...']],
    3: ['', ['Regrettably.']],
    5: ['Mutiny', ['Short-term memory loss is a pretty normal side effect of the freezing process.', 'Your were pretty much brought back from the dead! It\'s not surprising you\'d lose a few things in the process.']],
    6: ['', ['Shit. How much of yourself did you lose?', 'Sure, there are the holes in your memory *that you know of*, but what about gaps that you *aren\'t even aware of*?']],
    8: ['Mutiny', ['As for where "here" is, this is an offshore research facility. Or rather, an underwater lab directly underneath one.', 'Needle\'s Eye maintains a bunch of these around the world.', 'This one\'s been out-of-service for a while though.']],
    9: ['Claire', ['Wait, did you just say "Needle\'s Eye"?', "As in that weird prosperity cult?"]],
    10: ['Mutiny', ["Yeah, is it really all that surprising? What *aren\'t* they involved with?", "Hmm, I guess the version you'd be familiar with operated a lot less openly..."]],
    11: ['', ['Not is probably *not* a good time to get into your personal history with those weirdos.']],
    12: ['Claire', ['...hold on, you said this place has been abandoned for a while, right?', '...how long exactly? How long was I frozen?']],
    13: ['Mutiny', ['Man, good question. What year *is* it?', 'Hold on a sec, I tend to lose track of this sort of thing.']],
  },
  mutiny1AA:{
    1: ['', ['"Shut up, brain. I\'ll do this without you if you\'re going to be like that."']],
    2: ['Claire', ['Umm, yeah. My name is Claire.', 'The truth is, I don\'t remember how I got here.', 'I can remember pretty much everything else about my life...']],
    3: ['', ['Regrettably.']],
    4: ['Claire', ['...but nothing about how I ended up here. Wherever exactly "here" is.']],
    5: ['Mutiny', ['Short-term memory loss is a pretty normal side effect of the freezing process.', 'Your were pretty much brought back from the dead! It\'s not surprising you\'d lose a few things in the process.']],
    6: ['', ['Shit. How much of yourself did you lose?', 'Sure, there are the holes in your memory you know of, but what about gaps that you aren\'t even aware of?']],
    7: ['Mutiny', ['...mention your capsule looked like it had been retrofitted from an earlier model.', 'The older versions were *way* harsher than the newer ones.']],
    8: ['Mutiny', ['As for where "here" is, this is an offshore research facility. Or rather, an underwater lab directly underneath one.', 'The Needle\'s Eye corporation maintains a bunch of these around the world.', 'This one\'s been out-of-service for a while though, as I\'m sure you\'ve already guessed.']],
    9: ['Claire', ['Wait, did you just say "Needle\'s Eye"?', "As in the New Age cult?"]],
    10: ['Mutiny', ["Yeah, is it really all that surprising? What *aren\'t* they involved with?", "Hmm, I guess the version you'd be familiar with operated a lot less openly though..."]],
    11: ['', ['Not is probably *not* a good time to get into your personal history with those bastards.']],
    12: ['Claire', ['...hold on, you said this place has been abandoned for a while, right?', '...how long exactly? How long have I been frozen?']],
    13: ['Mutiny', ['Man, good question. What year *is* it?', 'Hold on a sec, I tend to lose track of this sort of thing.']],
  },
  mutiny1B:{
    1: ['', ['"Wow. Thanks brain, what would I ever do without you?"']],
    2: ['Claire', ['Wait, what sort of name is "Mutiny"? Are you like a pirate-themed stripper or something?', 'I knew a girl back in college who went by "Anthrax"...']],
    3: ['', ['Yeah, you shold probably stop talking now.']],
    4: ['Mutiny', ['Thanks! It\'s a pretty cool name, isn\'t it?', 'How about you, but what\'s your name?']],
    5: ['', ['She didn\'t even react?! You can still salvage this dialogue!', 'Let\'s see, the optimal way to respond is clearly...']],
    6: ['', ['options', ['Antharx II.', 'Okay, but seriously, what kind of name is "Mutiny"?']]]
  },
  mutiny1BA:{
    1: ['', ['"Shut up, brain. I\'ll do this without you if you\'re going to be like that."']],
    2: ['Claire', ['Umm, yeah. My name is Claire.', 'The truth is, I don\'t remember how I got here.', 'I can remember pretty much everything else about my life...']],
    3: ['', ['Regrettably.']],
    4: ['Claire', ['...but nothing about how I ended up here. Wherever exactly "here" is.']],
    5: ['Mutiny', ['Short-term memory loss is a pretty normal side effect of the freezing process.', 'Your were pretty much brought back from the dead! It\'s not surprising you\'d lose a few things in the process.']],
    6: ['', ['Shit. How much of yourself did you lose?', 'Sure, there are the holes in your memory you know of, but what about gaps that you aren\'t even aware of?']],
    7: ['Mutiny', ['...mention your capsule looked like it had been retrofitted from an earlier model.', 'The older versions were *way* harsher than the newer ones.']],
    8: ['Mutiny', ['As for where "here" is, this is an offshore research facility. Or rather, an underwater lab directly underneath one.', 'The Needle\'s Eye corporation maintains a bunch of these around the world.', 'This one\'s been out-of-service for a while though, as I\'m sure you\'ve already guessed.']],
    9: ['Claire', ['Wait, did you just say "Needle\'s Eye"?', "As in the New Age cult?"]],
    10: ['Mutiny', ["Yeah, is it really all that surprising? What *aren\'t* they involved with?", "Hmm, I guess the version you'd be familiar with operated a lot less openly though..."]],
    11: ['', ['Not is probably *not* a good time to get into your personal history with those bastards.']],
    12: ['Claire', ['...hold on, you said this place has been abandoned for a while, right?', '...how long exactly? How long have I been frozen?']],
    13: ['Mutiny', ['Man, good question. What year *is* it?', 'Hold on a sec, I tend to lose track of this sort of thing.']],
  },
  mutiny1BB:{
    1: ['', ['"Shut up, brain. I\'ll do this without you if you\'re going to be like that."']],
    2: ['Claire', ['Umm, yeah. My name is Claire.', 'The truth is, I don\'t remember how I got here.', 'I can remember pretty much everything else about my life...']],
    3: ['', ['Regrettably.']],
    4: ['Claire', ['...but nothing about how I ended up here. Wherever exactly "here" is.']],
    5: ['Mutiny', ['Short-term memory loss is a pretty normal side effect of the freezing process.', 'Your were pretty much brought back from the dead! It\'s not surprising you\'d lose a few things in the process.']],
    6: ['', ['Shit. How much of yourself did you lose?', 'Sure, there are the holes in your memory you know of, but what about gaps that you aren\'t even aware of?']],
    7: ['Mutiny', ['...mention your capsule looked like it had been retrofitted from an earlier model.', 'The older versions were *way* harsher than the newer ones.']],
    8: ['Mutiny', ['As for where "here" is, this is an offshore research facility. Or rather, an underwater lab directly underneath one.', 'The Needle\'s Eye corporation maintains a bunch of these around the world.', 'This one\'s been out-of-service for a while though, as I\'m sure you\'ve already guessed.']],
    9: ['Claire', ['Wait, did you just say "Needle\'s Eye"?', "As in the New Age cult?"]],
    10: ['Mutiny', ["Yeah, is it really all that surprising? What *aren\'t* they involved with?", "Hmm, I guess the version you'd be familiar with operated a lot less openly though..."]],
    11: ['', ['Not is probably *not* a good time to get into your personal history with those bastards.']],
    12: ['Claire', ['...hold on, you said this place has been abandoned for a while, right?', '...how long exactly? How long have I been frozen?']],
    13: ['Mutiny', ['Man, good question. What year *is* it?', 'Hold on a sec, I tend to lose track of this sort of thing.']],
  },
  mutiny1C:{
    1: ['', ['Hold up. Wouldn\'t this whole "human interaction" thing be a lot easier if you didn\'t have to say anything?', 'That\'s it! This is your chance to reinvent yourself as a cool stoic badass...']],
    2: ['Claire', ['...']],
    3: ['Mutiny', ['...']],
    4: ['Claire', ['...']],
    5: ['Mutiny', ['..?']],
    6: ['', ['...that is, if you hadn\'t runied it by opening your big mouth earlier.', 'Congraduations, now you\'re just going to come across as an awkald weirdo.']],
    7: ['Mutiny', ['I get it. Still too awed by the immenssity of presense to speak, huh?', 'Don\'t worry about it, it\'s something I\'ve learned to deal with.', 'Can you at least tell me your name?']],
    8: ['', ['You\'ve got this...', 'Your name...', 'The optimal way to respond is clearly...']],
    9: ['', ['options', ['They call me "High Treason".', 'Double down on the mute thing. It\'ll defiently work this time.']]]
  },
  mutiny1CA:{
    1: ['', ['"Shut up, brain. I\'ll do this without you if you\'re going to be like that."']],
    2: ['Claire', ['Umm, yeah. My name is Claire.', 'The truth is, I don\'t remember how I got here.', 'I can remember pretty much everything else about my life...']],
    3: ['', ['Regrettably.']],
    4: ['Claire', ['...but nothing about how I ended up here. Wherever exactly "here" is.']],
    5: ['Mutiny', ['Short-term memory loss is a pretty normal side effect of the freezing process.', 'Your were pretty much brought back from the dead! It\'s not surprising you\'d lose a few things in the process.']],
    6: ['', ['Shit. How much of yourself did you lose?', 'Sure, there are the holes in your memory you know of, but what about gaps that you aren\'t even aware of?']],
    7: ['Mutiny', ['...mention your capsule looked like it had been retrofitted from an earlier model.', 'The older versions were *way* harsher than the newer ones.']],
    8: ['Mutiny', ['As for where "here" is, this is an offshore research facility. Or rather, an underwater lab directly underneath one.', 'The Needle\'s Eye corporation maintains a bunch of these around the world.', 'This one\'s been out-of-service for a while though, as I\'m sure you\'ve already guessed.']],
    9: ['Claire', ['Wait, did you just say "Needle\'s Eye"?', "As in the New Age cult?"]],
    10: ['Mutiny', ["Yeah, is it really all that surprising? What *aren\'t* they involved with?", "Hmm, I guess the version you'd be familiar with operated a lot less openly though..."]],
    11: ['', ['Not is probably *not* a good time to get into your personal history with those bastards.']],
    12: ['Claire', ['...hold on, you said this place has been abandoned for a while, right?', '...how long exactly? How long have I been frozen?']],
    13: ['Mutiny', ['Man, good question. What year *is* it?', 'Hold on a sec, I tend to lose track of this sort of thing.']],
  },
  mutiny1CB:{
    1: ['', ['"Shut up, brain. I\'ll do this without you if you\'re going to be like that."']],
    2: ['Claire', ['Umm, yeah. My name is Claire.', 'The truth is, I don\'t remember how I got here.', 'I can remember pretty much everything else about my life...']],
    3: ['', ['Regrettably.']],
    4: ['Claire', ['...but nothing about how I ended up here. Wherever exactly "here" is.']],
    5: ['Mutiny', ['Short-term memory loss is a pretty normal side effect of the freezing process.', 'Your were pretty much brought back from the dead! It\'s not surprising you\'d lose a few things in the process.']],
    6: ['', ['Shit. How much of yourself did you lose?', 'Sure, there are the holes in your memory you know of, but what about gaps that you aren\'t even aware of?']],
    7: ['Mutiny', ['...mention your capsule looked like it had been retrofitted from an earlier model.', 'The older versions were *way* harsher than the newer ones.']],
    8: ['Mutiny', ['As for where "here" is, this is an offshore research facility. Or rather, an underwater lab directly underneath one.', 'The Needle\'s Eye corporation maintains a bunch of these around the world.', 'This one\'s been out-of-service for a while though, as I\'m sure you\'ve already guessed.']],
    9: ['Claire', ['Wait, did you just say "Needle\'s Eye"?', "As in the New Age cult?"]],
    10: ['Mutiny', ["Yeah, is it really all that surprising? What *aren\'t* they involved with?", "Hmm, I guess the version you'd be familiar with operated a lot less openly though..."]],
    11: ['', ['Not is probably *not* a good time to get into your personal history with those bastards.']],
    12: ['Claire', ['...hold on, you said this place has been abandoned for a while, right?', '...how long exactly? How long have I been frozen?']],
    13: ['Mutiny', ['Man, good question. What year *is* it?', 'Hold on a sec, I tend to lose track of this sort of thing.']],
  },
  //facility starts flooding
  mutiny2: {
    1: ['Mutiny', ["Dang, *that* didn't sound good.", "Man, this place wasn't supposed to fall apart for another few months.", "Did opening the Wound really put that much additional strain on it?.", "Yo, Claire, we need to get the hell out of here."]],
    2: ['Claire', ["How are we supposed to do that?"]],
    3: ['Mutiny', ['Just follow me for now.']],
  },
  //wound
  mutiny3: {
    1: ['Mutiny', ['Okay, route secured. We\'re good to go.']],
    2: ['Claire', ['Go where? What the hell is this thing?']],
    3: ['Mutiny', ['Our only way out.', 'Oh yeah, try sure to to think happy thoughts! See you on the other side!']],
  },

  //funeral
  funeral1: {
    1: ['???', ['Seriously, Claire? Not only do you show up over two hours late, but you\'re wearing *that*?', '*sign* I guess I shouldn\'t really be all that surprised, you really do take after my sister...']],
    2: ['Claire', ['Huh? Wait. What about the flooding lab?']],
    3: ['???', ["*sigh* ...and you're drunk too, aren't you?"]],
    4: ['', ['options', ["Hold on. *Am* I drunk?", '"Whaat are yoo talk\'n aboot. *hic* I\'m totttttally gooood."']]]
  },

  funeral1A: {
    1: ['', ["Okay, so maybe you're just a...", "...teeny", "...tiny", "...itsy", "...bitsy", "...completly shitfaced.", "You can't even remember how you got here in the first place.", "All you know is that whatever it was you were just dealing with was a million times less horrfying than *this*."]],
  },
  funeral1B: {
    1: ['', ["Okay, so maybe you're just a...", "...teeny", "...tiny", "...itsy", "...bitsy", "...completly shitfaced.", "You can't even remember how you got here in the first place.", "All you know is that whatever it was you were just dealing with was a million times less horrfying than *this*."]],
  },
  lucyFuneral: {
    1: ['Claire', ['Uhhhh. Heeey Lucy. Been a *hic* while, huh?']],
    2: ['Lucy', ['...']],
    3: ['', ['options', ["Appologise for negleting her for all these years.", "Comfort her and let her know you're here for her now.", "Say literly anything a funcational human being would in this situation."]]]
  },
  lucyFuneralA: {
    1: ['', ['... is what anyone who wasn\'t a complete garbage fire would have said in this situation.', 'Unforntently, you are not that person.', 'And now, without further ado, it\'s time to replay what you *actually* said for the ten thousanth time.']],
    2: ['Claire', ['So, umm, howz it going? You still into... um, horses? *hic* You still like horses, right?']],
    3: ['', ["You wish you could blame the alcohaol, but ultimatly all it does is make you more *you*.", 'In exchange for allowing you to temperarily see yourself a little less clearly, it lays your true essense bare for everyone else to see.']],
    4: ['Lucy', ['...sorry, I\'m kind of busy. I\'m been getting a ton of likes and new followers during the last few days, and I need to keep everyone updated.']],
    5: ['', ["You pray that you aren't one of the things she's posting about..."]],
    6: ['Claire', ['... umm, it was good to see you again.']],
    7: ['Lucy', ['Yeah...']],
  },
  lucyFuneralB: {
    1: ['', ['... is what anyone with the slightest shread of social grace would have said.', 'You are not that person. That is not what you said.', 'Even through this drunken haze, you can\'t help but replay what you *actually* said for the ten thousanth time.']],
    2: ['Claire', ['So, umm, howz it going? Watch any good anime lately?']],
    3: ['', ["You wish you could blame the alcohaol, but ultimatly all it does is make you more *you*.", 'In exchange for allowing you to temperarily see yourself a little less clearly, it lays your true essense bare for everyone else to see.']],
    4: ['Lucy', ['...sorry, I\'m kind of busy. I\'m been getting a ton of likes and new followers during the last few days, and I need to keep everyone updated.']],
    5: ['', ["You pray to the internet gods that you aren't one of the things she's posting about..."]],
    6: ['Claire', ['... umm, it was good to see you again.']],
    7: ['Lucy', ['Yeah.']],
  },
  lucyFuneralC: {
    1: ['', ['... is what anyone with the slightest shread of social grace would have said.', 'You are not that person. That is not what you said.', 'Even through this drunken haze, you can\'t help but replay what you *actually* said for the ten thousanth time.']],
    2: ['Claire', ['So, umm, howz it going? Watch any good anime lately?']],
    3: ['', ["You wish you could blame the alcohaol, but ultimatly all it does is make you more *you*.", 'In exchange for allowing you to temperarily see yourself a little less clearly, it lays your true essense bare for everyone else to see.']],
    4: ['Lucy', ['...sorry, I\'m kind of busy. I\'m been getting a ton of likes and new followers during the last few days, and I need to keep everyone updated.']],
    5: ['', ["You pray to the internet gods that you aren't one of the things she's posting about..."]],
    6: ['Claire', ['... umm, it was good to see you again.']],
    7: ['Lucy', ['Yeah.']],
  },
  lucyFuneral2: {
    1: ['Lucy', ['...']],
    2: ['', ['She\'s completly engrossed by whatever black magic she\'s casting with her phone (or is it the other way around?).', 'She clearly wants nothing to do with your shameful display out here in meatspace.']],
  },
  funeralOutside1: {
    1: ['', ['Finally outside.', 'Now to...', '...throw up in the bushes over there like a piece of complete guarbage.']],
  },
  funeralOutside2: {
    1: ['Claire', ['*blahhhhgggack*']],
  },
  funeralOutside3: {
    1: ['', ['...that feels a little better.', 'You\'re almost back to your normal baseline of awfulness.', 'At least no one saw you just now...']],
    2: ['???', ['Needed to get some distance from that room full of hypocrits as well?', 'Talking like they didn\'t hate her guts when she was alive, as if anyone would buy that charade.']],
    3: ['', ['Who the hell is this guy?', 'One of her boyfriends? Seems a little too classy for that...', 'Something about him is... wrong. Very wrong.']],
    4: ['???', ["You're wondering who I am, aren't you?", "I was a friend of your mother. An actual friend, not like the rest of those shameless pantimimers inside."]],
    5: ['', ["Your head is pounding, and you're pretty sure it isn't the aclcohol this time", "Just looking at this guy makes you feel like your head's about to split open."]],
    6: ['???', ["Well, I should get going.", "I'm glad I had the chance to finally meet you, Claire.', 'You do indeed take after her. Even moreso than your half-sister."]],
    7: ['', ['You can\'t move. You can\'t even speak. What\'s wrong with you?']],
  },
  funeralOutside4: {
    1: ['', ['Hold on... you finally remember. You remember everything! That guy, he\'s...']],
  },
  postFuneral: {
    1: ['', ['...finally home. Another miserable day at the warehouse.', 'You could really use a drink.. or two... or three.']],
  },
  //exit wound
  postWound: {
    1: ['', ['Huh? What about the memorial?']],
    1: ['', ['What just happened?', 'This place deosn\'t look like its falling apart at all.', 'Actually, it looks like its in way better shape then before.', 'Is that just your imagaination?']],
    2: ['Claire', ['Mutiny?!', '...']],
    3: ['', ['Well, looks like you\'re alone again. What a surprise.']],
  },
  //mutiny exit wound
  mutiny5: {
    1: ['Mutiny', ['Hey!', 'What do you know? Even with my head start, you still beat me here.', 'Guess it just goes to show you how distorted time is inside the Wounds...']],
    2: ['Claire', ['So, that *thing* was ...a wound? What does that even mean?']],
    11: ['Mutiny', ['Hmm, they\'re basically holes in the fabric of space/time.', 'Although some people go further and claim that they\'re holes in the fabric of reality itself, whatever that means.', 'Sorry! I don\'t really know how to describe them any better.', 'I\'m not an expert or anything. My knowledge is mostly practical, not theoretical.']],
    2: ['Claire', ['So, it\'s basically a wormhole? And we used it to travel to another similar facility?']],
    3: ['Mutiny', ['Nope. This is the same one, we just traveled back around five years in time.']],
    4: ['Claire', ['You\'re kidding, right?']],
    5: ['Mutiny', ['Completley serious. You wanted to know what year it was, right?', 'As of our most recent jump, it should be around 2045.']],
    6: ['Claire', ['That\'s... I\'ve been frozen for thirty years!? Shit, what happened to Lucy? I just completely abandoned her?']],
    7: ['', ['AGAIN.']],
    19: ['Mutiny', ['Someone from your time period?']],
    20: ['Claire', ['Yeah, my sister. Although I guess it\'s a little more complicated then that...', 'The point is that she was relying on me, and now she\'s...', 'I need to get back to 2020, can you send me through another Wound?']],
    21: ['Mutiny', ['That\'s... easier said then done.', 'Any given Wound only spans a finite amount of time.', 'Most are relatively "shallow" and can only take you a decade or so back, at the very most.', 'I\'m not sure there are any that could take you all the way back to 2020.', 'I mean, time travel weren\'t exactly a common occurance in your time period, was it?']], 
    7: ['', ['She has a point. If it was possible, wouldn\'t there be some sort of evidence of time travelers in your time period?', 'Either it\'s impossible for some reason, or there was some sort of massive cover-up.', 'Without knowing more about the history of time travel and the Wounds, you\'re pretty much completely in the dark...']],
    8: ['Claire', ['Damn it. It doesn\'t matter, I\'ll go back as far as I can, no matter how many of those things I need to travel through.']],
    9: ['Mutiny', ['Guess our goals are aligned for now. I need to deliver something to a client in 2040, so I can at least take you that far.']],
    7: ['', ['So she\'s some kind of corrier? Smuggler? spy?']],
    9: ['Mutiny', ['This is pretty much just a layover.', 'The deeper you travel into the past, the more enemgy required. Five years was the best we could do with the facility\'s power supply in the condition it was.', 'We should have more then enough power now, assuming we can reroute it to this room...', 'We should head over to the main power plant first.']],
  },

  mutiny6: {
    1: ['Mutiny', ['Sweet, it\'s still working. Corperate espenage, here I come.', 'Now, what were we talking about? Oh yeah, getting back to your time period.', 'Unfortently, most Wounds are fairly "shallow" and can only take you back a few years, a decade at best.', 'Even if we could go back further in this one, we\'d end up in the middle of an active and heavely guarded faclity.', 'Needle\'s Eye\'s mercs wouldn\'t hesitate to kill us on sight.', 'Ain\'t no one gonna miss a pair of time tarvelers, no matter how stunningly attractive they are.', 'Also, FYI, that was me complementing myself, not me hitting on you.', 'You\'ll defenly know when I\'m doing that.']],
    2: ['Claire', ['...thanks?', 'Anyway, if we can\'t take this Wound all the way back, can\'t we just go find another one.']],
    3: ['Mutiny', ['You\'re getting a little ahead of yourself. First we need to get out of this place.', 'It may be in better shape then before, but we still can\'t just walk out the door.', 'Needle\'s Eye sealed up this place *very* thurowly after they were done with it.']],
    4: ['Claire', ['So basically, this place is either sealed off or full of guards, depedning on the time period?', 'What options are we left with?']],
    5: ['Mutiny', ['There should be a brief window between when it was decomissioned and when the entrences were all sealed off.', 'My many illustreous sources have informed me that this window of opertunity should have occured aproximatly a year and a half ago.']],
    6: ['Claire', ['What are we waiting for, let\'s go.']],
    7: ['Mutiny', ['*sigh* again with the getting ahead of yourself. Chill out for a minite.', 'Opening the Wound requires a considerable amount of power, and this room doesn\'t seem to be receaving any right now.']],
    8: ['Claire', ['How is that even possible?', 'If the power was working for us in the future, shouldn\'t it have been working in the past?']],
    9: ['Mutiny', ['I don\'t know, the process of opeing a Wound involves sending a lot of energy back in time.', 'Most is absorbed by the Wound itself, but some "bleeds" out one the other side.', 'Maybe it fried the circut or soemthing?']],
    10: ['Claire', ['Well, I guess we should look around and try to find the source of the problem.', 'It\'s got to be easier to get around this place now that is isn\'t completely falling apart, right?']],
    11: ['Mutiny', ['I wouldn\'t get your hopes up.', 'Most of the secrity systems are probably in much better shape as well...', 'I\'ll see if I can shut any of them down from here.', 'Oh yeah, let me see your bracelet for a second.', '...', 'There we go. These things are all linked up to the facilitiy\'s central computer.', 'I should be able to track your status and location from here.', 'We can also talk to one another, although it looks like the bracelets can only revceave calls.', 'Let me know if you\'re in the mood for some more exposition.']],
  },
  //enter room 4 for the first time
  mutinyTalkComputer: {
    1: ['Mutiny', ['What\'s up, are you that thursty for exposition?']],
    2: ['', ['options', ['"My thurst for exposition is insatiable".', '"Nah, I\'m good."']]]
  },
  mutinyTalkComputerA: {
    1: ['Mutiny', ['In that case, what\'ll it be?']],
    2: ['', ['options', ['Ask about Needle\'s Eye.', 'Ask about the Wounds.', 'Ask Mutiny about herself.']]]
  },
  mutinyTalkComputerAA: {
    1: ['Mutiny', ['Where to start with Needle\'s Eye?', 'I guess their origin would be the logical starting point.', 'I guess I should preface this by saying that infomation on them is pretty hard to come acoss, especially in the future I come from.']],
    2: ['Mutiny', ['Like you said, they did originaly present themselves as some sort of religion.', 'Hosting seminars, publishing books, building outreach centers in major cities.', 'They apparen\'t got some pretty signficant celebberity endorcements.', 'I\'m sure you already have some idea about all of this though. Their membership peaked around 2020.']],
    3: ['Mutiny', ['Their beliefs were a random hodge-podge of prosperity theology, the law of attraction, ""wellness"", transhumanism, ancient aliens, and ']],
    1: ['Claire', ['I know, it was like some sort of bullshit signulariy, right?']],
    1: ['Mutiny', ['Haha, you sound like my grandfather.', 'He was a pretty hardcore Catholic and had a pretty low opinion of all that new age stuff.', '"People have become blind to both the presene of the divine and their own true nature."', '"Mammon filled their eyes with molten gold while they continuously cried out \"More!\" \"More!\""']],
    1: ['Claire', ['Damn, that\'s intense.', 'Lucy would have probably liked her religion classes a lot more if someone like your gradfather had been teaching it."']],
    1: ['Mutiny', ['Don\'t get me wrong, he wasn\'t all "fire and brimstone" or anything.', 'His deepest scorn was always reserved for the rich and powerful who took advantage of the vulnerable.', 'He was a weird guy, it was almost like he\'d been born in the wrong centry or something.']],
    1: ['Mutiny', ['Back to Needle\'s Eye, the whole religion they constrcuted was most likely just a cover.', 'It allowed them to buy up property around the world and take in substancial "donations" from major public figures without drawing too much suspican.']],
    1: ['Mutiny', ['Their true purpose was to take control of the Wounds, and to use the information and technology they aquired from the future to dominate global markets.']],
    1: ['Mutiny', ['They probably could have become a superpower in their own right, but they were mostly content playing the role of kingmaker and vying for the ']],
    1: ['Mutiny', ['Their senior leadership has always been steeped in mysetry.', 'The Board serve as the untimate. They\'re really more like a secret councel then a concentional board though.']],
    1: ['Claire', ['If the Illuminati didn\'t exist, it would be neccsiary for mankind to create them?']],
    1: ['Mutiny', ['Yeah, something like that. Maybe they intentionally imitated consepacy theories in the same way they imitated new age religions.', 'Anyway, the Board have ultimate power, but the President is the one who handles most of the actual running of the company.']],
    1: ['Claire', ['The President\'s identity has to be public knowledge, right?']],
    1: ['Mutiny', ['Well, his name is at least. President Wakefield.']],
    1: ['', ['That name...', 'Why does it seem so familar? ...so ominous?', 'You\'re pretty sure you never heard the name before.', 'Is it just his connection to Needle\'s Eye?']], 
    1: ['Mutiny', ['Beyond that, it\'s incredbaly diffictlt to find any information on the guy. There are plenty of rumors though.', 'He\'s said to be some sort of terrifying soroccer who see the future and even control people with his mind.']],
    1: ['Claire', ['The "seeing the future" part can be explained by the Wounds, but the "mind control" part can\'t be real, right?']],
    1: ['Mutiny', ['Around a decade ago, there was some sort of internal power struggle that resulted in a purge of a number of executives within the company.', 'And I do mean a literal purge, these people weren\'t fired with generous severnece packages.', 'They experenced aa differnt kind of "severnce" if you catch my drift.']],
    1: ['Claire', ['So they were killed?', 'What does that have to do with the President having psychic powers or whatever.']],
    1: ['Mutiny', ['All of them killed themselves in very public and very gruesum ways.', 'These deaths all occured within seconds of one another across multiple cities throughout the world.', 'They all moved mechanically, as if they were being controled to by some unseen force.', 'None of them spoke, but many attemoted to scream through tighly clenched mouths.', 'It was a clear message to anyone who might stand in the President\'s way.']],
    1: ['Claire', ['Well, I guess I understand why people are be so hesitant to talk abiut the guy.', 'Maybe they couldn\'t even if they wanted to.']],
    1: ['Mutiny', ['...and, that\'s about it.']],
  },
  mutinyTalkComputerB: {
    1: ['Mutiny', ['Let me know if you change your mind.', 'This is actually, like, super boring.']],
  },

  mutinyKeycard: {
    1: ['Claire', ['Okay, it\'s on. Now what?']],
    2: ['Mutiny', ['Oh, just step into the energy field.']],
    3: ['Claire', ['Of course, silly me.', 'Do you seriously expect me to just walk into that thing!?']],
  },
  //after picking up phone
  specialRoom1: {
    1: ['???', ['Hello, Claire. We\'ve been waiting.']],
    2: ['Claire', ['What\'s going on? I was supposed to end up in a different version of that lab.']],
    3: ['???', ['Oh, you will. This is just... a layover of sorts.', 'A lobby that exists outside of the normal flow of time.', 'Don\'t worry, we\'ll let you go once our chat is finished.']],
    4: ['Claire', ['What\'s with the dopplegengar shit? Who exactly are you?']],
    5: ['???', ['A ghost, or rather a congregation of ghosts.', 'We are the echos of your countless doomed futures.', 'You are the one survivor. Our last link to the world of the living.']],
    6: ['Claire', ['I don\'t really get it. What do you want from me?']],
    7: ['???', ['A future.', 'You were one of the many humans blessed with the power of Entanglemnet. In short, the ability to tap into memories and draw power from other iterations of yourself in paralell timelines.', 'Unfortently, by the time humanity learned to harness this power, it was already too late to change our fate.', 'It was for this reason that you were sent back into the past, in the hope that you would be able to use this power to create a new future for humanity.']],
    8: ['Claire', ['Save humanity from what?']],
    9: ['???', ['The Fracture.', 'A catastrophy that frayed what was once a single timeline into countless diverging threads.', 'Threads that now intresect and tangle, and even twist backwards onto themselves.', 'In short Claire, we\'re all fucked.']],
    10: ['Claire', ['And you expect me to stop this thing?']],
    11: ['???', ['No, there\'s no stopping it.', 'The only reason you were able to travel to the past in the first place is because it had already occured.', 'You may, however, still be able to meand the damage that it did.']],
  },
  //return to special area
  specialRoom2: {
    1: ['Claire', ['This place again?.', 'What do you want now, shadow?', '...', '...shadow?']],
  },
  getCryostat: {
    1: ['Claire', ['I guess I should leave my old one behind like I did with the keycard.', 'I don\'t know exactly what a time pardox entails, but I\'d rather not find out.']],
  },
  //post boss
  blaine1: {
    1: ['???', ['Impressive work. Sending that monster back in time to destroy the base for you.', 'I\'m afraid that I just can\'t compete when it comes to laying waste to Needle\'s Eye\'s infrastructure...', 'My KILL COUNT on the other hand...']],
    2: ['Claire', ['Huh, is this taticool bro another time traveler?']],
    3: ['Tacticool', ['Ah, I see. My mistake, you aren\'t *her*.', 'Well, this is a bit alkward. I know all about you, but I suppose you have no idea who I am.']],
    4: ['Claire', ['What are you talking about?']],
    5: ['Tacticool', ['Hmm, I suppose it would be more accurate to say that I know who you will become. ...or at least who you *could* potentally become, in a diferent timeline.', 'I\'m quite well aquanted with another version of yourself, one who arived here from a *different* future a number of years ago.']],
    6: ['', ['..how "well aquanted" are we talking about here?', 'You *really* hope he doesn\'t mean a physical relationship. Avoiding people you\'ve slept with on single time axis is hard enough...', 'Besides, would you really go for a guy like this? Is your taste in men really that bad?', '*sigh*, you know full well what the answer to that question is.']],
    7: ['Tacticool', ['In fact, that other you gave me this scar as a keepsake.', 'She was one of the fearcest opponents I ever fought...']],
    8: ['Claire', ['Phhew, so it was just some sort of rivalry thing.']],
    9: ['Tacticool', ['...yet the physical scars she left me with pale in comaraison to the ones she left on my heart. She was an even fearser lover then she was a fighter...']],
    8: ['', ['Gah! You knew it...', 'Although, "fearce" doesn\'t really sound much like you, in either the streets *or* the sheets.', 'Could this "other you" really have been so different?']],
    9: ['Tacticool', ['We each waged our war against Needle\'s Eye in our own way, sometimes fighting side-by-side and sometimes in bitter opposition.', 'Alas, in the end, Needle\'s Eye managed to take her life. Apparenty, the President saw to it personally.']],
    9: ['Tacticool', ['I sensed your presence here, and thought for a moment that she had somehow returned.', 'No matter, prehaps I can still rekindle that bitter rivalry with you.', 'I have high expectaions, so try not to disspaoint me.']],
    10: ['Claire', ['Hold on, this is all to sudden. I don\'t think I\'m ready to become mortal enemies just yet. Maybe buy a girl a drink first?']],
    8: ['', ['Now is probably a good time to start slowly backing away while looking for an escape route.']],
    3: ['Tacticool', ['Prehaps you\'re right. I suppose it may be better to take things slow.', 'Even if we fought now, there would be no *passion* to it.', 'Very well, than I shall win your undying hatered the old fashonded way.', 'You can call me Blaine.', 'Oh, how I long to hear you scream my name in the midst of a murderous rage one again!']],
    8: ['Claire', ['Hi Blaine, nice to meet you. You know, I\'d love to keep talking, but I really have to get going...']],
  },
  mutiny8: {
    1: ['Mutiny', ["Nice going, looks like the power's working again."]],
    2: ['Claire', ["Yeah, I kind of had a weird experence though.", "I ran into some sort of time stalker who seemed to know my future self."]],
    3: ['Mutiny', ["."]],
  },
  //after blaine kills monsters
  blaine2: {
    1: ['Blonde Guy', ['Now, where were we?', 'Ah, yes. Our long awaited rematch.', 'I still owe you for this scar, after all.', 'Now, let us begin!']],
    2: ['Claire', ['Umm... what?', 'Sorry, but I think you have the wrong person.']],
    3: ['Blonde Guy', ['...']],
    4: ['Claire', ['...']],
    5: ['Blonde Guy', ['I see.',  'This is still our first meeting from *your* perspective.', 'I suppose that there\'s no point in challenging you now.', 'The pitiful fight you\'d put up would hardly justify the risk of creating a time paradox...', 'You\'ve wandered quite far, are you able to get out of here on your own?']],
    6: ['Claire', ['Honistly I have no clue how I even got here in the first place...']],
    7: ['Blonde Guy', ['Well, in that case I\'d be happly to assist you.', 'For the sake of the timeline, of course.']],
    8: ['Claire', ['Wait, so you want to help me now?', 'Pick a lane, dude.']],
    9: ['Blonde Guy', ['There\'s no bad blood between us.', 'Not yet.', 'The least I can do escort you home.']],
  },
  //blaine opens warp
  blaine3: {
    1: ['Claire', ['Woah!']]
  },
  //return to branch 1
  blaine4: {
    1: ['Claire', ['I\'m back?', 'Thanks, I guess.']],
    2: ['Blonde Guy', ['No need for thanks.', 'I look foward to meeting you again for the third and final time.']],
  },
  mutiny9: {
    1: ['Mutiny', ['Hey, you\'re back!', 'Did you get it?']],
    2: ['Claire', ['Yeah, I got it.', 'I had to take a pretty major detor to get back though.', "I can tell you about it later, right now I just want to get out of here."]],
    3: ['Mutiny', ['For sure.', 'Head back to the room where we met up before.', 'The door to the west should work as a shortcut.']],
  },
}

export const flavorText = {
  keyCard1: ['You found a keycard!', 'It\'s labeled: "Security Clearance: Level 1".'],
  keyCard1B: ['You found a keycard!', 'Wait, isn\'t this the same one?'],
  keyCard2Old: ['You found a keycard...', 'Well, what\'s left of one, at least.'],
  keyCard2: ['You found a keycard!', 'It\'s labeled: "Security Clearance: Level 2". You finally got it! Time to get out of here.'],
  Taser: ['You found the Taser Gun!', 'A weapon that fires bolts of electricty. It can also be used to activate electric switches.'],
  Cryostat: ['You found the Cryostat!', 'A handhold device that uses the same quick-freeze technology utilized by facilty\'s the cryo chambers.'],
  Cryostat2: ['You found the Cryostat ...again.', 'You kind of doubt you\'re going to get.'],
  dash: ['New skill unlocked: Supercollider', 'Use to quickly dash in any direction. MP will automatically regenerate over time.', 'While dashing, you are immune to energy based attacks. However, you are still vulnerable to projectiles and melee attacks.'],
  clone: ['New kill unlocked: Superposition', 'Use to create a copy of yourself, activating it again will swap places with your copy. Touch your copy to cancel the ability.'],
  bracelet: ['You found a Smart Bracelet!', 'Use [Enter] to bring up the menu. This device will also track your vital signs and allow you to access computer terminals.'],
  pipe: ['You found an Old Pipe!', 'Tap the arrow keys to attack or hold them to guard against bullets and melee attacks. Energy based attacks such as lasers cannot be blocked.']
}

