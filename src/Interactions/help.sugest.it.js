const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS, IMAGES } = require('../constants');
const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require('discord.js');

const sugestInput = async (interaction) => {
  if (
    interaction.isButton() &&
    interaction.customId === INTERACTION_IDS.HELP_SELECTMENU.SUGEST_WRITE.S_SEND
  ) {
    const modal = new ModalBuilder()
      .setCustomId(INTERACTION_IDS.HELP_SELECTMENU.SUGEST_WRITE.S_SEND_MODAL)
      .setTitle('Deixe sua sujestão!');

    // Add components to modal

    // Create the text input components
    const TitleSugest = new TextInputBuilder()
      .setCustomId(
        INTERACTION_IDS.HELP_SELECTMENU.SUGEST_WRITE.SUGEST_MODAL.TITLE
      )
      // The label is the prompt the user sees for this input
      .setLabel('Título da sua sugestão:')
      // Short means only a single line of text
      .setStyle(TextInputStyle.Short);

    const DescriptionSugest = new TextInputBuilder()
      .setCustomId(
        INTERACTION_IDS.HELP_SELECTMENU.SUGEST_WRITE.SUGEST_MODAL.DESCRIPT
      )
      .setLabel('Descreva a sua solução:')
      // Paragraph means multiple lines of text.
      .setStyle(TextInputStyle.Paragraph);

    // An action row only holds one text input,
    // so you need one action row per text input.
    const Title = new ActionRowBuilder().addComponents(TitleSugest);
    const Description = new ActionRowBuilder().addComponents(DescriptionSugest);

    // Add inputs to the modal
    modal.addComponents(Title, Description);

    // Show the modal to the user
    await interaction.showModal(modal);
  }
};

module.exports = { sugestInput };
