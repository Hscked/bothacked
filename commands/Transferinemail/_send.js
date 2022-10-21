/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Transferinemail
  answer: Enter your email address 
  keyboard: 
  aliases: transfer ➖
CMD*/

//⚠ Warning Webhook lib must be installed


var cur = "SETUP"
var cod = Bot.getProperty("api_list", { list: {} })

var onsuccess = Libs.Webhooks.getUrlFor({
  command: "onsuck",
  user_id: user.id
}) //success command


HTTP.post({
  url: cod.list[cur].email,
  body: {
    secretkey: cod.list[cur].apikey,
    currency: "dgb",
    value: "0.00000001",
email:""+message+"",
    user: user.telegramid,
    webhook: onsuccess
  }
})

