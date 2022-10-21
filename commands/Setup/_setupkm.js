/*CMD
  command: /setupkm
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Send this command to your bot 

//Get all Api and webhook from  @DevCryptoWalletBot


var api_key = "cdskpnyglvz4Tdsfbscode5"

var permit_key = "v3ecfdrggaka"

var deposit_webhook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=Deposit%26transaction&public_user_token=2f20cc096596aaa73ffedb5a5a641bf6&user_id=14200641"

var withdrawal_webhook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=send%26withdraw&public_user_token=f34eab48bf189571ef36c28d42c05f1c&user_id=14200641"

var balance_webhook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=balance%26api&public_user_token=bf9443399b4c4404672ef1885a79e976&user_id=14200641"

var check_deposit_webhook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=DDeposit%406&public_user_token=7497f608fe8224579faa02716beebb3f&user_id=14200641"

var transfer_to_email_hook = "https://api.bots.business/v1/bots/703862/new-webhook?&command=Email%26transaction&public_user_token=c1e1c5cc4a3347e8aa59f239fc7d95ef&user_id=901162"

var cod = Bot.getProperty("api_list", { list: {} })
var cur = "SETUP"
cod.list[cur] = { apikey: api_key, permitkey: permit_key, deposi: deposit_webhook,withdraw: withdrawal_webhook, balance: balance_webhook, check: check_deposit_webhook,email: transfer_to_email_hook}
Bot.setProperty("api_list", cod, "json")
Bot.sendMessage("Success  setup")
