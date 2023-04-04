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
const { INTERACTION_IDS } = require('./src/constants');

bot.on(Events.MessageCreate, (message) => {
  welcome(message);
  help(message);
});

bot.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isModalSubmit()) {
    replyReport(interaction);
    replySugest(interaction);
  }

  if (interaction.isAnySelectMenu()) {
    const selected = interaction.isStringSelectMenu()
      ? interaction.values[0]
      : false;

    switch (selected) {
      case INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_SELECT:
      case INTERACTION_IDS.HELP_SELECTMENU.REPORT_SELECT:
      case INTERACTION_IDS.HELP_SELECTMENU.SUGEST_SELECT:
        helpIT(interaction);
        break;

      case INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKCREATE:
      case INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKADM:
      case INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKUPRANK:
      case INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKLANG:
        commandsReply(interaction);
        break;
      default:
        helpCommandsList(interaction); //lista ajuda comandos
    }
  }

  if (interaction.isButton()) {
    if (
      interaction.customId === INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_SELECT
    ) {
      helpCommandsList(interaction); //lista ajuda comandos
    } else {
      sugestInput(interaction); //modal sugestao
      reportInput(interaction); // modal report
    }
  }
});

bot.on(Events.ClientReady, () => {
  console.log('✅ Bot on!', bot.user.username);
});

bot.login(process.env.TOKEN);
