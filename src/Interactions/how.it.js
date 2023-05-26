const { INTERACTION_IDS, COLORS } = require('../constants');
const { optionOne } = require('./How/how.createLeague.it');
const { option1_2 } = require('./How/how.remLeague.it');

const howIT = async (interaction) => {
  const selected = interaction.isStringSelectMenu()
    ? interaction.values[0]
    : false;

  console.log(selected);
  console.log(interaction.customId);

  if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION1) {
    optionOne(interaction);
    console.log('Option 1.1');
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION2) {
    option1_2(interaction);
    console.log('Option 1.2');
  }
};

module.exports = { howIT };
