const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');

const option5_2 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('``❔`` Como mudar canal de palpites?')
    .setDescription(
      'Clique no botão `` Editar preferências >>  Ícone referente ao canal`` e assim você poderá ver o canal que está configurado e um caixa de seleção para mudar de canal.\n\n**Ícones e seu significado:**\n📆 |  `` #partidas ``\n✅ |  `` #resultados ``\n🏅 |  `` #ranking ``'
    );

  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.BACKCONFIG)
      .setLabel('Voltar')
      .setStyle(ButtonStyle.Secondary)
  );

  await interaction.update({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};

module.exports = { option5_2 };
