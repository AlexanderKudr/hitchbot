import { SlashCommandBuilder } from "discord.js";
//todo: todo)
export const npmtrends = {
  data: new SlashCommandBuilder()
    .setName("npmtrends")
    .setDescription("Search for lyrics"),
  execute: async (interaction) => {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );
  },
};