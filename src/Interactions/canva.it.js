const { AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

const bkgImage =
  'https://cdn.discordapp.com/attachments/1073238163746717717/1093600948103938068/Frame_157.png';

const canva = async (message) => {
  if (message.content.startsWith('!canva')) {
    const canvas = Canvas.createCanvas(1161, 646);

    const context = canvas.getContext('2d');

    const background = await Canvas.loadImage(bkgImage);

    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    const body = message.author.displayAvatarURL({ extension: 'jpg' });
    const avatar = await Canvas.loadImage(body);

    // Add an exclamation point here and below
    context.font = '90px sans-serif';
    const userNameWidth = context.measureText(message.author.username).width;
    const userDiscriminatorWidth = context.measureText(
      message.author.discriminator,
    ).width;
    const space = (1141 - (userNameWidth + userDiscriminatorWidth)) / 2 + 20;
    context.fillStyle = '#292929';
    context.fillText(`${message.author.username}`, space, 581);

    context.font = '70px sans-serif';
    context.fillStyle = '#585858';
    context.fillText(
      `#${message.author.discriminator}`,
      space + userNameWidth,
      580,
    );

    context.beginPath();

    // X = 428 + (metade de 304 = 152 - tamanho da imagem horizontalmente) = 580
    // Y = 76 + (metade de 304 = 152 - tamanho da imagem verticalmente) = 228
    // RADIUS = Metade do tamanho da imagem
    // Start the arc to form a circle
    context.arc(580, 228, 152, 0, Math.PI * 2);

    context.closePath();

    context.clip();

    context.drawImage(avatar, 428, 76, 304, 304);

    const attachment = new AttachmentBuilder(await canvas.encode('png'), {
      name: 'profile-image.png',
    });

    message.reply({ files: [attachment] });
  }
};

module.exports = { canva };
