/*CMD
  command: onwithdeaw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
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
var txid = data.txd
var amount = data.amount
var address = data.address
var cur = data.currency
var by = data.withdrawee
var cur = data.currency


if (by>= user.telegramid && by <=user.telegramid){

Bot.sendMessage("✅ *Your Withdraw Has been sent*\n\n💰 *Amount*: "+amount+" "+cur+"\n📁 *Address*: "+address+"\n\n➕ *Txid*: "+txid+"\n📅 *Status*: confirmed ✅")
}
