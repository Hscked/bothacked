/*CMD
  command: /getaddress
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Depisit
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

var ad = Bot.getProperty("t"+params+""+user.telegramid)
if(ad ==undefined){

var currency = params //put currency 
Bot.sendMessage("⌛ *Hold On Generating  your "+params+" address*")

var cur = "SETUP"
var cod = Bot.getProperty("api_list", { list: {} })
var url = Libs.Webhooks.getUrlFor({
  command: "arabjay",
  user_id: user.id
})//onsuccess command 
HTTP.post({
  url:
   cod.list[cur].deposi,
  body: {
    secretkey: cod.list[cur].apikey,
    Permitkey: cod.list[cur].permitkey,
    currency: currency,
    user: user.telegramid,
    webhook: url
  }
})

return }

Bot.sendMessage("✅ *Your "+params+" Deposit address* \n\n`"+ad+"`\n\nYour deposited be confimed before 1 - 4 minutes")
