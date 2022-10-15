import { REST, Routes } from "discord.js";
import fs from 'fs'
import path from 'path'

import * as dotenv from "dotenv";
dotenv.config();

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
  
if (token && clientId && guildId) {
  
  const commands = [];
  const commandsPath = path.join(process.cwd(), 'src/commands');
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
	  const filePath = path.join(commandsPath, file);
	  const command = import(filePath);
	  commands.push(command.data.toJSON());
  }

  const rest = new REST({ version: "10" }).setToken(token);

  rest
    .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then((data) =>
      console.log(
        `Successfully registered ${data.length} application commands.`
      )
    )
    .catch(console.error);
} else {
  console.log(`Something is missing`)
}
