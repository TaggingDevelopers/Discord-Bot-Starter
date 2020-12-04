const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
    console.log(`Ready!`}
                                            
})

client.on("message", async(message) => {
    const prefix = "your prefix";

    if (message.author.bot) return;
    if (!message.guild) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd === "help") {
       message.channel.send("help cmd")
    }
})

client.login(process.env.TOKEN).catch(e => console.log("INVALID TOKEN"))
