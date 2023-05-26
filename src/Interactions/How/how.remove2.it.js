const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');

const removeCamp2 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('`` ➖ `` Como remover campeonatos da Liga?')
    .setDescription(
      'Quando quiser remover um campeonato de uma liga:\n\n1. Digite `` /admin league remove-championship ``\n2. Selecione a Liga\n3. Selecione o Campeonato\nPronto! Os canais e as informações do campeonato estarão excluídas do seu servidor.'
    );

  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.BECKREMLEA)
      .setLabel('Voltar')
      .setStyle(ButtonStyle.Secondary)
  );

  await interaction.update({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};

module.exports = { removeCamp2 };
