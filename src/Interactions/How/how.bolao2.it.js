const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');

const boPick3_1_1 = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_GRAY)
    .setTitle('``❔`` Como conferir palpites?')
    .setDescription(
      'Após palpitar, para conferir seus palpites vá para o canal `` #ranking ``, você terá acesso a **tabela** com a **pontuação** dos membros e suas posições, também o botão_ _ `` Meus palpites `` onde pode **conferir** seu histórico.'
    );

  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.BACKBOLAO3_1)
      .setLabel('Voltar')
      .setStyle(ButtonStyle.Secondary)
  );

  await interaction.update({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};

module.exports = { boPick3_1_1 };
