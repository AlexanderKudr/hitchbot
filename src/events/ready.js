export const ready = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};

export const ifReady = (ready, client) => {
  if (ready.once)
    client.once(ready.name, (...args) => ready.execute(...args));
};

