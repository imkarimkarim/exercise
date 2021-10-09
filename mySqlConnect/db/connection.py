import os
from dotenv import load_dotenv
import pymysql.cursors
load_dotenv()

connection = pymysql.connect(
    host=os.getenv('HOST'),
    user=os.getenv('USER'),
    password=os.getenv('PASSWORD'),
    database=os.getenv('DATABASE'),
    cursorclass=pymysql.cursors.DictCursor)
