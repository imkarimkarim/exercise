#this will send a Hello to any message :) just learning...
import requests

def response_to_user_message(text, userId):
    r = requests.post('https://api.telegram.org/bot%(key)s/sendMessage?chat_id=%(id)s&text=%(text)s'
    %{'key': key, 'id': userId, 'text': text})
with open("api_key") as f:
    key = f.read()

#store last message that was responded
with open("lastUpdateId") as f:
    last_update_id = f.read()
    new_r_updateId = 0

#getting unresponded messages
r = requests.get('https://api.telegram.org/bot%(key)s/getUpdates?offset=%(update_id)s'
%{'key': key, 'update_id': last_update_id})

data = r.json()
user = data['result']

#if there is a new message say hello
for a in user:
    if a['message']['text'] == "/hello":
        text = "Hello " + a['message']['from']['first_name']
        userId = a['message']['from']['id']
        response_to_user_message(text, userId)        
        new_r_updateId = a['update_id']

#if you sent new message store last message you responded
if new_r_updateId > int(last_update_id) or new_r_updateId == int(last_update_id):
    with open("lastUpdateId", "w") as f:
        new_r_updateId = (int(new_r_updateId)) + 1
        f.write(str(new_r_updateId))
