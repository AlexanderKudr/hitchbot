import { client } from "../utils/client.js";
import { ChannelType } from "discord.js";
//found a bug (when inside temporary channel, 
// you can join into JTC again then printing infite channels, fix with permissions)
let arrayID = [];
export const joinToCreateRoom = {
  name: "voiceStateUpdate",
  on: true,
  async execute(oldState, newState) {
    const user = await client.users.fetch(newState.id);
    const member = await newState.guild.members.fetch(user);

    if (newState.channelId === "1037049824903696474") {
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
