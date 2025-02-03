const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json'); // Ensure you have a config.json with your bot token

// Update intents to only include necessary ones
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log(`Received message: ${message.content}`); // Log received messages
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

// Add error handling for login
client.login(token).catch(err => {
    console.error('Failed to login:', err); // Log any login errors
});
