/*CMD
  command: Withdraw 📤
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

//⚠ Warning Webhook lib must be installed


var cur = "SETUP"
var cod = Bot.getProperty("api_list", { list: {} })

var onsuccess = Libs.Webhooks.getUrlFor({
  command: "onwithdeaw",
  user_id: user.id
}) //success command


HTTP.post({
  url: cod.list[cur].withdraw,
  body: {
    secretkey: cod.list[cur].apikey,
    currency: "dgb",
    value: "0.1",
    user: user.telegramid,
    address: "dgb1qc060k2vgew6ed3cf9s85w8g03nlxsc6k285k6p",
    webhook: onsuccess
  }
})

