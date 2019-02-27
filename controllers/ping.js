const Telegram = require("telegram-node-bot");

class pingController extends Telegram.TelegramBaseController {
  pingHandler($) {
    // RESPON
    $.sendMessage("Meow...");
  }

  get routes() {
    return {
      pingCommand: "pingHandler"
    };
  }
}

module.exports = pingController;
