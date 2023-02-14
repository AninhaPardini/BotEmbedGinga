const dotenv = require('dotenv').config();
const {
  ActionRowBuilder,
  ButtonBuilder,
  AttachmentBuilder,
  StringSelectMenuBuilder,
} = require('@discordjs/builders');
const {
  Client,
  GatewayIntentBits,
  Events,
  ButtonStyle,
  InteractionType,
  ComponentType,
  EmbedBuilder,
  MessageManager,
} = require('discord.js');

const bot = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
  ],
});

// Imports
const { INTERACTION_IDS, COLORS, IMAGES } = require('./src/constants');
const { welcome } = require('./src/Messages/welcome.ms');
const { help } = require('./src/Messages/help.ms');

bot.on(Events.MessageCreate, (message) => {
  welcome(message);
  help(message);
});

bot.on(Events.InteractionCreate, async (interaction) => {});

bot.on(Events.ClientReady, () => {
  console.log('✅ Bot on!', bot.user.username);
});

bot.login(process.env.TOKEN);
