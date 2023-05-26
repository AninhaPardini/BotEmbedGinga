const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');

const boPick3_1 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('``❔`` Como palpitar?')
    .setDescription(
      'Para participar do bolão é necessário palpitar no canal de #partidas clicando no botão `` Palpitar ``'
    );

  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.OPTION3_1_1)
      .setLabel('Conferindo palpite')
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.BACKBOLAO)
      .setLabel('Voltar')
      .setStyle(ButtonStyle.Secondary)
  );

  await interaction.update({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};

module.exports = { boPick3_1 };
