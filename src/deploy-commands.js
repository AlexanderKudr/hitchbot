import { REST, Routes } from "discord.js";
import { token, clientId, guildId } from "./config/config.js";
import { commands } from "./helpers/commandConsumer.js";

const rest = new REST({ version: "10" }).setToken(token);
export const registerCommands = async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest
      .put(Routes.applicationGuildCommands(clientId, guildId), {
        body: commands,
      })
      .then((data) =>
        console.log(
          `Successfully registered ${data.length} application commands.`
        )
      );
  } catch (err) {
    console.log(err);
  }
};

// import fs from "fs";
// import path from "path";

// if (token && clientId && guildId) {
//   const commands = [];
//   const commandsPath = path.join(process.cwd(), "src/commands");
//   console.log(commandsPath);
//   // const commandFiles = fs
//   //   .readdirSync(commandsPath)
//   //   .filter((file) => file.endsWith(".js"));
//   // for (const file of commandFiles) {
//   //   const filePath = path.join(commandsPath, file);
//   //   const command = import(filePath);
//   //   commands.push(command.data.toJSON());
//   // }

//   const rest = new REST({ version: "10" }).setToken(token);

//   rest
//     .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
//     .then((data) =>
//       console.log(
//         `Successfully registered ${data.length} application commands.`
//       )
//     )
//     .catch(console.error);
// }
//      else {
//   console.log(`Something is missing`)
// }
