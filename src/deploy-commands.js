import { commands } from "./helpers/commandConsumer.js";
import { REST, Routes } from "discord.js";
import { token, clientId, guildId } from "./config/config.js";

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

