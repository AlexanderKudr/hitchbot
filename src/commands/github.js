import { SlashCommandBuilder } from "discord.js";
import { optionsDevsAndRepos } from "../functions/githubFetcher.js";
import axios from "axios";

export const github = {
  data: new SlashCommandBuilder()
    .setName("github")
    .setDescription("get github trends")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("developers")
        .setDescription("top devs on github")
        .addStringOption((option) =>
          option.setName("language").setDescription("max 32 characters")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("repositories")
        .setDescription("top repos on github")
        .addStringOption((option) =>
          option.setName("language").setDescription("max 32 characters")
        )
    ),

  execute: async (interaction) => {
    const term = interaction.options.getString("language");
    const devParams = { language: `${term}`, since: "daily" };
    const reposParams = {
      language: `${term}`,
      since: "daily",
      spoken_language_code: "en",
    };

    if (interaction.options.getSubcommand() === "developers") {
      const req = await axios.request(
        optionsDevsAndRepos(devParams, "developers")
      );
      const response = await req.data.map((i) => `${i.url} ${i.name}`);
      const result = [];
      for (let i = 0; i < response.length; i++) {
        if (result.length < 5) {
          result.push(response[Math.floor(Math.random() * response.length)]);
        }
      }
      console.log(result);
      await interaction.reply(`${result}`);

    } else if (interaction.options.getSubcommand() === "repositories") {
      const req = await axios.request(
        optionsDevsAndRepos(reposParams, "repositories")
      );
      const response = await req.data.map((i) => `${i.url} ${i.name}`);
      const result = [];
      for (let i = 0; i < response.length; i++) {
        if (result.length < 5) {
          result.push(response[Math.floor(Math.random() * response.length)]);
        }
      }
      await interaction.reply(`${result}`);
    }
  },
};
