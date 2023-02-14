const dotenv = require('dotenv').config();

const { Client, GatewayIntentBits, Events } = require('discord.js');

const bot = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
  ],
});

// Imports

const { welcome } = require('./src/Messages/welcome.ms');
const { help } = require('./src/Messages/help.ms');
const { helpIT } = require('./src/Interactions/help.it');
const { sugestInput } = require('./src/Interactions/help.sugest.it');
const { replySugest } = require('./src/Interactions/help.sugest.md.it');

bot.on(Events.MessageCreate, (message) => {
  welcome(message);
  help(message);
});

bot.on(Events.InteractionCreate, async (interaction) => {
  helpIT(interaction);
  sugestInput(interaction);
  replySugest(interaction);
});

bot.on(Events.ClientReady, () => {
  console.log('✅ Bot on!', bot.user.username);
});

bot.login(process.env.TOKEN);
