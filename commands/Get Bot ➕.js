/*CMD
  command: Get Bot ➕
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter your botsbusiness email address 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
var bokoharams_bad_nigeria = User.getProperty("abuja")
var buttons = [
  [{ text: "🔙 Back", callback_data: "Cancel  ❌" }]
]
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}
if (!validateEmail(message)) {
  var t = "Invalid Email, maybe email not registered on botsbusiness"
Bot.sendMessage(t)

  return
}
var text = "✅ Sent to "+message+""

Bot.sendMessage(text)


BBAdmin.installBot({
email:message,
bot_id: 745819})

