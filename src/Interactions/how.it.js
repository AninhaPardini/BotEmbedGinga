const { INTERACTION_IDS, COLORS } = require('../constants');
const { optionOne } = require('./how.createLeague.it');

const howIT = async (interaction) => {
  const selected = interaction.isStringSelectMenu()
    ? interaction.values[0]
    : false;

  if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION1) {
    optionOne(interaction);
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION2) {
    await interaction.reply({
      ephemeral: true,
      content: 'Opção 2',
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION3) {
    await interaction.reply({
      ephemeral: true,
      content: 'Opção 3',
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION4) {
    await interaction.reply({
      ephemeral: true,
      content: 'Opção 4',
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION5) {
    await interaction.reply({
      ephemeral: true,
      content: 'Opção 5',
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION6) {
    await interaction.reply({
      ephemeral: true,
      content: 'Opção 6',
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION7) {
    await interaction.reply({
      ephemeral: true,
      content: 'Opção 7',
    });
  }
};

module.exports = { howIT };
