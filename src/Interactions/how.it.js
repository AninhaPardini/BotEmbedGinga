const { INTERACTION_IDS, COLORS } = require('../constants');
const { option1_3 } = require('./How/how.bolao.it');
const { option1_4 } = require('./How/how.bug.it');
const { option1_5 } = require('./How/how.config.it');
const { optionOne } = require('./How/how.createLeague.it');
const { option1_6 } = require('./How/how.feedback.it');
const { option1_7 } = require('./How/how.lang.it');
const { option1_2 } = require('./How/how.remLeague.it');

const howIT = async (interaction) => {
  const selected = interaction.isStringSelectMenu()
    ? interaction.values[0]
    : false;

  if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION1) {
    optionOne(interaction);
    console.log('Option 1.1');
    return;
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION2) {
    option1_2(interaction);
    console.log('Option 1.2');
    return;
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION3) {
    option1_3(interaction);
    console.log('Option 1.3');
    return;
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION4) {
    option1_4(interaction);
    console.log('Option 1.4');
    return;
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION5) {
    option1_5(interaction);
    console.log('Option 1.5');
    return;
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION6) {
    option1_6(interaction);
    console.log('Option 1.6');
    return;
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION7) {
    option1_7(interaction);
    console.log('Option 1.7');
    return;
  }
};

module.exports = { howIT };
