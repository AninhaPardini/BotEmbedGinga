const { INTERACTION_IDS, COLORS } = require('../../constants');
const { EmbedBuilder, ButtonBuilder } = require('discord.js');

const option1_4 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('``❔`` Como enviar um bug?')
    .setDescription(
      'Achou um bug e deseja reportar para nós? Digite `` /bug `` e nos conte o que aconteceu.'
    );

  if (interaction.isStringSelectMenu()) {
    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
    });
  }
};

module.exports = { option1_4 };
