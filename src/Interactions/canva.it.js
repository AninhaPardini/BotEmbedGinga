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

    // Using undici to make HTTP requests for better performance
    const { body } = await request(
      interaction.user.displayAvatarURL({ extension: 'jpg' }),
    );
    const avatar = await Canvas.loadImage(await body.arrayBuffer());

    // If you don't care about the performance of HTTP requests, you can instead load the avatar using
    // const avatar = await Canvas.loadImage(interaction.user.displayAvatarURL({ extension: 'jpg' }));

    // Draw a shape onto the main canvas
    context.drawImage(avatar, 25, 25, 200, 200);

    // Pick up the pen
    context.beginPath();

    // Start the arc to form a circle
    context.arc(125, 125, 100, 0, Math.PI * 2, true);

    // Put the pen down
    context.closePath();

    // Clip off the region you drew on
    context.clip();

    message.reply({ files: [attachment] });
  }
};

module.exports = { canva };
