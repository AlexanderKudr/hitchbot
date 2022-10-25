import { token } from "./config/config.js";
import { events } from "./helpers/eventConsumer.js";
import { registerCommands } from "./deploy-commands.js";
import { eventHandler } from "./events/eventHandler.js";
import { Client, GatewayIntentBits, Partials } from "discord.js";
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
//register commands from deploy-commands.js file
registerCommands();
//read about event in eventConsumer.js
Object.values(events).map((event) => eventHandler(event, client));
//Login to Discord with client's (bot's) token.
client.login(token);
