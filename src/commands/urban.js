import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { rapidApiKey, rapidApiHost, rapidUrbanLink } from "../config/config.js";
import axios from "axios";
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
    const options = {
      method: "GET",
      url: `${rapidUrbanLink}`,
      params: { term: `${term}` },
      headers: {
        "X-RapidAPI-Key": `${rapidApiKey}`,
        "X-RapidAPI-Host": `${rapidApiHost}`,
      },
    };

    const getData = await axios.request(options);
    if (getData.data.list.length === 0) {
      return await interaction.reply(`No results found for **${term}**.`);
    } else {
      const response = getData.data.list[0].definition;
      // console.log(getData.data.list)
      await interaction.reply(response);
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
