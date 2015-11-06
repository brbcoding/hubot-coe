module.exports = function (robot) {
  robot.respond(/.*/, function (msg) {
    console.log(msg.message.user.name)
    if(msg.message.user.name.toLowerCase() === "slackbot") {
      msg.send('stfu');
    }
  });
}