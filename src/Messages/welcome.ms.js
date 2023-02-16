const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
} = require('@discordjs/builders');
const { ButtonStyle } = require('discord.js');
const { COLORS, IMAGES } = require('../constants');

const welcome = (message) => {
  if (message.content.startsWith('!welcome')) {
    const embed = new EmbedBuilder()
      .setColor(COLORS.EMBEDCOLOR_DEFAULT)
      .setTitle(
        '``👋`` Seja bem-vindo(a) ao nosso servidor de suporte do Ginga!'
      )
      .setDescription(
        'Aqui nós compartilhamos as [**novas atualizações**](https://discord.com/channels/1073237981407756319/1073237981944614914) do bot e te oferecemos [**suporte**](https://discord.com/channels/1073237981407756319/1073322922636226611) com qualquer **dúvida** ou **ajuda** que precisar!\n\nCaso não tenha **instalado** nosso bot em seu servidor, fique a vontade para **clicar no botão abaixo** e convida-lo para a sua comunidade!\n\n``❓`` Está com **dificuldade** em algum processo de **instalação ou bug**? Vá no **canal** <#1073322922636226611> e mande o que precisa, nossa <@&1074816806608457818> irá te ajudar!'
      )
      .setImage(IMAGES.WELCOMEIMG);

    const components = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setLabel('Instalar')
        .setStyle(ButtonStyle.Link)
        .setURL(
          'https://cdn.discordapp.com/attachments/1073238163746717717/1075814642082922577/image.png'
        )
    );
    return message.channel.send({
      components: [components],
      embeds: [embed],
    });
  }
};

module.exports = { welcome };
