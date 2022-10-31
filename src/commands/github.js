import { SlashCommandBuilder } from "discord.js";
import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://github-trending.p.rapidapi.com/developers",
//   params: { language: "rust", since: "daily" },
//   headers: {
//     "X-RapidAPI-Key": "fb8032f3f6msh70b4ba7315debcep16ca8fjsn88af34360596",
//     "X-RapidAPI-Host": "github-trending.p.rapidapi.com",
//   },
// };
// const req = await axios.request(options);
// const result = await req.data.map((i) => i.name + i.url).slice(0, 10).join("");
export const github = {
  data: new SlashCommandBuilder()
    .setName("github")
    .setDescription("github trends")
    .addStringOption((option) =>
      // option.setName("choose").setDescription("-_^").addChoices(one, two, three)
      option.setName("trends").setDescription("_").addChoices(
        {
          name: "developers",
          value: "developers",
        },
        { name: "repositories", value: "repositories" }
      )
    ),
  execute: async (interaction) => {
    const ruleOption = interaction.options.getString("trends");
    await interaction.reply(ruleOption);

    // await interaction.reply(result)
    console.log(result.join(" "));
  },
};
