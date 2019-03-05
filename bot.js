const Discord = require('discord.js');
const client = new Discord.Client();
const aprefix ="!";
const dev = ["422729255827275776"];

client.on('message', message => {
    var arg = message.content.split(` `).slice(1).join(' ');
      if (!dev.includes(message.author.id)) return;
      
  if (message.content.startsWith(aprefix + 'ply')) { 
    client.user.setGame(arg);
      message.channel.send(`**✅   ${arg}**`)
  } else 
  if (message.content.startsWith(aprefix + 'wat')) {
  client.user.setActivity(arg, {type:'WATCHING'});
      message.channel.send(`**✅   ${arg}**`)
  } else 
  if (message.content.startsWith(aprefix + 'lis')) {
  client.user.setActivity(arg , {type:'LISTENING'});
      message.channel.send(`**✅   ${arg}**`)
  } else 
  if (message.content.startsWith(aprefix + 'str')){
    client.user.setGame(arg, "https://www.twitch.tv/bot");
      message.channel.send(`**✅ ${arg} **`)
  } else
  if (message.content.startsWith(aprefix + 'name')) { //لتغير اسم البوت 
  client.user.setUsername(arg).then
      message.channel.send(`Changing The Name To ..**${arg}** `)
} else

if (message.content.startsWith(aprefix + 'ava')) { //لتغير صورة البوت 
  client.user.setAvatar(arg);
    message.channel.send(`تم تغير صورة البوت لي :**${arg}** `);
} else

if (message.content.startsWith(aprefix + 'on')) { //لتغير حالت البوت لي  online
client.user.setStatus("online")
    message.channel.send(`**تم تغير حالت البوت لي online** `);
} else
    
if (message.content.startsWith(aprefix + 'dnd')) { //~~~ dnd
client.user.setStatus("dnd")
    message.channel.send(`**تم تغير حالت البوت لي dnd** `);
} else
    
if (message.content.startsWith(aprefix + 'idle')) { //~~~ idle
client.user.setStatus("idle")
    message.channel.send(`**تم تغير حالت البوت لي idle** `);
} else

if (message.content.startsWith(aprefix + 'off')) { //~~~ offline
client.user.setStatus("offline")
    message.channel.send(`**تم تغير حالت البوت لي offline** `);
}
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **ply** ' ,' **Playing** ')
.addField('     **wat**  ' ,' **Watching** ')
.addField('     **lis** ' , '**Listening**') 
.addField('     **str** ' , '**Streaming**') 
.addField('     **name** ' ,' **Change Name**')
.addField('     **ava** ' , '**Change Avatar**')
.addField('     **on** ' ,' **Online** ')
.addField('     **idle** ' ,' **Idle** ')
.addField('     **dnd** ' ,' **Do Not Disturb** ')
.addField('     **off** ' ,' **Offline** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});



client.login('NDIyNzI5MjU1ODI3Mjc1Nzc2.D1gg1w.hZxgucitIZbtQ-ajQaarvjom17A')
