import { SlashCommandBuilder, italic, bold } from "discord.js";
import axios from "axios";

export const lyrics = {
  data: new SlashCommandBuilder()
    .setName("lyrics")
    .setDescription("Search for lyrics")
    .addStringOption((option) =>
      option.setName("song-and-artist").setDescription("ex: hello adele")
    ),
  execute: async (interaction) => {
    const getArtist = interaction.options.getString("artist");
    const getSong = interaction.options.getString("song");
    const options = {
      method: "GET",
      url: `https://lyrics-plus.p.rapidapi.com/lyrics/${getSong}/${getArtist}`,
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
