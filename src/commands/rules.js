import { SlashCommandBuilder } from "discord.js";
const one = {
  name: "1. Be respectful",
  value: "1. Be respectful",
};
//todo rules
const two = { name: "2", value: "meme" };
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
    await interaction.reply(
      `${ruleOption} https://discord.com/channels/1008061995095957705/1018169718911279104/1019002716304965702`
    );
  },
};
