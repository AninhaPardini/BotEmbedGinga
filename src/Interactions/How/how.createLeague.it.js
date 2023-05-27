const { ActionRowBuilder } = require('@discordjs/builders');
const { INTERACTION_IDS, COLORS } = require('../../constants');
const { ButtonStyle, EmbedBuilder, ButtonBuilder } = require('discord.js');

const optionOne = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor(COLORS.EMBEDCOLOR_DEFAULT)
    .setTitle('``🏆`` O que é uma liga e como criá-la?')
    .setDescription(
      'A liga é um agrupamento de campeonatos, onde é criada uma categoria com os seguintes canais inclusos: #partidas, #resultados e #ranking. O nome default da liga ao ser criada é o título do campeonato selecionado, mas seu nome é editável.\n\n**Modos de utilizar a função de Liga:**\n\n### 1 - Individual \nConsiste em ter um campeonato por liga criada.\n\nForma recomendada de utilização, pois é default para participar de eventos oferecidos pelo Ginga Team, como a **Ginga Servers League** que é uma competição de rodada premiada de pontuação dos servers em um campeonato específico.\n\n### 2 - Mista\nDesta forma os campeonatos são todos inseridos no canal de #partidas da liga selecionada, é uma funcionalidade beta e apresenta instabilidade. Para uma melhor experiência recomendamos a utilização da Liga Individual.'
    );

  const components = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.OPTION1_1)
      .setLabel('Criando uma liga')
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId(INTERACTION_IDS.HOW_SELECTMENU.OPTION1_2)
      .setLabel('Adicionar campeonatos a uma liga')
      .setStyle(ButtonStyle.Primary)
  );

  if (interaction.isButton()) {
    await interaction.update({
      ephemeral: true,
      embeds: [embed],
      components: [components],
    });
  } else {
    await interaction.reply({
      ephemeral: true,
      embeds: [embed],
      components: [components],
    });
  }
};

module.exports = { optionOne };
