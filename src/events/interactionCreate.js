import { ping } from "../commands/ping.js";
export const interactionCreate = {
  name: "interactionCreate",
  on: true,
  execute: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (ping.data.name) return ping.execute(interaction);
  },
};

export const interactionCreateHandler = (val, client) => {
  if (val.on) {
    client.on(val.name, (...args) => val.execute(...args));
  }
};
