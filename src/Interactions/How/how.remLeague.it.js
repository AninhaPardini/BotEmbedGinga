const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');

const option1_2 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('`` ➖ `` Como remover uma Liga?')
    .setDescription(
      'Para isto, digite /settings e clique em **Adicionar/Remover campeonato > remover** e então escolha o campeonato que deseja retirar.\n\n1. Digite `` /settings ``\n2. Clique em `` Adicionar/Remover Campeonatos ``\n3. Clique em `` Remover ``\n4. Selecione o Campeonato >> `` Continuar ``\nAs informações sobre o campeonato serão exibidas\n5. Clique em `` Confirmar ``\nPronto! Os canais e as informações do campeonato estarão excluídas do seu servidor.'
    );

  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.OPTION2_1)
      .setLabel('Remover campeonato')
      .setStyle(ButtonStyle.Primary)
  );

  if (
    interaction.isButton() &&
    interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.BECKREMLEA
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

module.exports = { option1_2 };
