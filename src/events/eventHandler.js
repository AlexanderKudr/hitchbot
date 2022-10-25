export const eventHandler = (event, client) => {
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else if (event.on) {
    client.on(event.name, (...args) => event.execute(...args));
  }
};
