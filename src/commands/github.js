import { SlashCommandBuilder } from "discord.js";
import axios from "axios";

const optionsDevelopers = {
  method: "GET",
  url: "https://github-trending.p.rapidapi.com/developers",
  params: { language: "rust", since: "daily" },
  headers: {
    "X-RapidAPI-Key": "fb8032f3f6msh70b4ba7315debcep16ca8fjsn88af34360596",
    "X-RapidAPI-Host": "github-trending.p.rapidapi.com",
  },
};
const optionsRepositories = {
  method: 'GET',
  url: 'https://github-trending.p.rapidapi.com/repositories',
  params: {language: 'rust', since: 'daily', spoken_language_code: 'en'},
  headers: {
    'X-RapidAPI-Key': 'fb8032f3f6msh70b4ba7315debcep16ca8fjsn88af34360596',
    'X-RapidAPI-Host': 'github-trending.p.rapidapi.com'
  }
};
export const github = {
  data: new SlashCommandBuilder()
    .setName("github")
    .setDescription("get github trends")
    .addSubcommand((subcommand) =>
      subcommand.setName("developers").setDescription("top devs on github")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("repositories").setDescription("top repos on github")
    ),

  async execute(interaction) {
    if (interaction.options.getSubcommand() === "developers") {
      const req = await axios.request(optionsDevelopers);
      const result = await req.data
        .map((i) => i.name + i.url)
        .slice(0, 5)
        .join(" ");

      await interaction.reply(`${result}`);

    } else if (interaction.options.getSubcommand() === "server") {
      await interaction.reply(
        `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
      );
    }
  },
};
