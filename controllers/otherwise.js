const Telegram = require("telegram-node-bot");

class otherwiseController extends Telegram.TelegramBaseController {
  handle($){
      $.sendMessage("hmm, aku nggak ngerti apa yang kamu katakan :(");
  }
}

module.exports = otherwiseController;    