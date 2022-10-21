/*CMD
  command: onsuck
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Transferinemail
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {return }
var data = JSON.parse(content)
var error = data.error
if (error) {
  Bot.inspect(error)
  return
}
var amount = data.amount
var currency = data.currency
var email  = data.address
var txd  = data.txd
var fom  = data.withdrawee
if (fom>= user.telegramid && fom <=user.telegramid){

Bot.sendMessage("✅ *Your Withdraw Has been sent*\n\n💰 *Amount*: "+amount+" "+currency+"\n📁 *Email*: "+email+"\n\n➕ *Txid*: "+txd+"\n📅 *Status*: confirmed ✅")
}
