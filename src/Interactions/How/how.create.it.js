const { INTERACTION_IDS, COLORS } = require('../../constants');
const {
  ButtonStyle,
  EmbedBuilder,
  ButtonBuilder,
  Embed,
  ActionRowBuilder,
} = require('discord.js');

const options1_1 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_DEFAULT)
    .setTitle('`` ➕`` Como criar uma Liga Individual?')
    .setDescription(
      '### Modo 1:\n\n1. Digite `` /settings ``\n2. Clique em `` Adicionar/Remover Campeonatos >> Adicionar novo ``\n3. Selecione o campeonato desejado >> `` Continuar ``\nAs informações sobre os canais que serão criados serão exibidas:\n4. Clique em `` confirmar ``\nPronto! A sua Liga estará criada!\n\n### Modo 2:\n\n1. Digite `` /setup ``\n2. Clique em `` Continuar ``\n3. Selecione o campeonato desejado >> `` Continuar``\nAs informações sobre os canais que serão criados serão exibidas:\n4. Clique em ``continuar``\nPronto! A sua Liga estará criada!'
    );
  const component = new ActionRowBuilder().setComponents(
    new ButtonBuilder().setLabel('Voltar').setStyle(ButtonStyle.Secondary)
  );

  await interaction.reply({
    ephemeral: true,
    embeds: [embed],
    components: [component],
  });
};

module.exports = { options1_1 };
