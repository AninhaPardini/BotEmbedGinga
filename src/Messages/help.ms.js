const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require('@discordjs/builders');

const { INTERACTION_IDS, COLORS, IMAGES } = require('../constants');

const help = (message) => {
  if (message.content.startsWith('!help')) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_DEFAULT)
      .setTitle('``❓`` Preciso de ajuda!')
      .setDescription(
        ' Aqui abaixo você terá uma lista de **perguntas frequentes** para selecionar.'
      );

    const components = new ActionRowBuilder().setComponents(
      new StringSelectMenuBuilder()
        .setCustomId('select')
        .setPlaceholder('Nada selecionado')
        .setMaxValues(1)
        .addOptions(
          {
            label: 'Tem uma Sugestão',
            description: 'Algo que pode ser melhorado ou ajuste no bot!',
            value: INTERACTION_IDS.HELP_SELECTMENU.SUGEST_SELECT,
            emoji: {
              name: '📝',
            },
          },
          {
            label: 'Reporte um bug',
            value: INTERACTION_IDS.HELP_SELECTMENU.REPORT_SELECT,
            emoji: { name: '❗' },
          },
          {
            label: 'Dúvida com comandos',
            value: INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_SELECT,
            emoji: { name: '⚙' },
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
