const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require('@discordjs/builders');

const { INTERACTION_IDS, COLORS, IMAGES } = require('../constants');

const how = (message) => {
  if (message.content.startsWith('!how')) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_DEFAULT)
      .setTitle('``📚`` Como usar o Ginga?')
      .setDescription('');

    const components = new ActionRowBuilder().setComponents(
      new StringSelectMenuBuilder()
        .setCustomId('howselect')
        .setPlaceholder('Principais tópicos')
        .setMaxValues(1)
        .addOptions(
          {
            label: '',
            description: '',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION1,
            emoji: { name: '' },
          },
          {
            label: 'Reporte um bug',
            description: '',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION2,
            emoji: { name: '' },
          },
          {
            label: 'Reporte um bug',
            description: '',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION3,
            emoji: { name: '' },
          },
          {
            label: 'Reporte um bug',
            description: '',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION4,
            emoji: { name: '' },
          },
          {
            label: 'Reporte um bug',
            description: '',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION5,
            emoji: { name: '' },
          }
        )
    );
  }
};
