const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');
const { helpCommandsList } = require('./help.commands.it');

const howIT = async (interaction) => {
  const selected = interaction.isStringSelectMenu()
    ? interaction.values[0]
    : false;

  if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION1) {
    const embed = new EmbedBuilder()
      .setColor()
      .setTitle()
      .setDescription()
      .setImage();

    const component = new ActionRowBuilder();

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HELP_SELECTMENU.REPORT_SELECT) {
    const embed = new EmbedBuilder()
      .setColor()
      .setTitle()
      .setDescription()
      .setImage();

    const component = new ActionRowBuilder();

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION2) {
    const embed = new EmbedBuilder()
      .setColor()
      .setTitle()
      .setDescription()
      .setImage();

    const component = new ActionRowBuilder();

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION3) {
    const embed = new EmbedBuilder()
      .setColor()
      .setTitle()
      .setDescription()
      .setImage();

    const component = new ActionRowBuilder();

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION3) {
    const embed = new EmbedBuilder()
      .setColor()
      .setTitle()
      .setDescription()
      .setImage();

    const component = new ActionRowBuilder();

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION4) {
    const embed = new EmbedBuilder()
      .setColor()
      .setTitle()
      .setDescription()
      .setImage();

    const component = new ActionRowBuilder();

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION5) {
    const embed = new EmbedBuilder()
      .setColor()
      .setTitle()
      .setDescription()
      .setImage();

    const component = new ActionRowBuilder();

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION6) {
    const embed = new EmbedBuilder()
      .setColor()
      .setTitle()
      .setDescription()
      .setImage();

    const component = new ActionRowBuilder();

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  } else if (selected === INTERACTION_IDS.HOW_SELECTMENU.OPTION7) {
    const embed = new EmbedBuilder()
      .setColor()
      .setTitle()
      .setDescription()
      .setImage();

    const component = new ActionRowBuilder();

    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [component],
    });
  }
};

module.exports = { howIT };
