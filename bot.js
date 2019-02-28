const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`مذاكرة`,"http://twitch.tv/Dream")
client.user.setStatus("#IT WORKS!!")
});



client.login("NDIyNzI5MjU1ODI3Mjc1Nzc2.D1gg1w.hZxgucitIZbtQ-ajQaarvjom17A");// لا تغير فيها شيء
