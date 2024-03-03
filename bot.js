import { onMessage } from './commands.js';
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Command: progToOpen = spawnObj('C:\\Windows\\notepad.exe');

/*
 * Idea:
 * Let's make a discord bot that can control my pc.
 * This is kind of fun XD.
 */

export var env = {}

client.on('ready', () => {
    console.log("[CLIENT]: Discord bot is running!\n")
    main()
})

client.on('messageCreate', onMessage);

client.login('TOKEN HERE');

function main() {
    const general = client.channels.cache.get('981662959409455159')
    env.channels = {}
    env.channels.general = general
//    general.send('Hola! Soy JavhanBOT,\ny sirvo para darle instrucciones ala compu d siro xdd.');

    onMessage("abrir notepad");
}