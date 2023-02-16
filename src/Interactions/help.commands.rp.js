const { INTERACTION_IDS, COLORS } = require('../constants');
const { EmbedBuilder, ActionRowBuilder } = require('@discordjs/builders');
const { ButtonBuilder, ButtonStyle } = require('discord.js');

const commandsReply = async (interaction) => {
  const selected = interaction.isSelectMenu() ? interaction.values[0] : false;
  if (selected === INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKCREATE) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_GRAY)
      .setTitle('``✏`` Como criar um bolão?')
      .setDescription('Para criar uma liga é só digitar /settings league new');
    const components = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId(INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_SELECT)
        .setLabel('Voltar')
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.update({
      ephemeral: true,
      embeds: [embed],
      components: [components],
    });
  } else if (
    selected === INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKADM
  ) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_GRAY)
      .setTitle('``👤`` Como definir ADM para o bolão?')
      .setDescription(
        'Para adicionar um moderador a liga é só digitar /settings add-mod e para remover basta digitar /settings rem-mod'
      );
    const components = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId(INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_SELECT)
        .setLabel('Voltar')
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.update({
      ephemeral: true,
      embeds: [embed],
      components: [components],
    });
  } else if (
    selected === INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKUPRANK
  ) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_GRAY)
      .setTitle('``🔄`` Como atualizar o ranking?')
      .setDescription(
        'Para atualizar os jogos, resultados e ranking, é só digital /adm update channels'
      );
    const components = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId(INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_SELECT)
        .setLabel('Voltar')
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.update({
      ephemeral: true,
      embeds: [embed],
      components: [components],
    });
  }
};
module.exports = { commandsReply };
