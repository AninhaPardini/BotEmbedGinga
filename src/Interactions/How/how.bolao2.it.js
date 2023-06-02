const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');

const option1_33 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('``❔`` Como funciona o bolão?')
    .setDescription(
      'O bolão é a competição mais conhecida do meio futebolístico e é a principal funcionalidade que foi integrada ao nosso bot, onde pode jogar com seus amigos. Saiba como funciona cada canal e como o bolão se integra a eles:\n\n⚽ `` #partidas `` Você clica no botão **“Palpitar”** para registrar sua previsão de placar.\n✅ `` #resultados `` Confira os resultados das partidas, súmula e estatísticas de erros e acertos de outros jogadores do bolão.\n🏆 `` #ranking `` Acompanhe sua posição no placar do servidor, veja o **top 10** e confira a **sua pontuação** e **últimos palpites**.' 
    );

  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.OPTION2_1)
      .setLabel('Como palpitar?')
      .setStyle(ButtonStyle.Primary)
      .setEmoji('gballemoji:1111733792772739192')
  );

  if (
    interaction.isButton() &&
    interaction.customId === INTERACTION_IDS.HOW_SELECTMENU.BACKBOLAO
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

module.exports = { option1_33 };
