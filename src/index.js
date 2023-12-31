require('dotenv').config();

// Environment variables
const TOKEN = process.env.TOKEN;

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// const Discord = require('discord.js');
// const client = new Discord.Client();

// const prefix = '!'; 

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('message', (message) => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).trim().split(/ +/);
//     const command = args.shift().toLowerCase();

//     if (command === 'ping') {
//         message.channel.send('Pong!');
//     } else if (command === 'hello') {
//         message.channel.send(`Hello, ${message.author}!`);
//     }
// });

client.login(TOKEN);
