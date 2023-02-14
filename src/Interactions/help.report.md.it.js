const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../constants');
const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits, Events } = require('discord.js');

const replyReport = async (interaction) => {
  const channel = await interaction.client.channels.cache.get(
    '1075132692934434896'
  );
  const user = interaction.user;

  if (
    interaction.isButton &&
    interaction.customId ===
      INTERACTION_IDS.HELP_SELECTMENU.REPORT_WRITE.R_SEND_MODAL
  ) {
    const title = interaction.fields.getTextInputValue(
      INTERACTION_IDS.HELP_SELECTMENU.REPORT_WRITE.REPORT_MODAL.TITLE
    );
    const description = interaction.fields.getTextInputValue(
      INTERACTION_IDS.HELP_SELECTMENU.REPORT_WRITE.REPORT_MODAL.DESCRIPT
    );
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_RED)
      .setTitle(title)
      .setDescription(description)
      .setThumbnail(
        `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
      );

    await channel
      .send({
        content: `<@${interaction.user.id}> fez um report para o ginga bot.\n`,
        embeds: [embed],
        components: [],
        fetchReply: true,
      })
      .then((sentMessage) => {
        // Unicode emoji
        sentMessage.react('✅');
        sentMessage.react('⏸');
        sentMessage.react('❌');
      });
    await interaction.update({ fetchReply: true });
  }
};

module.exports = { replyReport };
