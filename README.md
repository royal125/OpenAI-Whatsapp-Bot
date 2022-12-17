<p align="center">
  <a href="" rel="noopener">
 <img src="./OpenAI Whatsapp Bot.png" alt="OpenAI Whatsapp Bot"></a>
</p>

<h3 align="center">OpenAI-Whatsapp-Bot</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/IhsanDevs/OpenAI-Whatsapp-Bot.svg)](https://github.com/IhsanDevs/OpenAI-Whatsapp-Bot/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/IhsanDevs/OpenAI-Whatsapp-Bot.svg)](https://github.com/IhsanDevs/OpenAI-Whatsapp-Bot/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Simple implementation OpenAI in Whatsapp chatbot.
    <br> 
</p>

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)

## 🏁 Getting Started <a name = "getting_started"></a>

Just clone this repo and run the following command in your terminal

```bash
git clone https://github.com/IhsanDevs/OpenAI-Whatsapp-Bot.git
```

Install all the dependencies

```bash
npm install
```

Copy the `.env.example` file to `.env` and fill the required fields

```bash
cp .env.example .env
```

Open OpenAI dashboard and create a new API key

```
https://beta.openai.com/account/api-keys
```

Set the API key in the `.env` file

```
OPENAI_API=YOUR_API_KEY
```

Then run the following command to start the server

```bash
npm run watch
```

Scan the QR code using your Whatsapp app and start chatting with the bot using prefix from `.env` file

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJS](https://nodejs.org/en/) - Server Environment
- [Whatsapp-Web.js](https://wwebjs.dev/) - Whatsapp Web API
- [OpenAI](https://openai.com/) - OpenAI API

## ✍️ Authors <a name = "authors"></a>

- [@IhsanDevs](https://github.com/IhsanDevs) - Just code it
