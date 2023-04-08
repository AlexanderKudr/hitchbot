import { token } from "./config/config.js";
import { events } from "./helpers/eventConsumer.js";
import { client } from "./utils/client.js";
import { eventHandler } from "./functions/eventHandler.js";
import { registerCommands } from "./deploy-commands.js";
import "../src/api/server.js";

registerCommands();
Object.values(events).map((event) => eventHandler(event, client));
client.login(token);
