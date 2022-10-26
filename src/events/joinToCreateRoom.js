import { ChannelType } from "discord.js";
import { client } from "../utils/index.js";

let arrayID = [];
export const joinToCreateRoom = {
  name: "voiceStateUpdate",
  on: true,
  async execute(oldState, newState) {
    const user = await client.users.fetch(newState.id);
    const member = await newState.guild.members.fetch(user);

    if (newState.channelId === "1034200772935696465") {
      const channel = await newState.guild.channels.create({
        name: `${user.username}'s room`,
        type: ChannelType.GuildVoice,
        parent: newState.channel.parent,
        // permissionOverwrites: [
        //   {
        //     id: newState.guild.id,
        //     allow: ["VIEW_CHANNEL"],
        //   },
        // ],
      });

      member.voice.setChannel(channel);
      arrayID.push(channel.id);
    } else if (arrayID.includes(oldState.channelId)) {
      if (oldState.channel.members.size === 0) {
        oldState.channel.delete();
        arrayID = arrayID.filter((arrId) => arrId !== oldState.channelId);
      }
    }
  },
};
