import { SlashCommandBuilder } from "discord.js";
import axios from "axios";
export const lyrics = {
  data: new SlashCommandBuilder()
    .setName("lyrics")
    .setDescription("Search for lyrics"),
  execute: async (interaction) => {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    const options = {
      method: 'GET',
      url: 'https://lyrics-plus.p.rapidapi.com/lyrics/hello/adele',
      headers: {
        'X-RapidAPI-Key': 'fb8032f3f6msh70b4ba7315debcep16ca8fjsn88af34360596',
        'X-RapidAPI-Host': 'lyrics-plus.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    await interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );
  },
};