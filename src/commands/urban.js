import { SlashCommandBuilder } from "discord.js";
import axios from "axios";
export const urban = {
  data: new SlashCommandBuilder()
    .setName("urban")
    .setDescription("Search for definition in Urban Dictionary"),
  execute: async (interaction) => {
    const term = interaction.options.getString("term");
    const query = new URLSearchParams({ term });

    // const dictResult = await axios.get(
    //   `https://api.urbandictionary.com/v0/define?${query}`
    // );
    // // const { list } = await dictResult.body.json();
    // console.log(dictResult);
    // await interaction.reply("Pong!");
    const options = {
      method: 'GET',
      url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
      params: {term: `${query}`},
      headers: {
        'X-RapidAPI-Key': 'fb8032f3f6msh70b4ba7315debcep16ca8fjsn88af34360596',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
      }
    };
    
    axios.request(options).then((response) => {
      const res = response.data
      console.log(res.list[0]);
    }).catch(function (error) {
      console.error(error);
    });
  },
};
