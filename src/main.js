import { token } from "./config/config.js";
import { events } from "./helpers/eventConsumer.js";
import { client } from "./utils/index.js";
import { eventHandler } from "./events/eventHandler.js";
import { registerCommands } from "./deploy-commands.js";
import "../src/api/server.js"

//register commands from deploy-commands.js file
registerCommands();
//read about event in eventConsumer.js
Object.values(events).map((event) => eventHandler(event, client));
//Login to Discord with client's (bot's) token.
client.login(token); 
