import { commands } from "../helpers/commandConsumer.js";

export const interactionCreate = {
  name: "interactionCreate",
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === "ping") {
      interaction.reply("Reacting with Pong!");
    }
  },
};
//todo here ASAP