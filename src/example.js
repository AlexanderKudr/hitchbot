import { token, guildId } from "./config/config.js";
import { REST, Response } from "discord.js";

export const test = async() => {
  const rest = new REST({ version: "10" }).setToken(token);
  const response = await rest.get(Response.guildMembers(guildId))
  console.log(response)
}
test();