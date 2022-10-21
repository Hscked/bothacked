/*CMD
  command: Balance 💸
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Balance 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//⚠ Warning Webhook lib must be installed

var cur = "SETUP"
var cod = Bot.getProperty("api_list", { list: {} })



var onsuccess = Libs.Webhooks.getUrlFor({
  command: "Checkbalance",
  user_id: user.id
}) //success or callback command
HTTP.post({
  url: cod.list[cur].balance,
  body: {
    secretkey: cod.list[cur].apikey,
    currency: "trx",
    webhook: onsuccess
  }
})

