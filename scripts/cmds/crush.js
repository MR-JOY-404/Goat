module.exports = {
  config: {
    name: "crush",
    version: "7.0",
    author: "JOY",
    countDown: 5,
    role: 0,
    shortDescription: "all video Ã°Å¸â€œÂ·",
    longDescription: "",
    category: "crush",
    guide: "{pn}"
  },
   onStart: async function ({ message }) {
   const { data } = await require("axios")("https://joyapi.onrender.com/random");
message.send({
  body: 'BOT OWNER\n JOY AHMED',attachment: await global.utils.getStreamFromURL(data.video)
})
}
     }
