const Discord = require('discord.js');

const cevaplar = [
    "Evet",
    "Hayır",
    "Belki",
    "Olabilir",
    "Daha Sonra Tekrar Sor",
    "Imkansız"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: ?sorusor <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sorusor', 
  description: 'Sihirli 8ball sorularınızı cevaplar',
  usage: 'sorusor <soru>'
};
