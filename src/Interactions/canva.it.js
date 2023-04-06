const { AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

const bkgImage =
  'https://cdn.discordapp.com/attachments/1073238163746717717/1093600948103938068/Frame_157.png';

const canva = async (message) => {
  if (message.content.startsWith('!canva')) {
    const canvas = Canvas.createCanvas(1161, 646);

    const context = canvas.getContext('2d');

    const background = await Canvas.loadImage(bkgImage);

    // This uses the canvas dimensions to stretch the image onto the entire canvas
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Use the helpful Attachment class structure to process the file for you
    const attachment = new AttachmentBuilder(await canvas.encode('png'), {
      name: 'profile-image.png',
    });

    interaction.reply({ files: [attachment] });
  }
};

module.exports = { canva };
