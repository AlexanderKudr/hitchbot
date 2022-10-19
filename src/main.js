import { token } from "./config/config.js";
import { events } from "./helpers/eventConsumer.js";
import { registerCommands } from "./deploy-commands.js";
import { Client, GatewayIntentBits, Collection } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const { ready, ifReady, interactionCreate, interactionCreateHandler } = events;
//register commands from deploy-commands.js file
registerCommands();
//reply to commands
interactionCreateHandler(interactionCreate, client)
// When the client is ready, this code print: Ready!
ifReady(ready, client);
// Login to Discord with client's (bot's) token.
client.login(token);
