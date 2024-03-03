import { onMessage } from './commands.js';
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Command: progToOpen = spawnObj('C:\\Windows\\notepad.exe');

/**
 * Idea:
 * Let's make a discord bot that can control my pc.
 * This is kind of fun XD.
 * 
 * With the command "abrir notepad" you can
 * open the notepad.
 */

export var env = {}

client.on('ready', () => {
    console.log("[CLIENT]: Discord bot is running!\n")
    main()
})

client.on('messageCreate', onMessage);

client.login('CLIENT TOKEN HERE');

function main() {
    const general = client.channels.cache.get('CHANNEL TOKEN HERE')
    env.channels = {}
    env.channels.general = general
}