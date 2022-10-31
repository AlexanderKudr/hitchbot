import { ruleOptions } from "../utils/ruleOptions.js";
import { SlashCommandBuilder } from "discord.js";

const { r1, r2, r3, r4, r5, r6, r7, r8, r9 } = ruleOptions;

export const rules = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Print rule on demand")
    .addStringOption((option) =>
      // option.setName("choose").setDescription("-_^").addChoices(one, two, three)
      option
        .setName("choose")
        .setDescription("-_^")
        .addChoices(r1, r2, r3, r4, r5, r6, r7, r8, r9)
    ),
  async execute(interaction) {
    const ruleOption = interaction.options.getString("choose");
    await interaction.reply(
      `${ruleOption} https://discord.com/channels/1008061995095957705/1018169718911279104/1019002716304965702`
    );
  },
};
