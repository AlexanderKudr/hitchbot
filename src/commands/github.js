import { SlashCommandBuilder } from "discord.js";
import {
  optionsDevsAndRepos,
  fetchResult,
} from "../functions/githubFetcher.js";
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
          option.setName("language").setDescription("coding lang")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("repositories")
        .setDescription("top repos on github")
        .addStringOption((option) =>
          option.setName("language").setDescription("coding lang")
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
      await interaction.reply(`${fetchResult(req)}`);
      
    } else if (interaction.options.getSubcommand() === "repositories") {
      const req = await axios.request(
        optionsDevsAndRepos(reposParams, "repositories")
      );
      await interaction.reply(`${fetchResult(req)}`);
    }
  },
};
