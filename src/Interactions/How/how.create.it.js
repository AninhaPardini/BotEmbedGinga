const { ButtonBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const {
  ButtonStyle,
  EmbedBuilder,
  ButtonBuilder,
  Embed,
} = require('discord.js');

const options1Reply = async (interaction) => {
  const embed = new EmbedBuilder().setColor(COLORS.EMBEDCOLOR_DEFAULT);
  const components = new ActionRowBuilder().setComponents(
    new ButtonBuilder()
      .setCustomId('')
      .setLabel('Voltar')
      .setStyle(ButtonStyle.Secondary)
  );

  switch (interaction) {
    case INTERACTION_IDS.HOW_SELECTMENU.OPTION1_1:
      embed
        .setTitle('`` ➕`` Como criar uma Liga Individual?')
        .setDescription(
          '### Modo 1:\n\n1. Digite `` /settings ``\n2. Clique em `` Adicionar/Remover Campeonatos >> Adicionar novo ``\n3. Selecione o campeonato desejado >> `` Continuar ``\nAs informações sobre os canais que serão criados serão exibidas:\n4. Clique em `` confirmar ``\nPronto! A sua Liga estará criada!\n\n### Modo 2:\n\n1. Digite `` /setup ``\n2. Clique em `` Continuar ``\n3. Selecione o campeonato desejado >> `` Continuar``\nAs informações sobre os canais que serão criados serão exibidas:\n4. Clique em ``continuar``\nPronto! A sua Liga estará criada!'
        );
      break;
    case INTERACTION_IDS.HOW_SELECTMENU.OPTION1_2:
      embed
        .setTitle('``➕`` Como criar uma Liga Mista?')
        .setDescription(
          'Quando quiser remover um campeonato de uma liga:\n\n1. Digite `` /admin league remove-championship ``\n2. Selecione a Liga\n3. Selecione o Campeonato\nPronto! Os canais e as informações do campeonato estarão excluídas do seu servidor.'
        );
      break;
  }

  await interaction.reply({
    ephemeral: true,
    embeds: [embed],
    components: [components],
  });
};

module.exports = { options1Reply };
