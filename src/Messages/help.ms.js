const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  StringSelectMenuBuilder,
} = require('@discordjs/builders');
const { ButtonStyle } = require('discord.js');
const { INTERACTION_IDS, COLORS, IMAGES } = require('../constants');

const help = (message) => {
  if (message.content.startsWith('!help')) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR1)
      .setTitle('``❓`` Preciso de ajuda!')
      .setDescription(
        ' Aqui abaixo você terá uma lista de **perguntas frequentes** para selecionar.'
      );

    const components = new ActionRowBuilder().setComponents(
      new StringSelectMenuBuilder()
        .setCustomId('select')
        .setPlaceholder('Nothing selected')
        .setMaxValues(1)
        .addOptions(
          {
            label: 'Tem uma Sugestão',
            description: 'Algo que pode ser melhorado ou ajusto no bot!',
            value: INTERACTION_IDS.HELP_SELECTMENU.SUGEST_SELECT,
            emoji: `pencil`,
          },
          {
            label: ':exclamation: Reporte um bug',
            value: INTERACTION_IDS.HELP_SELECTMENU.REPORT_SELECT,
            emoji: `pencil`,
          }
        )
    );
    return message.channel.send({
      components: [components],
      embeds: [embed],
    });
  }
};

module.exports = { help };
