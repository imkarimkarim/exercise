#!/usr/bin/python

import requests
import json 

endpoint = "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/json/proxies-advanced.json"

res = requests.get(endpoint)
response = json.loads(res.text)
print(response)
