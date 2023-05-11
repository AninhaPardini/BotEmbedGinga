const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require('@discordjs/builders');

const { INTERACTION_IDS, COLORS, IMAGES } = require('../constants');

const how = (message) => {
  if (message.content.startsWith('!how')) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_DEFAULT)
      .setTitle('``📚`` Como usar o Ginga?')
      .setDescription(
        'Este é um tutorial para tirar dúvidas sobre comandos do bot e também contém passo a passo para torcedores iniciantes.\n\n``☝`` Você tem alguma (sugestão)[link] para o nosso bot? Conte pra nós em #sugestao.\n Tem alguma (dúvida)[link]? Verifique o FAQ em #duvidas.\n\nSelecione abaixo a opção de configuração desejada.'
      );

    const components = new ActionRowBuilder().setComponents(
      new StringSelectMenuBuilder()
        .setCustomId('howselect')
        .setPlaceholder('Passo a passo, Comandos, e mais!')
        .setMaxValues(1)
        .addOptions(
          {
            label: 'Criar liga',
            description:
              'Tudo que você precisa saber sobre as ligas e como criá-las!',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION1,
            emoji: { name: '🏆' },
          },
          {
            label: 'Remover liga',
            description: '',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION2,
            emoji: { name: '🗑' },
          },
          {
            label: 'Funcionamento do bolão',
            description: 'Saiba sobre partidas, resultados e ranking.',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION3,
            emoji: { name: '⚙' },
          },
          {
            label: 'Enviar bug',
            description:
              'Saiba como nos falar quando encontrar algum problema ou bug.',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION4,
            emoji: { name: '🦗' },
          },
          {
            label: 'Mudar configurações da liga',
            description: 'Permissões para palpitar e mudar canais da liga.',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION5,
            emoji: { name: '🛠' },
          },
          {
            label: 'Enviar feedback',
            description: '',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION6,
            emoji: { name: '📤' },
          },
          {
            label: 'Mudar idioma',
            description: '',
            value: INTERACTION_IDS.HOW_SELECTMENU.OPTION7,
            emoji: { name: '🌎' },
          }
        )
    );
    return message.channel.send({
      components: [components],
      embeds: [embed],
    });
  }
};

module.exports = { how };
