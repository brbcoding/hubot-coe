module.exports = function (robot) {
  robot.hear(/.*/, function (msg) {
    if(msg.message.user.name.toLowerCase() === "slackbot") {
      msg.respond('stfu');
    }
  });
}