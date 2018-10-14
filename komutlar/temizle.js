const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(99);
message.channel.send("**99 Mesaj Sildim** :white_check_mark: ").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};
