const { INTERACTION_IDS, COLORS } = require('../../constants');
const {
  ButtonStyle,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
} = require('discord.js');

const options1_1_2 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_DEFAULT)
    .setTitle('`` ➕ `` Como criar uma Liga Mista?')
    .setDescription(
      'Para poder criar uma liga compartilhada:\n\n1. Digite `` /admin league add-championship ``\n2. Selecione a Liga\n3. Selecione o Campeonato\nPronto! O campeonato estará adicionado a sua liga.'
    );

  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setLabel('Remover campeonato')
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.OPTION1_2_1)
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setLabel('Voltar')
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.BACKCRELEA)
      .setStyle(ButtonStyle.Secondary)
  );

  await interaction.update({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};

module.exports = { options1_1_2 };
