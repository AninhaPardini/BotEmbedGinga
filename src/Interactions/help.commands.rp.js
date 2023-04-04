const { INTERACTION_IDS, COLORS } = require('../constants');
const { EmbedBuilder, ActionRowBuilder } = require('@discordjs/builders');
const { ButtonBuilder, ButtonStyle } = require('discord.js');

const commandsReply = async (interaction) => {
  const selected = interaction.isStringSelectMenu()
    ? interaction.values[0]
    : false;

  const embed = new EmbedBuilder().setColor(COLORS.EMBEDCOLOR_GRAY);
  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_SELECT)
      .setLabel('Voltar')
      .setStyle(ButtonStyle.Secondary),
  );

  switch (selected) {
    case INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKCREATE:
      embed
        .setTitle('``✏`` Como criar um bolão?')
        .setDescription(
          'Para criar uma liga é só digitar ``/setup``\n\nCom isso, é só clicar em continuar e você será enviado para a configuração da liga.',
        );
    case INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKADM:
      embed
        .setTitle(
          '``👤`` Como definir ADM para o bolão? ``FUNCIONALIDADE EM MANUTENÇÃO``',
        )
        .setDescription(
          'Para adicionar um moderador a liga é só digitar ``/settings`` e para remover basta clicar em ``Moderação``',
        );
    case INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKUPRANK:
      embed
        .setTitle('``🔄`` Como atualizar o ranking?')
        .setDescription(
          'Para atualizar os jogos, resultados e ranking, é só digitar ``/admin update channels``',
        );
    case INTERACTION_IDS.HELP_SELECTMENU.COMMANDS_OPTIONS.ASKLANG:
      embed
        .setTitle('``🌎`` Como mudar o idioma?')
        .setDescription(
          'Para mudar o idioma basta ir em ``/settings`` e em **editar preferências** escolher **idioma**.',
        );
  }
  await interaction.update({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};
module.exports = { commandsReply };
