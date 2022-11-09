import { SlashCommandBuilder, AttachmentBuilder } from "discord.js";
//TODO help to understand how to use commands
export const help = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("information about the commands"),
  execute: async (interaction) => {
    await interaction.reply("test");
  },
};