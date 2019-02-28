const Discord = require('discord.js');
const client = new Discord.Client();
const aprefix ="!";
const dev = ["422729255827275776"];

client.on('message', message => {
    var arg = message.content.split(` `).slice(1).join(' ');
      if (!dev.includes(message.author.id)) return;
      
  if (message.content.startsWith(aprefix + 'setg')) { 
    client.user.setGame(arg);
      message.channel.send(`**✅   ${arg}**`)
  } else 
  if (message.content.startsWith(aprefix + 'setw')) {
  client.user.setActivity(arg, {type:'WATCHING'});
      message.channel.send(`**✅   ${arg}**`)
  } else 
  if (message.content.startsWith(aprefix + 'setl')) {
  client.user.setActivity(arg , {type:'LISTENING'});
      message.channel.send(`**✅   ${arg}**`)
  } else 
  if (message.content.startsWith(aprefix + 'stream')){
    client.user.setGame(arg, "https://www.twitch.tv/bot");
      message.channel.send(`**✅ ${arg} **`)
  } else
  if (message.content.startsWith(aprefix + 'setname')) { //لتغير اسم البوت 
  client.user.setUsername(arg).then
      message.channel.send(`Changing The Name To ..**${arg}** `)
} else

if (message.content.startsWith(aprefix + 'setavatar')) { //لتغير صورة البوت 
  client.user.setAvatar(arg);
    message.channel.send(`تم تغير صورة البوت لي :**${arg}** `);
} else

if (message.content.startsWith(aprefix + 'setonline')) { //لتغير حالت البوت لي  online
client.user.setStatus("online")
    message.channel.send(`**تم تغير حالت البوت لي online** `);
} else
    
if (message.content.startsWith(aprefix + 'setdnd')) { //~~~ dnd
client.user.setStatus("dnd")
    message.channel.send(`**تم تغير حالت البوت لي dnd** `);
} else
    
if (message.content.startsWith(aprefix + 'setidle')) { //~~~ idle
client.user.setStatus("idle")
    message.channel.send(`**تم تغير حالت البوت لي idle** `);
} else

if (message.content.startsWith(aprefix + 'setoffline')) { //~~~ offline
client.user.setStatus("offline")
    message.channel.send(`**تم تغير حالت البوت لي offline** `);
}
});

client.login('NDIyNzI5MjU1ODI3Mjc1Nzc2.D1gg1w.hZxgucitIZbtQ-ajQaarvjom17A')
