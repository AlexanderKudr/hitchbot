import * as dotenv from "dotenv";
dotenv.config();
export const token = process.env.DISCORD_TOKEN;
export const clientId = process.env.CLIENT_ID;
export const guildId = process.env.GUILD_ID;
export const port = process.env.PORT;
