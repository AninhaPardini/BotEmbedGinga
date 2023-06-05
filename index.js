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
const { options1_1_1 } = require('./src/Interactions/How/how.create.it');
const { options1_1_2 } = require('./src/Interactions/How/how.create2.it');
const { optionOne } = require('./src/Interactions/How/how.createLeague.it');
const { removeCamp } = require('./src/Interactions/How/how.remove.it');
const { option1_2 } = require('./src/Interactions/How/how.remLeague.it');
const { removeCamp2 } = require('./src/Interactions/How/how.remove2.it');
const { boPick3_1 } = require('./src/Interactions/How/how.bopick.it');
const { boPick3_1_1 } = require('./src/Interactions/How/how.bolao2.it');
const { option1_3 } = require('./src/Interactions/How/how.bolao.it');

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
      return;
    } else {
      sugestInput(interaction); //modal sugestao
      reportInput(interaction);
      // modal report
    }

    if (interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION1_1) {
      options1_1_1(interaction);
      console.log('Option 1.1.1');
      return;
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION1_2
    ) {
      options1_1_2(interaction);
      console.log('Option 1.1.2');
      return;
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.BACKCRELEA
    ) {
      optionOne(interaction);
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION1_2_1
    ) {
      removeCamp(interaction);
      console.log('Option 1.1.2.1');
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.BACKCREATE2
    ) {
      options1_1_2(interaction);
      console.log('Option 1.1.2');
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION2
    ) {
      option1_2(interaction);
      console.log('Option 1.2');
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION2_1
    ) {
      removeCamp2(interaction);
      console.log('Option Remove Camp 2');
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.BECKREMLEA
    ) {
      option1_2(interaction);
      console.log('Option 1.2');
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION3_1
    ) {
      boPick3_1(interaction);
      console.log('Option 3.1');
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION3_1_1
    ) {
      boPick3_1_1(interaction);
      console.log('Option 3.1.1');
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.BACKBOLAO
    ) {
      option1_3(interaction);
      console.log('Option 3');
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.OPTION3_1_1
    ) {
      boPick3_1_1(interaction);
      console.log('Option 3.1.1');
    } else if (
      interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.BACKBOLAO3_1
    ) {
      boPick3_1(interaction);
      console.log('Option 3.1');
    }
  }
});

bot.on(Events.ClientReady, () => {
  console.log('✅ Bot on!', bot.user.username);
});

bot.login(process.env.TOKEN);
