const { INTERACTION_IDS, COLORS } = require('../constants');
const { optionOne } = require('./how.createLeague.it');

const howIT = async (interaction) => {
  const selected = interaction.isStringSelectMenu()
    ? interaction.values[0]
    : false;

  if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION1) {
    optionOne(interaction);
  }
};

module.exports = { howIT };
