const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let yuzdelik = [" 1  ", " 2  ", " 3  ", " 4  ", " 5  ", " 6  ", " 7  ", " 8  ", " 9  ", " 10  ", " 11  ", " 12  ", " 13  ", " 14  ", " 15  ", " 16  ", " 17  ", " 18  ", " 19  ", " 20  ", " 21  ", " 22  ", " 23  ", " 24  ", " 25  ", " 26  ", " 27  ", " 28  ", " 29  ", " 30  ", " 31  ", " 32  ", " 33  ", " 34  ", " 35  ", " 36  ", " 37  ", " 38  ", " 39  ", " 40  ", " 41  ", " 42  ", " 43  ", " 44  ", " 45  ", " 46  ", " 47  ", " 48  ", " 49  ", " 50  ", " 51", " 52", " 53", " 54", " 55"," 56"," 57"," 58"," 59"," 60"," 61"," 62"," 63"," 64"," 65"," 66"," 67"," 68"," 69"," 70"," 71"," 72"," 73"," 74"," 75"," 76"," 77"," 78", " 79"," 80", " 81", " 82", " 83", " 84", " 85", " 86", " 87", " 88"," 89"," 90"," 91"," 92"," 93"," 94"," 95"," 96"," 97"," 98"," 99"," 100"]
    let dilimi = Math.floor((Math.random() * yuzdelik.length));
    let mUser = message.mentions.users.first()
    let mUser2 = message.mentions.users.last()
    let question = args.slice().join(" ");
    if(!mUser) return message.channel.send(`Lütfen 2 kişinin ismini etiketle.`)

        let embedz = new Discord.RichEmbed()
            .setAuthor(" ")
            .setColor("RANDOM")
            .setDescription(`:heartpulse: :purple_heart: :green_heart: :blue_heart: :heart: :heartpulse:\n\n${mUser} ve ${mUser2} arasındaki aşkın yüzdelik gösterimi: %` + yuzdelik[dilimi] + '\n\n:heartpulse: :purple_heart: :green_heart: :blue_heart: :heart: :heartpulse:' )

        message.channel.send(embedz)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'ölç'],
  permLevel: 0
};

exports.help = {
  name: 'askölcer',
  description: 'Etiketlediğin kişiye aşkını tespit eder',
  usage: 'askölcer'
};