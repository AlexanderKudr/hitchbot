import { SlashCommandBuilder } from "discord.js";

export const midjourney = {
  data: new SlashCommandBuilder()
    .setName("midjourney")
    .setDescription("Replies with Pong!"),
  execute: async (interaction) => {
    await interaction.reply("Pong!");
  },
};
