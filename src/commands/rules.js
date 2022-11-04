import { ruleOptions } from "../utils/ruleOptions.js";
import { SlashCommandBuilder } from "discord.js";

export const rules = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Print rule on demand")
    .addStringOption((option) => {
      let choice = option.setName("choose").setDescription("-_^");
      let params = Object.keys(ruleOptions).map((i) => ruleOptions[i]);
      return choice.addChoices.apply(option, params);
    }),
  execute: async (interaction) => {
    const ruleOption = interaction.options.getString("choose");
    await interaction.reply(
      `${ruleOption} https://discord.com/channels/1008061995095957705/1018169718911279104/1019002716304965702`
    );
  },
};
