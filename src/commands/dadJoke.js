import { SlashCommandBuilder } from "discord.js";
// TODO, do it
export const dadJoke = {
  data: new SlashCommandBuilder()
    .setName("dadjoke")
    .setDescription("boomer jokes never hurt"),
  execute: async (interaction) => {
    await interaction.reply("test");
  },
};