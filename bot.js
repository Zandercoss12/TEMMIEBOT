const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var fortunes = [
//  "**TemmieBOT says**\n``````"
	"**TemmieBOT says**\n```css\nyayA```",
	"**TemmieBOT says**\n```fix\nno```",
	"**TemmieBOT says**\n```fix\nsorrys, coulnt hear u```",
	"**TemmieBOT says**\n```fix\nDa world may never know...```",
	"**TemmieBOT says**\n```css\nIt iz certain.```",
	"**TemmieBOT says**\n```css\nU may rely on it```",
	"**TemmieBOT says**\n```css\nTEm can see it, yayA```",
	"**TemmieBOT says**\n```fix\nDat iz not possible```"
];

client.on('ready', () => {
  client.user.setPresence({game: {name: "==help for commands!", type: 0}});
  console.log('I am ready!');
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
switch (command) {
	case '8ball':
	if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
	else message.channel.sendMessage("```-diff\n-TEm does not understan```");
	break;
	case 'info':
	var embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.addField("Creator:", "Zandercross12!!!", true)
	.addField("TEm dont realy do much", ":3", true)
	.addField("hOI", "TACOS")
	.setColor(0x00FFFF)
	message.channel.sendEmbed(embed);
	break;
	case 'hOI':
	message.channel.sendMessage("hOI im temmie!!!");
	break;
	case 'TACOS':
	message.channel.sendMessage("TACOS R DA BEST");
	break;
	case 'help':
	message.channel.sendMessage("```md\n|--------<Commands>--------|\n[1]: help - gives you help menu (this one).\n[2]: 8ball <message> - Replies \"yes\" or \"no\" in response to your question.\n[3]: info - information about the bot.\n[4]: tacos,\n[5]: hOI\n|--------<Commands>-------|``` **Always start your commands with ==**");
	break;
	default:
	message.channel.sendMessage("```diff\n-Invalid Command :3```");
	break;
	
}

