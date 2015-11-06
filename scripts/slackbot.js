# Description:
#   Respond to Slackbot


var insults = [
  "lol u stoopid.",
  "Have you ever heard of the magical mythical beast of the working code??",
  "Boy, that was fuckin' dumb.",
  "Please: Learn. To. Code.",
  "Go back to excel u dum dum.",
  "Are you really stupid enough to install a module who's sole purpose is to insult you?",
  "Use the syntax, Luke.",
  "Next time, try making it work.",
  "Do you ever stop and think to yourself: 'How am I a developer?'. I'm thinking that for you right now!",
  "U dun goof'd.",
  "What is this? A syntax for ants?!",
  "WTF is this shit?",
  "Hey check your email, theres probably a nigerian prince you would be stupid enough to give your details to!",
  "I think you're really dumb.",
  "<insert generic insult here>",
  "Thats one small step for idiocy, and one giant leap for you.",
  "Maybe should eat before you code.",
  "Hey Bitch, The sewage treatment plant called - they want their shit back!",
  "Hopefully these insults aren't going over your head.",
  "Your code is bad and you should feel bad.",
  "I pity anyone who reads your codebase.",
  "I guess you have a lieral arts degree to go along with that stupidity.",
  "If you're motivated by failing code, do you gain weight just to feel the need to lose it?",
  "This isn't the stacktrace you're looking for.",
  "Bogosort is more efficient than this shite.",
  "If I had a penny for every time you printed a stacktrace, I would have all the pennies.",
  "Undefined like your mind.",
  "At least try to catch your errors.",
  "KThxBaii",
  "Can I put your code on www.reddit.com/r/shittyprogramming?",
  "Well, at least its not an infinite loop.",
  "Shit bro, fix your shit"
];

var names = [
  "Slackbot",
  "Slackshit",
  "Slacker",
  "Slacknot",
  "Shitbot"
];

module.exports = function (robot) {
  robot.hear(/.*/, function (msg) {
    if(msg.message.user.name.toLowerCase() === "slackbot") {
      msg.send(msg.random(names) + ': ' + msg.random(insults));
    }
  });
}