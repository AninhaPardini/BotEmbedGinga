const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');

const option5_1 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('``❔`` Como editar cargos que podem palpitar?')
    .setDescription(
      'Clique no botão `` Editar Preferências >>  ⚽``.  Então serão exibidos os cargos já permitidos e os botões de `` Adicionar ``, `` Remover`` um cargo e também o `` Cancelar `` para anular a ação.'
    );

  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.BACKCONFIG)
      .setLabel('Voltar')
      .setStyle(ButtonStyle.Secondary)
  );

  await interaction.update({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};

module.exports = { option5_1 };
