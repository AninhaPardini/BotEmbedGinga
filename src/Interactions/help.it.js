const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');
const { helpCommandsList } = require('./Help/help.commands.it');

const helpIT = async (interaction) => {
  const selected = interaction.isStringSelectMenu()
    ? interaction.values[0]
    : false;

  if (selected === INTERACTION_IDS.HELP_SELECTMENU.SUGEST_SELECT) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_WHITE)
      .setTitle('``📝`` Tem uma sugestão para o nosso aplicativo?')
      .setDescription(
        'Clique no **botão abaixo** para escrever sua sugestão, ela será enviada para um canal onde todos possam avaliar e votar sobre a sua ideia!'
      );

    const component = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId(INTERACTION_IDS.HELP_SELECTMENU.SUGEST_WRITE.S_SEND)
        .setLabel('Escrever')
        .setStyle(ButtonStyle.Success)
      /*  new ButtonBuilder()
        .setCustomId(INTERACTION_IDS.HELP_SELECTMENU.SUGEST_WRITE.S_CANCEL)
        .setLabel('Voltar')
        .setStyle(ButtonStyle.Secondary) */
    );

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HELP_SELECTMENU.REPORT_SELECT) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_RED)
      .setTitle('``❗`` Encontrou um bug ou problema em nosso aplicativo?')
      .setDescription(
        'Clique no **botão abaixo** para nos enviar o que aconteceu, ela será enviada para um canal onde só nossa equipe poderá ver e entraremos em contato para te ajudar com isso'
      );

    const component = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId(INTERACTION_IDS.HELP_SELECTMENU.REPORT_WRITE.R_SEND)
        .setLabel('Reportar')
        .setStyle(ButtonStyle.Danger)
      /* new ButtonBuilder()
        .setCustomId(INTERACTION_IDS.HELP_SELECTMENU.REPORT_WRITE.R_CANCEL)
        .setLabel('Voltar')
        .setStyle(ButtonStyle.Secondary) */
    );

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_SELECT) {
    helpCommandsList(interaction);
  }
};

module.exports = { helpIT };
