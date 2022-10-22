import { SlashCommandBuilder } from "discord.js";

export const urban = {
  data: new SlashCommandBuilder()
    .setName("urban")
    .setDescription("Search for definition in Urban Dictionary"),
    execute: async (interaction) => {
    const term = interaction.options.getString('term');
        const query = new URLSearchParams({ term });
    
        const dictResult = await request(`https://api.urbandictionary.com/v0/define?${query}`);
        const { list } = await dictResult.body.json();
    await interaction.reply("Pong!");
  },
};
