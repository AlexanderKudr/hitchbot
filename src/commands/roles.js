import { SlashCommandBuilder } from "discord.js";
//todo: finish after roles events
export const roles = {
  data: new SlashCommandBuilder()
    .setName("roles")
    .setDescription("add role to yourself"),
  execute: async (interaction) => {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );
  },
};