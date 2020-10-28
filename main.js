const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';



client.once('ready', () => {
    console.log('poggers');
    client.user.setActivity('chad memes | Prefix .' , { type: 'WATCHING'}).catch(console.error);
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const exampleEmbed = new Discord.MessageEmbed()
    .setTitle("Commands")
    .addFields(
        { name: "help", value: "Sends DM with all things you can do with me."},
        { name: "food", value: "Feeds you since your too poor to afford food."},
        { name: "lenny", value: "Sends the funny face"},
        { name: "gaymeter", value: "Says how gay you are."},
        { name: "8ball", value: "Can see your future.😳"},
        { name: "invite", value: "Gives you a link to invite me to your server!"},
        { name: "server", value: "Sends you our Discord Server."},
    )
    .setFooter("Version 1.5 | Made by Bobux Man #7027");

    if(command === 'help'){
    message.channel.send("Check your DM'S");
    message.author.send(exampleEmbed);}

    const EmbedThing = new Discord.MessageEmbed()
    .setTitle("So you want to invite me?")
    .addFields(
        { name: "Invite Link", value: "Link to invite me to your server : https://discord.com/oauth2/authorize?client_id=731233298377998447&scope=bot&permissions=3345472"},

    )
    .setFooter("Thank you for helping me grow into other servers.");

    if(command === 'invite'){
    message.channel.send(EmbedThing);}

    const LoggingThing = new Discord.MessageEmbed()
    .setTitle("Version 1.5")
    .addFields(
        { name: "What's new :", value: "Added a bunch of commands and renamed bot from Bobux Bot to Chad Bot."},

    )
    .setFooter("Thank you for helping me grow into other servers.");

    if(command === 'invite'){
    message.channel.send(LoggingThing);}

    if(command === 'food'){
        
        message.channel.send('Heres some Pizza! 🍕');
        console.log('yo some guy got a pizza! thats pog');
        }

        if(command === 'lenny'){
        
            message.channel.send('( ͡° ͜ʖ ͡°)');    
        }

    if(command === 'server'){
        
        message.channel.send('Heres our server : https://discord.gg/me6NRnh');    
    }


    let question = args[0]

    if(command === '8ball'){

      let responses = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes – definitely.", "You may rely on it."]

      let response = Math.floor(Math.random() * responses.length)

      message.reply(responses[response])
    }

      if(command === 'gaymeter'){
  
        let responses = ["0% Gay", "1% Gay", "2% Gay", "3% Gay", "4% Gay", "5% Gay", "6% Gay", "7% Gay", "8% Gay", "9% Gay", "10% Gay", "11% Gay", "12% Gay", "13% Gay", "14% Gay", "15% Gay", "16% Gay", "17% Gay", "18% Gay", "19% Gay","20% Gay","21% Gay","22% Gay","23% Gay", "24% Gay", "25% Gay", "26% Gay", "27% Gay", "28% Gay", "29% Gay","30% Gay","31% Gay","32% Gay","33% Gay","34% Gay","35% Gay","36% Gay","37% Gay", "38% Gay","39% Gay","40% Gay","41% Gay", "42% Gay", "43% Gay","44% Gay","45% Gay","46% Gay","47% Gay","48% Gay","49% Gay", "50% Gay","51% Gay","52% Gay", "53% Gay","54% Gay", "55% Gay","56% Gay","57% Gay", "58% Gay", "59% Gay", "60% Gay", "61% Gay", "62% Gay","63% Gay","64% Gay","65% Gay", "66% Gay", "67% Gay","68% Gay", "69% Gay","70% Gay","71% Gay","72% Gay","73% Gay","74% Gay","75% Gay", "76% Gay", "77% Gay","78% Gay","79% Gay","80% Gay", "81% Gay", "82% Gay","83% Gay","84% Gay","85% Gay","86% Gay","87% Gay", "88% Gay", "89% Gay", "90% Gay", "91% Gay", "92% Gay","93% Gay", "94% Gay", "95% Gay","96% Gay","97% Gay","98% Gay","99% Gay", "100% Gay"]
  
        let response = Math.floor(Math.random() * responses.length)
  
        message.reply(responses[response])

}});

client.login('NzMxMjMzMjk4Mzc3OTk4NDQ3.XwjEEw.OV58Uk_kAN8xLVvWGYa1XhebzRo');