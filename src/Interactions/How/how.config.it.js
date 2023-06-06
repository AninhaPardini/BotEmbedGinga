const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');

const option1_5 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('``❔`` Como mudar configurações da liga?')
    .setDescription(
      'Para acessar as configurações da liga, digite `` /settings `` que o bot irá exibir o **Menu de configurações**. Nele você encontrará todos os campeonatos ativos no seu servidor e seus status, além de saber qual idioma está disponível.\n\nPara acessar a liga que deseja alterar, clique no botão `` Visão geral `` e selecione o nome da liga desejada. Após a seleção serão exibidos os canais configurados, as informações dos campeonatos da liga e o botão de `` Editar Preferências ``.'
    );

  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.OPTION5_1)
      .setLabel('Permissões dos cargos')
      .setStyle(ButtonStyle.Primary)
      .setEmoji('👤'),
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.OPTION5_2)
      .setLabel('Mudar canais do bolão')
      .setStyle(ButtonStyle.Primary)
      .setEmoji('⚽')
  );

  if (
    interaction.isButton() &&
    interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.BACKCONFIG
  ) {
    await interaction.update({
      ephemeral: true,
      embeds: [embed],
      components: [components],
    });
  } else if (interaction.isStringSelectMenu()) {
    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [components],
    });
  }
};

module.exports = { option1_5 };
