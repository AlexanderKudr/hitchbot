import { token } from "./config/config.js";
import { events } from "./helpers/eventConsumer.js";
import { registerCommands } from "./deploy-commands.js";
import {
  Client,
  GatewayIntentBits,
  Collection,
  Partials,
} from "discord.js";
import "./api/server.js";

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [Partials.Channel],
});

client.commands = new Collection();

const { ready, ifReady, interactionCreate, interactionCreateHandler } = events;
//register commands from deploy-commands.js file
registerCommands();
//reply to commands
interactionCreateHandler(interactionCreate, client);
// When the client is ready, this code print: Ready!
ifReady(ready, client);
// Login to Discord with client's (bot's) token.
client.login(token);

const voiceCollection = new Collection();

client.on("voiceStateUpdate", async (oldState, newState) => {

  console.log("test 1")
  const user = await client.users.fetch(newState.id);
  const member = await newState.guild.members.fetch(user);
  console.log("test 2");
  // if (!oldState.channelId && newState.channelId === "1033542133984018512") {

  if (newState.channelId === "1033542133984018512") {
    console.log("test 3");
    const channel = await newState.guild.channels.create("Join to Create", {
      name: "test",
      type: "voice",
      parent: newState.channel.parent,
    });
    console.log("test 4");
    member.voice.setChannel(channel);
    voiceCollection.set(user.id, channel.id);
  }
  else if (!newState.channel) {
    if (oldState.channel.id === voiceCollection.get(newState.id))
      return oldState.channel.delete();
  }
});
