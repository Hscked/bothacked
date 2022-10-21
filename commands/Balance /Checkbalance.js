/*CMD
  command: Checkbalance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Balance 
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
var balance = data.balance.Get

Bot.sendMessage(balance)
