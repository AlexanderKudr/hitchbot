import { ping } from "../commands/ping.js";
import { user } from "../commands/user.js";
import { server } from "../commands/server.js";

export const commands = [
  ping.data,
  user.data,
  server.data,
];
