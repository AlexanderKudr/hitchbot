import { ready } from "../events/ready.js";
import { interactionCreate } from "../events/interactionCreate.js";
import { joinToCreateRoom } from "../events/joinToCreateRoom.js";

export const events = {
  //When the client is ready, this code print: Ready!
  ready,
  //reply to commands
  interactionCreate,
  //bot will create a room when join 
  joinToCreateRoom
};
