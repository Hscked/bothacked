/*CMD
  command: Dep
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Depisit
  answer: 
  keyboard: 
  aliases: deposit 📥
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

if (params== "next"){

var ty = [[
  { title: "DGB", command: "/address DGB" },{ title: "TRX", command: "/address TRX" }]]

Bot.sendInlineKeyboard(ty, "Select The deposit method you want to test")


return }
var ty = [[
  { title: "DASH", command: "/getaddress DASH" },
  { title: "LTC", command: "/getaddress LTC" },{ title: "DOGE", command: "/getaddress DOGE" }],[{ title: "BTC", command: "/getaddress BTC" },{ title: "BCH", command: "/getaddress BCH" },{ title: "ZEC", command: "/getaddress ZEC" }],[{ title: "NEXT", command: "Dep next" }]]

Bot.sendInlineKeyboard(ty, "Select The deposit method you want to test")

