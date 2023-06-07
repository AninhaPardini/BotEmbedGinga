const { INTERACTION_IDS, COLORS } = require('../../constants');
const { EmbedBuilder } = require('discord.js');

const option1_6 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('``❔`` Como enviar feedback?')
    .setDescription(
      'Gostaria de mandar um feedback para nós? Basta digitar `` /feedback `` e você poderá escrever a sua sugestão para nós!'
    );

  if (interaction.isStringSelectMenu()) {
    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
    });
  }
};

module.exports = { option1_6 };
