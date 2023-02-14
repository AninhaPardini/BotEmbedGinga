const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../constants');
const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits, Events } = require('discord.js');

const replySugest = async (interaction) => {
  const channel = await interaction.client.channels.cache.get(
    '1074824627303485492'
  );
  const user = interaction.user;

  if (
    interaction.isButton &&
    interaction.customId ===
      INTERACTION_IDS.HELP_SELECTMENU.SUGEST_WRITE.S_SEND_MODAL
  ) {
    const title = interaction.fields.getTextInputValue(
      INTERACTION_IDS.HELP_SELECTMENU.SUGEST_WRITE.SUGEST_MODAL.TITLE
    );
    const description = interaction.fields.getTextInputValue(
      INTERACTION_IDS.HELP_SELECTMENU.SUGEST_WRITE.SUGEST_MODAL.DESCRIPT
    );
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_WHITE)
      .setTitle(title)
      .setDescription(description)
      .setThumbnail(
        `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
      );

    await channel
      .send({
        content: `<@${interaction.user.id}> fez uma sugestão para o ginga bot, reaja com "⏫" se gostou da ideia!\n`,
        embeds: [embed],
        components: [],
        fetchReply: true,
      })
      .then((sentMessage) => {
        // Unicode emoji
        sentMessage.react('⏫');
      });
    await interaction.update({ fetchReply: true });
  }
};

module.exports = { replySugest };
