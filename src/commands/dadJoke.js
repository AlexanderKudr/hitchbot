import axios from "axios";
import { fetchData } from "../functions/fetchData.js";
import { dadjokeHost, dadjokeLink } from "../config/config.js";
import { SlashCommandBuilder, italic, bold } from "discord.js";

export const dadjoke = {
  data: new SlashCommandBuilder().setName("dadjoke").setDescription("jokes"),
  execute: async (interaction) => {
    const request = await axios.request(
      fetchData("", dadjokeLink, dadjokeHost)
    );
    const response = `${bold(request.data.body[0].setup)} ${italic(
      request.data.body[0].punchline
    )}`;
    await interaction.reply(response);
  },
};
