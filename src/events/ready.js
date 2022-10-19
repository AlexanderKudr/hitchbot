export const ready = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};

export const ifReady = (val, client) => {
  if (val.once)
    client.once(val.name, (...args) => val.execute(...args));
};

