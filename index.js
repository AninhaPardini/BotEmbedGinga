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
const { reportInput } = require('./src/Interactions/help.report.it');
const { replyReport } = require('./src/Interactions/help.report.md.it');
const { helpCommandsList } = require('./src/Interactions/help.commands.it');
const { commandsReply } = require('./src/Interactions/help.commands.rp');
const { backCommandsHub } = require('./src/Interactions/help.commands.b');

bot.on(Events.MessageCreate, (message) => {
  welcome(message);
  help(message);
});

bot.on(Events.InteractionCreate, async (interaction) => {
  helpIT(interaction);
  sugestInput(interaction);
  replySugest(interaction);
  reportInput(interaction);
  replyReport(interaction);
  /* helpCommandsList(interaction); */
  commandsReply(interaction);
  backCommandsHub(interaction);
});

bot.on(Events.ClientReady, () => {
  console.log('✅ Bot on!', bot.user.username);
});

bot.login(process.env.TOKEN);
