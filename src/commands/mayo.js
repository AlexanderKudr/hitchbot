import { SlashCommandBuilder, AttachmentBuilder } from "discord.js";
const file = new AttachmentBuilder("./assets/mayoresponse.jpg");

export const stopbullyingmayo = {
  data: new SlashCommandBuilder()
    .setName("stopbullyingmayo")
    .setDescription("Stop it already"),
  execute: async (interaction) => {
    await interaction.reply({files: [file]});
  },
};

