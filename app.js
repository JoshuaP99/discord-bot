const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
})

const prefix = '~'

client.on('ready', () => {
    console.log('Bot loaded')
})

client.on ('messageCreate', message => {
    if (message.content.startsWith(prefix) || message.author.bot) {
        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase();

        if (command === 'youtube') {
            message.channel.send('https://youtu.be/X1FC7qjBufk')
        }
    }
})

client.login(process.env.TOKEN)