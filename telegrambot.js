// Include Telegraf module
const Telegraf = require("telegraf");
const Telegram = require("telegraf/telegram");
// Create a bot using TOKEN provided as environment variable
const bot = new Telegraf("733100943:AAGsNHfJJSwbX_wzrAi88Xs3Oqnu18zF3B4");
const telegram = new Telegram("733100943:AAGsNHfJJSwbX_wzrAi88Xs3Oqnu18zF3B4");
// const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");
let command = ["🔍 Cek Pakan", "😎 Popular", "/start", "/puss"];

// bot.command('inline', (ctx) => {
//   return ctx.reply('<b>Coke</b> or <i>Pepsi?</i>', Extra.HTML().markup((m) =>
//     m.inlineKeyboard([
//       m.callbackButton('Coke', 'Coke'),
//       m.callbackButton('Pepsi', 'Pepsi')
//     ])))
// })

// bot.command('caption', (ctx) => {
//   return ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' },
//     Extra.load({ caption: 'Caption' })
//       .markdown()
//       .markup((m) =>
//         m.inlineKeyboard([
//           m.callbackButton('Plain', 'plain'),
//           m.callbackButton('Italic', 'italic')
//         ])
//       )
//   )
// })

// bot.hears(/\/wrap (\d+)/, (ctx) => {
//   return ctx.reply('Keyboard wrap', Extra.markup(
//     Markup.keyboard(['one', 'two', 'three', 'four', 'five', 'six'], {
//       columns: parseInt(ctx.match[1])
//     })
//   ))
// })

bot.start(({ reply }) => {
  return reply(
    "Meow...",
    Markup.keyboard([
      ["🔍 Cek Pakan", "😎 Popular"] // Row1 with 2 buttons
    ])
      .resize()
      .extra()
  );
});

bot.command("puss", ({ reply }) => {
  return reply(
    "Meow...",
    Markup.keyboard([
      ["🔍 Cek Pakan", "😎 Popular"] // Row1 with 2 buttons
    ])
      .resize()
      .extra()
  );
});

let x = 5;
//dummy trigger
setTimeout(() => {
  x = 1;
}, 5000);

setTimeout(() => {
  x = 0;
}, 10000);

bot.command("pantau", ({ reply }) => {
  reply("Ok, aku akan pantau 😎");

  let cek1 = setInterval(() => {
    //KONDISI
    if (x == 1) {
      reply(
        "Pakan tinggal sedikit (1/5)",
        Markup.keyboard([
          ["🔍 Cek Pakan", "😎 Popular"] // Row1 with 2 buttons
        ])
          .resize()
          .extra()
      );
      return clearInterval(cek1);
    }
  }, 1000);

  let cek0 = setInterval(() => {
    //KONDISI
    if (x == 0) {
      reply(
        "Pakan habis! (0/5)",
        Markup.keyboard([
          ["🔍 Cek Pakan", "😎 Popular"] // Row1 with 2 buttons
        ])
          .resize()
          .extra()
      );
      return clearInterval(cek0);
    }
  }, 1000);
  
});

// HANDLE OTHERWISE
bot.use((ctx, next) => {
  return next(ctx).then(() => {
    let pesan = ctx.update.message.text;
    if (command.includes(pesan) != true) {
      ctx.reply("Hmmm, aku ngga ngerti. Coba ketik /start atau ketik /puss");
    }
  });
});

bot.hears("🔍 Cek Pakan", ctx => {
  ctx.reply("Yay!");
  ctx.reply("Yay!");
});
bot.hears("😎 Popular", ctx => {
  ctx.reply("Free hugs. Call now!");
});

bot.startPolling();
