const {
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require('@discordjs/builders');
const { INTERACTION_IDS, MG_STATE } = require('../constants');
const {
  GatewayIntentBits,
  Events,
  ButtonStyle,
  InteractionType,
  ComponentType,
  EmbedBuilder,
  MessageManager,
} = require('discord.js');

const welcome = (interaction) => {};

module.exports = { welcome };
