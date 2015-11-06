module.exports = function (robot) {
  robot.hear(/.*/, function (msg) {
    console.log(msg.message.user.name)
    if(msg.message.user.name.toLowerCase() === "slackbot") {
      robot.respond('stfu');
    }
  });
}