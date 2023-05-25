const { INTERACTION_IDS, COLORS } = require('../../constants');
const {
  ButtonStyle,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
} = require('discord.js');

const options1_1 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_DEFAULT)
    .setTitle('`` ➕ `` Como criar uma Liga Individual?')
    .setDescription(
      '### Modo 1:\n\n1. Digite `` /settings ``\n2. Clique em `` Adicionar/Remover Campeonatos >> Adicionar novo ``\n3. Selecione o campeonato desejado >> `` Continuar ``\nAs informações sobre os canais que serão criados serão exibidas:\n4. Clique em `` confirmar ``\nPronto! A sua Liga estará criada!\n\n### Modo 2:\n\n1. Digite `` /setup ``\n2. Clique em `` Continuar ``\n3. Selecione o campeonato desejado >> `` Continuar``\nAs informações sobre os canais que serão criados serão exibidas:\n4. Clique em ``continuar``\nPronto! A sua Liga estará criada!'
    );
  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder().setCustomId('back').setLabel('Voltar').setStyle(ButtonStyle.Secondary)
  );

  await interaction.update({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};

module.exports = { options1_1 };
