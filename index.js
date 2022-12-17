const { Client, LocalAuth } = require("whatsapp-web.js");
require("dotenv").config();
const qrcode = require("qrcode-terminal");
const PREFIX = process.env.PREFIX_BOT ?? "!please";
const BOT_NAME = process.env.BOT_NAME ?? "Ihsan Devs";
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  // clear terminal
  console.clear();
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", (session) => {
  // clear terminal
  console.clear();
  console.log("Client is authenticated!");
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  if (msg.body.startsWith(PREFIX)) {
    const message = msg.body.replace(`${PREFIX} `, "");

    response = await bot(message);
    msg.reply(response);
  }
});

client.on("message_create", async (msg) => {
  if (msg.body.startsWith(PREFIX)) {
    const message = msg.body.replace(`${PREFIX} `, "");

    response = await bot(message);
    msg.reply(response);
  }
});

client.initialize();

async function bot(message) {
  let prompt_template =
    "Saya adalah kecerdasan buatan bernama " +
    BOT_NAME +
    " AI yang dikembangkan oleh tim teknologi bernama AI Tech.\n\nHuman: Hai. Apa kabar?\n" +
    BOT_NAME +
    ": Kabarku baik. Ada yang bisa saya bantu?\nHuman: " +
    message +
    "\n" +
    BOT_NAME +
    ": ";

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt_template,
      temperature: 0.9,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " " + BOT_NAME + ":"],
    });
    console.log(response.data.choices[0].text);

    return response.data.choices[0].text;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      return "Maaf, saya tidak mengerti maksud anda.";
    } else {
      console.log(error.message);
      return "Maaf, saya tidak mengerti maksud anda.";
    }
  }
}
