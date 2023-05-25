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
const { canva } = require('./src/Interactions/canva.it');
const { helpIT } = require('./src/Interactions/help.it');
const { sugestInput } = require('./src/Interactions/Help/help.sugest.it');
const { replySugest } = require('./src/Interactions/Help/help.sugest.md.it');
const { reportInput } = require('./src/Interactions/Help/help.report.it');
const { replyReport } = require('./src/Interactions/Help/help.report.md.it');
const {
  helpCommandsList,
} = require('./src/Interactions/Help/help.commands.it');
const { commandsReply } = require('./src/Interactions/Help/help.commands.rp');
const { INTERACTION_IDS } = require('./src/constants');
const { how } = require('./src/Messages/howuse.ms');
const { howIT } = require('./src/Interactions/how.it');
const { options1_1 } = require('./src/Interactions/How/how.create.it');
const { options1_2 } = require('./src/Interactions/How/how.create2.it');

bot.on(Events.MessageCreate, (message) => {
  welcome(message);
  help(message);
  canva(message);
  how(message);
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
      case INTERACTION_IDS.HOW_SELECTMENU.OPTION1:
      case INTERACTION_IDS.HOW_SELECTMENU.OPTION2:
      case INTERACTION_IDS.HOW_SELECTMENU.OPTION3:
      case INTERACTION_IDS.HOW_SELECTMENU.OPTION4:
      case INTERACTION_IDS.HOW_SELECTMENU.OPTION5:
      case INTERACTION_IDS.HOW_SELECTMENU.OPTION6:
      case INTERACTION_IDS.HOW_SELECTMENU.OPTION7:
        howIT(interaction);
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

    if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION1_1 ||
      INTERACTION_IDS.HOW_SELECTMENU.BACKCRELEA
    ) {
      options1_1(interaction);
      console.log(options1_1(interaction));
      return;
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION1_2 ||
      INTERACTION_IDS.HOW_SELECTMENU.BACKCRELEA
    ) {
      options1_2(interaction);
      console.log(options1_2(interaction));
      return;
    }
  }
});

bot.on(Events.ClientReady, () => {
  console.log('✅ Bot on!', bot.user.username);
});

bot.login(process.env.TOKEN);
