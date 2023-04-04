const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../constants');
const {
  ButtonStyle,
  EmbedBuilder,
  ButtonBuilder,
  StringSelectMenuBuilder,
} = require('discord.js');
const { helpCommandsList } = require('./help.commands.it');

const backCommandsHub = async (interaction) => {
  if (
    interaction.isButton() &&
    interaction.customId === INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_SELECT
  ) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_GRAY)
      .setTitle('``⚙`` Dúvida com comandos')
      .setDescription(
        'Está com dificuldade em usar os comandos do nosso bot? **Selecione abaixo** se houver algum tópico que se encaixe com o que precisa!',
      );

    const components = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId('commandsoption')
        .setPlaceholder('Nada selecionado')
        .setMinValues(1)
        .addOptions(
          {
            label: 'Como criar um bolão?',
            description: 'Como configurar nome da liga, escolher campeonato...',
            value: INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKCREATE,
            emoji: {
              name: '✏',
            },
          },
          {
            label: 'Como definir ADM para o bolão?',
            description:
              'Escolher o cargo que pode editar uma determinada liga...',
            value: INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKADM,
            emoji: { name: '👤' },
          },
          {
            label: 'Como atualizar o ranking?',
            description: 'Comando para atualizar mais rápido as informações...',
            value: INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKUPRANK,
            emoji: { name: '🔄' },
          },
          {
            label: 'Como mudar o idioma?',
            description: 'As opções de idioma são: PT-BR e EN-US',
            value: INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKLANG,
            emoji: { name: '🌎' },
          },
        ),
    );

    await interaction.update({
      ephemeral: true,
      embeds: [embed],
      components: [components],
    });
  }
};
module.exports = { backCommandsHub };
