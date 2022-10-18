import { pingCommand } from "../commands/ping.js";
import { userCommand } from "../commands/user.js";
import { serverCommand } from "../commands/server.js";

export const commands = [
  pingCommand.data,
  userCommand.data,
  serverCommand.data,
];
