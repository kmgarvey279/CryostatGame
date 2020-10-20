
export const roomNames = ['Makeshift Recovery Room', 'Storage Room', 'Warp Lab Access', 'Warp Lab', 'Cryo Lab', 'Shipping and Receiving Room', 'Xenobiology Lab', 'Core Access', 'The Core']
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
  tank1: { 1: ['Some sort of storage tank.', 'You can barely make out a human-like shape through the frosted glass.'] },
  tank2: { 1: ['Some sort of storage tank.', 'You can barely make out a human-like shape through the frosted glass.'] },
  tankE1: { 1: ['Some sort of storage tank.', 'There doesn\'t seem to be anything inside.', 'It feels... oddly familiar.'] },
  tankE2: { 1: ['Some sort of storage tank.', 'There doesn\'t seem to be anything inside.', 'It feels... oddly familiar.'] },
  tube: { 1: ['A tank containing some sort of weird... thing.', 'It seems to be alive, but it won\'t respond to anything you do.'] },
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

  zimGop: {
    1: ['It\'s a poster from the show... Ziltch and Gupo? Zorm and Garfunkle?.', 'You can\'t remember the name, Lucy was the one who put it up.', 'You\'ve only seen a few episodes, but you gathered that it\'s about cute characters wandering around a desert and carrying out genocides or something?']
  },
  bagel: {
    1: ['It\'s a poster from one of Lucy\'s favorite movies.', 'An ancient demon is accedenlty reserected as a bagel. Wacky hyjunks insue.', 'The film ends with the demon attempting to turn the enture universe into a giant sandwitch.', 'Lucy has very... unique tastes. To put it mildly.']
  },
  chared: {
    1: ['What a surprise, Lucy\'s watching "Charred" for the ten millionth time.', 'It\'s the story of a princess born with the power to control fire and her relationship with her sister.', 'She eventually comes to embrase her power, and goes on to reduce her kindom to ash.']
  },
  mutinyWindow1: {
    1: ['Spikey Haired Girl', ['Yo!', 'How goes it? You also scoping this place out for loot?']],
    2: ['Claire', ['options', ['(lie) Oh yeah, I\'m totally here for the sick loot.', 'Actually, I think I just woke up from a *very* long sleep...']]],
  },
  mutinyWindow1A: {
    1: ['Spikey Haired Girl', ['Cool, cool.', 'I figured you couldn\'t be security or anything from the way you were dressed.', 'Not that they really ever really patrol inside.']],
  },
  mutinyWindow1B: {
    1: ['Spikey Haired Girl', ['Oh yeah, I ran into a few of those cryo pods things.', 'They were all empty though.', 'Not too surprisiong, this place has been out of commision for a while. Some big disaster a while back.', 'Guess they missed someone when they were clearing out?']],
    2: ['Claire', ['Yeah, I guess. I don\'t really remember much about how I go in there in the first place.']],
  },
