import { commands } from "../helpers/commandConsumer.js";

export const interactionCreate = {
  name: "interactionCreate",
  on: true,
  async execute(interaction) {
    
    if (!interaction.isChatInputCommand()) return;

    try {
      await commands[interaction.commandName].execute(interaction);
    } catch (err) {
      console.error(err.message);
    }
    
  },
};

export const interactionCreateHandler = (intCreate, client) => {
  if (intCreate.on) {
    client.on(intCreate.name, (...args) => intCreate.execute(...args));
  }
};
