const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
    console.log(`Started! ID: {781111724270419968}\nTAG: {`Mr.Blober#9486`}
                                            
})

client.on("message", async(message) => {
    const prefix = "+";

    if (message.author.bot) return;
    if (!message.guild) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd === "help") {
       message.channel.send("help cmd")
    }
})

client.login("NzgxMTExNzI0MjcwNDE5OTY4.X744-w.K3Y2YOR8hRh-vbxxJCStUESgZqk").catch(e => console.log("INVALID TOKEN"))
