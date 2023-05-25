const { INTERACTION_IDS, COLORS } = require('../../constants');
const {
  ButtonStyle,
  EmbedBuilder,
  ButtonBuilder,
  Embed,
  ActionRowBuilder,
} = require('discord.js');

const options1_2 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_DEFAULT)
    .setTitle('``➕`` Como criar uma Liga Mista?')
    .setDescription(
      'Quando quiser remover um campeonato de uma liga:\n\n1. Digite `` /admin league remove-championship ``\n2. Selecione a Liga\n3. Selecione o Campeonato\nPronto! Os canais e as informações do campeonato estarão excluídas do seu servidor.'
    );

  await interaction.reply({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};

module.exports = { options1_2 };
