import axios from "axios";
import { fetchData } from "../functions/fetchData.js";
import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { urbanHost, urbanLink } from "../config/config.js";
//TODO: add embeds for styling
//==========================
export const urban = {
  data: new SlashCommandBuilder()
    .setName("urban")
    .setDescription("Search for definition in Urban Dictionary")
    .addStringOption((option) =>
      option.setName("word").setDescription("max 32 characters")
    ),

  execute: async (interaction) => {
    const term = interaction.options.getString("word");
    const urbanParams = { term: `${term}` };
    const req = await axios.request(
      fetchData(urbanParams, urbanLink, urbanHost)
    );

    if (req.data.list.length === 0) {
      return await interaction.reply(`No results found for **${term}**.`);
    } else {
      await interaction.reply(req.data.list[0].definition);
    }

    // const req = await axios.request(options);
    // const res = req.data.list[0];
    // const trim = (str, max) =>
    //   str.length > max ? `${str.slice(0, max - 3)}...` : str;
    // const embed = new EmbedBuilder()
    //   .setColor(0xefff00)
    //   .setTitle(res.word)
    //   .setURL(res.permalink)
    //   .addFields(
    //     { name: "Definition", value: trim(res.definition, 1024) },
    //     { name: "Example", value: trim(res.example, 1024) },
    //     {
    //       name: "Rating",
    //       value: `${res.thumbs_up} thumbs up. ${res.thumbs_down} thumbs down.`,
    //     }
    //   );
    //   await interaction.editReply({ embeds: [embed] });
  },
};
