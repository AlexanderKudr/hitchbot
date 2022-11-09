import { SlashCommandBuilder, italic, bold } from "discord.js";
import axios from "axios";

export const lyrics = {
  data: new SlashCommandBuilder()
    .setName("lyrics")
    .setDescription("Search for lyrics")
    .addStringOption((option) =>
      option.setName("song-and-artist").setDescription("song space artist. Ex: adele hello")
    ),
  execute: async (interaction) => {
    const getName = interaction.options.getString("song-and-artist");
    const arr = getName.split(" ");
    console.log(arr)
    const options = {
      method: "GET",
      url: `https://lyrics-plus.p.rapidapi.com/lyrics/${arr[0]}/${arr[1]}`,
      headers: {
        "X-RapidAPI-Key": "fb8032f3f6msh70b4ba7315debcep16ca8fjsn88af34360596",
        "X-RapidAPI-Host": "lyrics-plus.p.rapidapi.com",
      },
    };
    const f = await axios.request(options);
    const response = await f.data;
    console.log(response);
    await interaction.reply(`${bold(response.name)} 
    ${italic(response.lyrics)}`);
  },
};
