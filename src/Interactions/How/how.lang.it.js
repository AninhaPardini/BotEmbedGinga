const { INTERACTION_IDS, COLORS } = require('../../constants');
const { EmbedBuilder } = require('discord.js');

const option1_7 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('``❔`` Como mudar o idioma?')
    .setDescription(
      'Digite `` /settings ``, então clique no botão `` Idioma ``\n\n1. Selecione o idioma desejado\n2. Clique no botão `` Continuar ``\n\nPronto! As configurações de idiomas serão atualizadas.'
    );

  if (interaction.isStringSelectMenu()) {
    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
    });
  }
};

module.exports = { option1_7 };
