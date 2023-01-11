import * as dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const token = process.env.DISCORD_TOKEN;
export const guildId = process.env.GUILD_ID;
export const clientId = process.env.CLIENT_ID;

//rapid api
export const urbanHost = process.env.RAPID_API_URBAN_HOST;
export const githubHost = process.env.RAPID_API_GITHUB_HOST;
export const rapidApiKey = process.env.RAPID_API_KEY;
export const dadjokeHost = process.env.RAPID_API_DADJOKE_HOST;
//rapid links
export const urbanLink = process.env.RAPID_API_URBAN_LINK;
export const dadjokeLink = process.env.RAPID_API_GITHUB_DADJOKE_LINK;
export const githubDevLink = process.env.RAPID_API_GITHUB_DEV_LINK;
export const githubReposLink = process.env.RAPID_API_GITHUB_REPO_LINK;
