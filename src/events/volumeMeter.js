import { client } from "../utils/client.js";
import { ChannelType, PermissionsBitField } from "discord.js";

export const volumeMeter = {
  name: "voiceStateUpdate",
  on: true,

  async execute(oldState, newState) {
    // check if the user has joined or left a voice channel
    if (oldState.channelID !== newState.channelID) {
      if (newState.channelID) {
        // user has joined a voice channel
        const voiceChannel = client.channels.cache.get(newState.channelID);
        if (voiceChannel.type === "voice") {
          // join the voice channel and get the audio data
          const connection = await voiceChannel.join();
          const audioStream = connection.receiver.createStream(
            newState.member.user,
            { mode: "pcm" }
          );
          console.log(audioStream);

          audioStream.on("data", (data) => {
            const volume = getVolumeFromAudioData(audioStream, data);
            if (!newState.member.mute && volume > 20) {
              newState.member.voice.setMute(true, "Too loud");
            }
          });
        }
      } else {
        // user has left a voice channel
        console.log(">>> user left the channel");
      }
    }
  },
};

function getVolumeFromAudioData(stream, data) {
  const audioContext = new AudioContext();
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  stream.pipe(audioContext.createMediaStreamSource(data)).connect(analyser);

  analyser.getByteTimeDomainData(dataArray);
  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) {
    sum += dataArray[i] ** 2;
  }
  const rms = Math.sqrt(sum / dataArray.length);
  const volume = 20 * Math.log10(rms / 32767);
  console.log(">>> Volume: ${volume} dB");

  return volume;
}
