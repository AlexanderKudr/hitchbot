import { SlashCommandBuilder } from "discord.js";
const one = {
  name: "1. Be respectful",
  value:
    "1. Be respectful. Remember the human! No insulting, no bullying, no name-calling.",
};
const two = { name: "Meme", value: "meme" };
const three = { name: "Movie", value: "lol" };
export const rules = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Print rule on demand")
    .addStringOption((option) =>
      option.setName("choose").setDescription("-_^").addChoices(one, two, three)
    ),
  async execute(interaction) {
    const ruleOption = interaction.options.getString("choose");
    await interaction.reply(ruleOption);
  },
};