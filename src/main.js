// Require the necessary discord.js classes
import { Client, GatewayIntentBits, Collection } from "discord.js";
import { token } from "./config/config.js";
import { registerCommands } from "./deploy-commands.js";
import { events } from "./helpers/eventConsumer.js";

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

registerCommands();

// client.on("interactionCreate", async (interaction) => {
//   if (!interaction.isChatInputCommand()) return;

//   if (interaction.commandName === "ping") {
//     await interaction.reply({ content: "Secret Pong!", ephemeral: true });
//   }
// });
// When the client is ready, run this code (only once)
const test = (val) => {
  if (val.once)
    client.once(val.name, (...args) => val.execute(...args, client));
  // else client.on(val.name, (...args) => val.execute(...args, client));
};
test(events.ready);
// test(events.ready || events.interactionCreate);

// client.once("ready", () => {
//   console.log("Ready!");
// });

// Login to Discord with your client's token
client.login(token);

// if (token) {
//   const client = new Client({ intents: [GatewayIntentBits.Guilds] });
//   client.commands = new Collection();

//   /** commandPath __dirname = \Users\Alex\Desktop\Coding\Projects\JS\hitchbot\src\ + "commands" */
//   const commandsPath = path.join(process.cwd(), "commands");
//   const commandFiles = fs
//     .readdirSync(commandsPath)
//     .filter((file) => file.endsWith(".js"));

//   for (const file of commandFiles) {
// 	/**commandPath + file_name => \Users\Alex\Desktop\Coding\Projects\JS\hitchbot\src\commands\ping.js */
//     const filePath = path.join(commandsPath, file);
// 	/** export const ping = something */
//     const command = import(filePath);
//     // Set a new item in the Collection
//     // With the key as the command name and the value as the exported module
//     client.commands.set(command.data.name, command);
//   }

//   client.once("ready", () => {
//     console.log("Ready!");
//   });

//   client.on("interactionCreate", async (interaction) => {
//     if (!interaction.isChatInputCommand()) return;

// 	const command = interaction.client.commands.get(interaction.commandName)

// 	if(!command) return;

//  	try {
// 		await command.execute(interaction);
// 	} catch (error) {
// 		console.error(error);
// 		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
// 	}
//   });

//   // Login to Discord with your client's token
//   client.login(token);
// }
