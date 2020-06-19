# doing the same thing in "helloToNameOfWhoSendIt.py" and more
# but this time it gets easier with "python-telegram-bot"
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
import logging

# sending hello message on /start
def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Hello " + update.effective_user.first_name)

# copy and send the message wich user sent
def echo(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text=update.message.text)

# retun after /caps text in UpperCase
def caps(update, context):
    text_caps = ' '.join(context.args).upper()
    context.bot.send_message(chat_id=update.effective_chat.id, text=text_caps)

# reading apiKey
with open("api_key") as f:
    key = f.read()

# init necessary things
updater = Updater(token=key, use_context=True)
dispatcher = updater.dispatcher
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
updater.start_polling()

# set and add handlers
start_handler = CommandHandler('start', start)
echo_handler = MessageHandler(Filters.text, echo)
caps_handler = CommandHandler('caps', caps)
dispatcher.add_handler(start_handler)
dispatcher.add_handler(echo_handler)
dispatcher.add_handler(caps_handler)