asa: {
    3: ['Spikey Haired Girl', ['Hmm, you aren\'t here on a salvage job?']],
    4: ['Claire', ['From what I can piece together, it seems like I was frozen in one of the pods around here.']],
    5: ['Spikey Haired Girl', ['Oh yeah, I ran into a few of those.', 'All empty though.', 'This place has been out of commision for a while, ya know?', 'Oh yea, I totally forgot to introduce myself!', 'The name\'s Mutiny.']],
    6: ['Claire', ['Oh, that\'s a... unique name.']],
    7: ['Mutiny', ['Thanks!', 'How about you, do you rememeber your name at least?']],
    8: ['Claire', ['It\'s Claire, I remember that much.', 'Now can you tell me more about where we are?']],
    9: ['Mutiny', ['Tell ya what, I\'ll explain as much as I can, but I need you to do me a favor.', 'Like I said, I\'m here on a salvage job.', 'Unfortenty, I can\'t make it any further without a keycard.', 'I considered just blowing the door open, but this place is just too structurally unsound to be worth the risk.']],
    10: ['Claire', ['So let me guess, the card you need is over on my side?']],
    11: ['Mutiny', ['Bingo. According to the security footage, it should be in the room directly east of here.', 'Finding it will benefit you as well. The only exit to this place is over on *my* side.']],
    12: ['Claire', ['Man, I have a lot of questions about all this.', 'I mean, you don\'t seem particuarly dangerous...']],
    13: ['Mutiny', [':(']],
    14: ['Claire', ['...but I don\'t like the idea of exploring this place without knowing more about it.']],
    15: ['Mutiny', ['Personally, I\'d be fine hanging out here and playing 20 questions with you, but I can\'t gurinetee how much longer the power is going to hold out.', 'I was only barely able to get it up and running again.', 'I can try to answer any queestions you have along the way though, it\'s not like I have much else left to do over here.']],
    16: ['Claire', ['Okay, fine. I guess I don\'t really have any better options.']],
    17: ['Mutiny', ['That\'s the spirit!']],
  },

  // [Phew, finally out of her sight. 
  // I know, being forced to think inside our own head is *hard*. Guess we really let those musctles atrophy. Anyway, stellular performance, as always. I think we played the role of wide-eyed fish-out-of-water pretty damn well', "Golly miss Mutiny, is time-travel really a thing?"],
  // No one asked you for your opinion.
  // Come on Claire, don't put all the blame on me. I wouldn't have been able to jump back in time if you did't open a channel for me in the first place. It takes two to timeloop. Err, actually just one I guess? We know want I mean.
  // I know, I know. These invasive loops aren't anyone's fault. We're just broken. No wonder they left us here.
  // don't play dumb, I know you know about loop-induced amnesia. even though I already said all the same things, I can't remmember any of it. those memories just don't stick until the "second time around"
  // yeah, yeah. some sort of human adaptation to 
  // dude, come on. don't talk about us like that.
  // you're one to talk, you just said our brain was screwed up a few seconds ago!
  // sorry. I'm trying.
  // yeah, I know. Are we done here?
  // In that much of a hurry to become me? I'm flattered. 
  // ha. ha. that joke stopped being funny after the first few thousand times
  // doesn't stop you from decidng to tell it 




  mutinyWindow2: {
    1: ['Mutiny', ['Come on, quit wasting time and get going.']]
  },
  sign1: { 1: ['Spacial and Interdimentional Research', 'Please check in with security guard on duty.'] },
  sign2: { 1: ['Xenobiology Lab', 'Please check your clothing and hair for any stowaways on your way out.'] },
  signCore: {1: ['Magmatic Power Plant Access.']},
  signWarp: {1: ['North: The Wound. West: Magmatic Power Plant Access.']},
  terminalOff: { 1: ['A computer terminal. It doesn\'t seem to be receiving any power.'] },
  spookyTerminal: { 1: ['A computer terminal. It doesn\'t seem to be receiving any power.'] },
  mapTerminal: {
    1: ['Downloading map data for this floor...'],
    2: ['Download successful.'],
  },
  terminal1: {
    1: ['Logging in...'],
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
    1: ['Report #32: More Failures'],
    2: ['Another round of failures. We were unable to revitalize a single specimen.'],
    3: ['I\'ve lost track of how many unfortenate worms we\'ve killed at this point.'],
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
  wakeUp: {
    1: ['Claire', ['Ouch, that\'s bright!', 'Just where am I? Is this some sort of hospital?']],
  },
  intercom1: {
    1: ['Intercom', ['Hey!']],
    2: ['Claire', ['(An intercom? That\'s weird, I would have guessed that this place was abandoned...)']],
    3: ['Intercom', ['Yeah, that\'s right, you with the antenna! I know you can hear me.']],
    4: ['Claire', ['...antenna?', 'Umm... hey there, mysterious voice! What do you want?']],
    5: ['Intercom', ['Sorry, but I can\'t hear anything you\'re saying, I only have visuals on my end.', 'If you want to talk, I\'m in the room to your north.', 'Getting the door open looks tough, but I\'m sure you can figure it out.', 'Good luck :)']],
    6: ['Claire', ['...', '(Hmmm, this pretty sketchy, but I can\'t pass up the chance to gather more information about this place.)']]
  },
  //enter room 7 for the first time
  mutiny1: {
    1: ['Spikey Haired Girl', ['Over here!']]
  },
  //examine tube after talking to mutiny
  mutinyBigTube: {
    1: ['Claire', ['So here\'s a question for you: what the hell is that *thing*?']],
    2: ['Mutiny', ['Oh, those things are pretty common out here. You\'ve probably run into some of the smaller ones already.', 'They\'re like, drawn to temporal distortions or something? I\'m not really sure.', 'That\'s a huge one though! Were the researchers here experimenting on it?']]
  },
  //exit room 7 after talking to mutiny
  mutiny2: {
    1: ['Claire', ['Hey, is that the card you were talking about?']],
    2: ['Mutiny', ['No, wrong color.', 'It should still be helpful though. Head over there and I\'ll deal with the power.']]
  },
  //approch belt in room 7
  mutiny3: {
    1: ['Mutiny', ['Just a second...']]
  },
  //collect keycard and pass back over belt
  mutiny4: {
    1: ['Mutiny', ['Sweet. Don\'t we make a great team?', 'Now, for your first question: "what is this place?"', 'The short answer is that, it\'s some sort of research facility.', 'Or rather, it *was* some sort of research facility, it\'s probably been abandoned for decades at this point.']],
    2: ['Claire', ['Does that mean I\'ve been frozen here the entire time?.', 'How did I get here in the first place, though?', 'Why did I suddenly wake up after all that time?']],
    3: ['Mutiny', ['Sorry, no idea how you ended up here.', 'As for why you just woke up, I did mess around with the system a lot when I first got here.', 'It\'s possible that I accidently triggered some sort of revitialization proicedure.', 'The two of us meeting seems like way too much of a conincidence otherwise.']],
    4: ['Claire', ['I guess there\'ll be time to worry about that later.', 'You said that was the short answer, but what\'s the long answer?', 'If I\'ve been here for decades, things must has changed an awful lot outside.', 'Just what year is it?']],
    5: ['Mutiny', ['...', 'The answer to that question is going to require a lot of exposition.', 'What do you say we save it for our next chat?']],
    6: ['Claire', ['Man, way to leave me hanging.', 'I guess it\'s fine. I\'ll try to make some more progress first.']],
  },
  //enter room 3 for the first time
  mutiny5: {
    1: ['Claire', ['Okay, I made it to the room with the card.', 'It\'s exposition time!']],
    2: ['Mutiny', ['Well, I guess a promise is a promise.', 'It\'s 2020.']],
    3: ['Claire', ['Huh? Is that supposed to be a joke? I was *born* in 2034.']],
    4: ['Mutiny', ['Hey, you can\'t say I didn\'t warn you that this topic was going to open a whole can of worms.', 'Or maybe I should say wormholes?',
      'First off, I should probably give you some more context on where we actually are.',
      'This building is one of many ruined structures jutting out of the great yawing abyss humanity has come to affectionately refer to as ExitWound .',
      'Here\'s a brilliantly illustrated depiction I painstaingly sketched for the sake of your eddifcation.']],
    5: ['Claire', ['...', 'Wow. A true masterpiece. No words could possibly do it justice.',
      'So... "ExitWound"? Is there an "entry wound" as well?']],
    6: ['Mutiny', ['The entry wound is pretty much synonymous with "the end of the fucking world".',
      'It’s the fatal wound that finally ends humanity. The last flash we see before the lights all go out forever.',
      'The Wound doesn\'t behave accoridng to the normal principles of cause-and-effect. It\'s the only explanation for .',
      'Imagine a bullet that shatters human civlization and then continues traveling backwards in time, dragging the final remnants of humanity into the past along with it.',
      'This building is one of those remnants.', 'As it so happens, I have yet another work of art that illustrates the basic principle.']],
    7: ['Claire', ['I know I should be focused on the whole end of the world thing, but that picture is really something else.', 'I guess the takeaway is that I\'m also a remenat of a doomed future?']],
    8: ['Mutiny', ['That about sums it up.']],
    9: ['Claire', ['One thing still doesn\'t make sense to me. If the ExitWound had already appeared by 2020, why don\'t I remember it at all?', 'I wasn’t great about paying attention to current events, but I kind of doubt I’d miss something like that.']],
    10: ['Mutiny', ['I\'m not sure. I\'m a grave robber, not a scientist.', 'What I can tell you is that the ruins scattered throughout the Exit Wound often reflect contradictory futures.', 'It\'s almost like someone mixed up a bunch of pieces from completely different puzzles. Some futures seem to be aware of the ExitWound, but others never mention it.']],
    11: ['Claire', ['Are there other people like me?', 'Refugees from the future?']],
    12: ['Mutiny', ['They\'re pretty rare, but there have been others.', 'Most appeared alongside the initial appearnece of the ExitWound about thirty years ago.', 'What do they call them again? Oh yeah, "Unshackled".', 'I guess the idea is that they\'re no longer bound by the constraints of time or something? Seems a little over-the-top, tbh.']],
    13: ['Claire', ['Wow, this is a *lot* to take in.', 'I think I\'m going to try and clear my head by focusing on that keycard for a bit.']],
    14: ['Mutiny', ['Affirmative. Good luck!']],
  },
  //get old keycard
  mutiny6: {
    1: ['Claire', ['Well, I got it.', 'It\'s in pretty bad shape though.']],
    2: ['Mutiny', ['Hmm, that might be a problem.', 'it\'s not surprsing though, this place is a delapedated wreak.', 'The liklihood of eveything being perfectly arranged for you to progress unimpeded is...', '...well, really freaking low.']],
    3: ['Claire', ['So what do we do now?', 'Should I just let those slime things put me out of my misery?']],
    6: ['Mutiny', ['I\'d suggest just drowning yourself...', '...that is, I didn\'t have a contengency plan.', 'Head to the next room and all will be made clear.']],
  },
  //enter room 4 for the first time
  mutiny7: {
    1: ['Claire', ['What is this place? The vibe here is way different.']],
    2: ['Mutiny', ['Your path forward. Or rather your path *backwards*.', 'It\'s time traveling time, baby!']],
    3: ['Claire', ['Seriously? *That\'s* your contigency plan?']],
    2: ['Mutiny', ['Umm... yes?', 'Don\'t worry about it, it\'s completly safe.', 'All you need to do is restore power to the machine and I should be able to upload the proper coodinates via your bracelet.', 'A decade or so should do it.']],

  },
  //activate machine in room 4 
  mutiny8: {
    1: ['Claire', ['Okay, it\'s on. Now what?']],
    2: ['Mutiny', ['Oh, just step into the energy field.']],
    3: ['Claire', ['Of course, silly me.', 'Do you seriously expect me to just walk into that thing!?']],
    4: ['Mutiny', ['Umm, yes?']],
    5: ['Claire', ['You\'re crazy! For all I know I\'ll be vaperized the moment I touch it.']],
    6: ['Mutiny', ['Well, Yeah. Of course you\'ll be vaporized the moment you touch it. I thought that part was pretty obvious.']],
    7: ['Claire', ['ㆆ _ ㆆ']],
    8: ['Mutiny', ['I don\'t know why you\'re being such a prude about it.', 'You just vaperized yourself at least a dozen times.', 'How do you think teleportation works, Claire? Magic?']],
    9: ['Claire', ['*sigh*', 'And you\'re sure this is definitly the only way?', 'Is blowing up the walls and risking a collapse really that bad of an option?']],
    10: ['Mutiny', ['It\'s not just about the risk of a collapse, something like that would also draw a lot of unwanted attention.', 'There are *way* worse things than those slimes you ran into lurking around here.', 'Not to metion the dickwads who "protect" this place.', '*Technically* my presence here isn\'t entirely legal, but I\'ll be damned if I\'m going to go along with those facists who think they own the future.', 'Anyway, once you\'re fiished over there, all you need to do is pass through the energy field again in order to return.', 'It\'s basically just a doorway.', 'Oh, one last thing. Once you cross over, you\'ll be one your own.', 
    'It\'s techninally possible to relay communications between worlds, but we don\'t have the nessicary hardware.',
    'One last thing: be sure to leave the that broken keycard behind after you grab the new one.', 'Don\'t want to cause a time paradox.']],
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
    1: ['Blonde Guy', ['So, we meet again.']],
    2: ['Claire', ['...']],
    3: ['Blonde Guy', ['Hmm, I suppose I should take care of these distrcations first.']],
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
  keyCard1: ['You found a keycard!', 'It\'s labeled: "Security Clearance: Level 1". This isn\'t the one Mutiny is looking for, but it should still be useful.'],
  KeyCard2Old: ['You found a keycard... or at least what\'s left of one.', 'It\'s labeled: "Security Clearance: Level 2". At least that\'s what you assume it would say if it was in better condition...'],
  keyCard2: ['You found a keycard!', 'It\'s labeled: "Security Clearance: Level 2". You finally got it! Time to get out of here.'],
  Taser: ['You found the Taser Gun!', 'A weapon that fires bolts of electricty. It can also be used to activate electric switches.'],
  Cryostat: ['You found the Cryostat!', 'A handhold device that uses the same quick-freeze technology utilized by facilty\'s the cryo chambers. Its effectivness seems to have degraded over time, but it should still get the job done.'],
  Cryostat2: ['You found the Cryostat!', 'It\'s still in peak condition.', 'Water will now remain frozen until you leave a room!'],
  dash: ['New skill unlocked: Supercollider', 'Use to quickly dash in any direction. MP will automatically regenerate over time.'],
  clone: ['New kill unlocked: Superposition', 'Use to create a copy of yourself, activating it again will swap places with your copy. Touch your copy to cancel the ability.'],
  bracelet: ['You found a Smart Bracelet!', 'In addition to tracking your vital signs, you can now use EnterKey to open the menu.'],
  pipe: ['You found an old pipe!', 'It\'s no sword of destiny, but it should get the job done.']
}

